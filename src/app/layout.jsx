import NavBar from "@/components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Anidon",
  description: "Anime streaming website!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
