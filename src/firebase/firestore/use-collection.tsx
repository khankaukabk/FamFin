'use client';

import { useState, useEffect, useMemo } from 'react';
import {
  Query,
  onSnapshot,
  DocumentData,
  FirestoreError,
  QuerySnapshot,
  CollectionReference,
} from 'firebase/firestore';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

/** Utility type to add an 'id' field to a given type T. */
export type WithId<T> = T & { id: string };

/**
 * Interface for the return value of the useCollection hook.
 * @template T Type of the document data.
 */
export interface UseCollectionResult<T> {
  data: WithId<T>[] | null; // Document data with ID, or null.
  isLoading: boolean;       // True if loading.
  error: FirestoreError | Error | null; // Error object, or null.
}

/* Internal implementation of Query:
  https://github.com/firebase/firebase-js-sdk/blob/c5f08a9bc5da0d2b0207802c972d53724ccef055/packages/firestore/src/lite-api/reference.ts#L143
*/
export interface InternalQuery extends Query<DocumentData> {
  _query: {
    path: {
      canonicalString(): string;
      toString(): string;
    }
  }
}

// Define the type for our memoized object
type MemoizedQuery = (CollectionReference<DocumentData> | Query<DocumentData>) & { __memo?: boolean };

/**
 * Custom hook to safely memoize Firestore queries.
 * It adds a hidden flag (__memo) that useCollection checks for.
 */
export function useMemoFirebase(
  factory: () => CollectionReference<DocumentData> | Query<DocumentData> | null,
  deps: any[]
): MemoizedQuery | null {
  return useMemo(() => {
    const query = factory();
    
    // SAFETY CHECK: Only try to define the property if query is an object
    if (query && typeof query === 'object') {
      Object.defineProperty(query, '__memo', {
        value: true,
        enumerable: false, // Hide it from console logs
        writable: true
      });
      return query as MemoizedQuery;
    }
    
    return null;
  }, deps);
}

/**
 * React hook to subscribe to a Firestore collection or query in real-time.
 * Handles nullable references/queries.
 * * IMPORTANT: You must use useMemoFirebase() to create the query passed to this hook.
 */
export function useCollection<T = any>(
  memoizedTargetRefOrQuery: MemoizedQuery | null | undefined,
): UseCollectionResult<T> {
  type ResultItemType = WithId<T>;
  type StateDataType = ResultItemType[] | null;

  const [data, setData] = useState<StateDataType>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<FirestoreError | Error | null>(null);

  useEffect(() => {
    if (!memoizedTargetRefOrQuery) {
      setData(null);
      setIsLoading(false);
      setError(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    // Directly use memoizedTargetRefOrQuery as it's assumed to be the final query
    const unsubscribe = onSnapshot(
      memoizedTargetRefOrQuery,
      (snapshot: QuerySnapshot<DocumentData>) => {
        const results: ResultItemType[] = [];
        for (const doc of snapshot.docs) {
          results.push({ ...(doc.data() as T), id: doc.id });
        }
        setData(results);
        setError(null);
        setIsLoading(false);
      },
      (error: FirestoreError) => {
        // This logic extracts the path from either a ref or a query
        const path: string =
          memoizedTargetRefOrQuery.type === 'collection'
            ? (memoizedTargetRefOrQuery as CollectionReference).path
            : (memoizedTargetRefOrQuery as unknown as InternalQuery)._query.path.canonicalString()

        const contextualError = new FirestorePermissionError({
          operation: 'list',
          path,
        })

        setError(contextualError)
        setData(null)
        setIsLoading(false)

        // trigger global error propagation
        errorEmitter.emit('permission-error', contextualError);
      }
    );

    return () => unsubscribe();
  }, [memoizedTargetRefOrQuery]); // Re-run if the target query/reference changes.

  // Safety check: Ensure the user actually used useMemoFirebase
  if(memoizedTargetRefOrQuery && !memoizedTargetRefOrQuery.__memo) {
    throw new Error('You passed a raw query to useCollection. Please wrap it in useMemoFirebase(() => query, [deps])');
  }

  return { data, isLoading, error };
}