import type { Metadata } from "next";
import Image from "next/image";
import { Login_form } from "@/components/component/login_form";

export const metadata: Metadata = {
    title: "Forgot Password Ladrillo",
    description: "reset your password",
  };

export default function Forgot() {
  return (
    <main className="flex h-screen bg-background">
      <aside className="hidden md:flex w-3/5 p-8 flex-col justify-center items-center">
        <h1 className="text-7xl font-cutive_mono tracking-tighter">L A D R I L O</h1>
      </aside>
        <Login_form />
    </main>
  );
}