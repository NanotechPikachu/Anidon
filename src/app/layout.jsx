import NavBar from "@/components/NavBar";
import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Anidon",
  description: "Anime streaming website!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`antialiased`}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
