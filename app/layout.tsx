import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brainwave Landing Page UI Kit",
  description: "This is the landing page of Brainwave",
};

const gilroy = localFont({
  src: [
    {
      path: './gilroy/Gilroy-Light.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './gilroy/Gilroy-ExtraBold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './gilroy/Gilroy-ExtraBold.otf',
      weight: '400',
      style: 'italic',
    },
  ],
  
  display: "swap",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gilroy.className}>{children}</body>
    </html>
  );
}
