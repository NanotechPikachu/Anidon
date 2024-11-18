import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anidon",
  description: "Anime web",
  openGraph: {
    images: [
      { 
        url: 'https://i.imgur.com/r4Ot6St.jpeg',
        height: 1800,
        width: 1600
      }
    ]
  }
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#000000]`}>{children}</body>
    </html>
  );
}
