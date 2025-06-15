import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amazon Clone",
  description: "A full-stack Amazon clone built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
    </ClerkProvider>
  );
}
