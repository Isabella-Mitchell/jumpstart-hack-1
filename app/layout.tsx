import type { Metadata } from "next";
import Header from "./ui/components/Header";
import Footer from "./ui/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "To be completed...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="mainWrapper">
          <Header />
          <main role="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
