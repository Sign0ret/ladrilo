import React from 'react';
import type { Metadata } from "next";

type Props = {
  params: {
    username: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Cuenta de ${params.username}`,
  }
}

export default function YoUsername( { params }: {
  params: { username: string }
} ) {
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{params.username}</p>
    </main>
  );
}