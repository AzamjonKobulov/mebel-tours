import { Manrope, Unbounded } from "next/font/google";

import "./globals.css";
import Nav from "./components/layout/navbar/Nav";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-unbounded",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${unbounded.variable} bg-brand-dark/50`}
      >
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
