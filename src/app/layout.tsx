import type { Metadata } from "next";
import { Cutive_Mono, Urbanist } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";

const cutive_mono = Cutive_Mono({ 
  subsets: ["latin"],  
  weight:  '400',
  variable: '--font-cutive_mono',
  display: 'swap',
});

const urbanist = Urbanist({ 
  subsets: ["latin"],  
  weight:  '200',
  variable: '--font-urbanist',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Ladrilos version 3",
  description: "developed by Adolfo and Paulina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cutive_mono.variable} ${urbanist.variable}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
