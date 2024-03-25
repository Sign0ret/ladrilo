import React from 'react';
  
export default function YoCatalogo( { params }: {
  params: { username: string }
} ) {
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Este es mi catalogo</p>
      <p>{params.username}</p>
    </main>
  );
}