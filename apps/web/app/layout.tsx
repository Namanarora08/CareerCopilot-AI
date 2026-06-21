import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "../components/providers/QueryProvider";

export const metadata: Metadata = {
  title: "CareerCopilot Core",
  description: "An AI-native Career Intelligence Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen bg-[#0b0a09] text-[#f5f2eb]">
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
