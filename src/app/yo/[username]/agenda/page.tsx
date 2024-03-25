import React from 'react';
  
export default function YoAgenda( { params }: {
  params: { username: string }
} ) {
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Esta es mi agenda</p>
      <p>{params.username}</p>
    </main>
  );
}