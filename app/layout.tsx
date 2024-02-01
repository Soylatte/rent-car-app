import { Footer, Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "SoCar",
  description: "Rent your car wherever you want",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
