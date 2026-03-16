import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Titan X Pro",
  description: "E ardhmja e teknologjisë mobile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black antialiased">
        {children}
      </body>
    </html>
  );
}