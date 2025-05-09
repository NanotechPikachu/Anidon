import "./globals.css";

export const metadata = {
  title: "Anison",
  description: "Anime streaming website!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
