import Nav from "./components/layout/navbar/Nav";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="pb-80">
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
