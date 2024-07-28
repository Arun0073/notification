"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster, toast } from 'sonner'

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        {children}
        <Toaster position="top-right" richColors expand={true}/>
      </body>
    </html>
  );
}
