import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  metadataBase: new URL("https://jayraj-borate.vercel.app"),
  title: {absolute: "Jayraj Borate", default: "Jayraj Borate"},
  description: "Jayraj Borate Portfolio Website.",
  keywords: ["Jayraj Borate", "Jayraj Ganesh Borate", "Phaltan Satara Western Maharashtra", "VIT Pune", "Vishwajyot International School"],
  authors: [{ name: "Jayraj Ganesh Borate", url: "https://jayraj-borate.vercel.app/" }],
  icons: [
    { url: '/favicon.ico', sizes: '32x32', type: 'image/png' },
  ],
  robots: "index, follow",
  alternates: { canonical: "https://jayraj-borate.vercel.app/" },
  applicationName: "Jayraj Borate",
  creator: "Jayraj Ganesh Borate",
  openGraph: {
    title: "Jayraj Borate",
    description: "Jayraj Borate Portfolio Website.",
    type: "website",
    locale: "en_IN",
    siteName: "Jayraj Borate",
    url: "https://jayraj-borate.vercel.app/",
    images: [
      {
        url: "/ogimage", 
        width: 5000, 
        height: 5000
      },
      {
        url: "/oglogo", 
        width: 1000,
        height: 1000
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={""}
      >
        {children}
      </body>
    </html>
  );
}
