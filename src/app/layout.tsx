import { inter } from "@config/fonts";
import Footer from "@partial/Footer";
import Header from "@partial/Header";
import "@style/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Most Exciting Shopping Place | Platzi Store",
  description:
    "Discover the joy of shopping at the most exciting shopping place! Explore a variety of the latest product collections, find special offers, and enjoy an unforgettable shopping experience at our fun-filled shopping destination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white text-black overflow-x-hidden`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
