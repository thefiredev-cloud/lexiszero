import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lexis Zero - Legal Intelligence, Zero Billable Hours",
  description: "AI-powered legal analysis for contracts, compliance, and case research at a fraction of the cost.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
