'use client';

import { useState } from 'react';
import { getApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { books } from '@/lib/books'; // Importing your local data

export default function UploadBooksPage() {
  const [status, setStatus] = useState('Idle');
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async () => {
    setIsUploading(true);
    setStatus('Initializing connection...');

    try {
      const app = getApp();
      const db = getFirestore(app);
      
      const entries = Object.entries(books);
      let count = 0;

      for (const [id, bookData] of entries) {
        setStatus(`Uploading: ${bookData.title}...`);
        
        // We use setDoc with the specific ID (e.g., 'security-plus') 
        // so it overwrites/updates the existing document if it exists.
        await setDoc(doc(db, "books", id), bookData);
        
        count++;
      }

      setStatus(`Success! ✅ Uploaded ${count} books to Firestore.`);
    } catch (error: any) {
      console.error(error);
      setStatus(`❌ Error: ${error.message}`);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-10 font-sans flex flex-col items-center justify-center">
      <div className="max-w-xl w-full space-y-8 text-center">
        <h1 className="text-4xl font-bold">Database Seeder</h1>
        
        <div className="p-6 border rounded-xl bg-muted/20">
          <p className="text-lg mb-2">
            <strong>Source:</strong> <code>src/lib/books.ts</code>
          </p>
          <p className="text-muted-foreground">
            Ready to upload <strong>{Object.keys(books).length}</strong> books to your live database.
          </p>
        </div>

        <button
          onClick={handleUpload}
          disabled={isUploading}
          className={`w-full py-4 rounded-lg text-white font-bold text-lg transition-all ${
            isUploading 
              ? 'bg-gray-500 cursor-not-allowed' 
              : 'bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl'
          }`}
        >
          {isUploading ? 'Uploading...' : 'Start Upload'}
        </button>

        <div className="p-4 bg-muted rounded text-sm font-mono">
          <strong>Status:</strong> {status}
        </div>
      </div>
    </div>
  );
}