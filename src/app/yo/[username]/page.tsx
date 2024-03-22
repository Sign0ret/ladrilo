import React from 'react';
  
export default function YoUsername( { params }: {
  params: { username: string }
} ) {
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{params.username}</p>
    </main>
  );
}