import Footer from "./components/layout/footer/Footer";
import Nav from "./components/layout/navbar/Nav";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
