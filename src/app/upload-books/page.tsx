
'use client';

import { useState } from 'react';
import { getApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { books as booksObject } from '@/lib/books'; 

// Convert the object of books into an array for uploading
const booksArray = Object.values(booksObject);

export default function UploadBooksPage() {
  const [status, setStatus] = useState('Idle');
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async () => {
    if (!booksArray || booksArray.length === 0) {
      setStatus('No books found in the import file!');
      return;
    }

    setIsUploading(true);
    setStatus('Initializing...');

    try {
      const app = getApp();
      const db = getFirestore(app);
      const booksCollection = collection(db, 'books');

      let count = 0;
      for (const book of booksArray) {
        // We use addDoc to let Firestore generate a unique ID for each book
        await addDoc(booksCollection, book);
        count++;
        setStatus(`Uploaded ${count} of ${booksArray.length}...`);
      }

      setStatus(`Success! Uploaded ${count} books to Firestore.`);
    } catch (error: any) {
      console.error(error);
      setStatus(`Error: ${error.message}`);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-10 font-sans">
      <div className="max-w-xl mx-auto space-y-6 bg-gray-800 p-8 rounded-lg shadow-2xl">
        <h1 className="text-3xl font-bold text-teal-400">Database Seeder</h1>
        
        <div className="p-4 border border-gray-700 rounded bg-gray-900">
          <p className="mb-2">
            <strong>Source:</strong> <code>src/lib/books.ts</code>
          </p>
          <p>
            <strong>Books Found:</strong> {booksArray?.length || 0}
          </p>
        </div>

        <button
          onClick={handleUpload}
          disabled={isUploading || !booksArray?.length}
          className={`w-full px-6 py-3 rounded text-white font-medium transition-colors ${
            isUploading 
              ? 'bg-gray-600 cursor-not-allowed' 
              : 'bg-teal-600 hover:bg-teal-700'
          }`}
        >
          {isUploading ? 'Uploading...' : 'Upload Data to Firestore'}
        </button>

        <div className="p-4 border-l-4 border-blue-500 bg-blue-900/50 rounded">
          <strong>Status:</strong> {status}
        </div>
      </div>
    </div>
  );
}
