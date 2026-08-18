import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-manufacturing-engineer.example"),
  title: "AI Manufacturing Engineer",
  description:
    "AI-powered manufacturing intelligence for factories that want better decisions from existing machine, process, and quality data.",
  openGraph: {
    title: "AI Manufacturing Engineer",
    description:
      "Turn factory data into better manufacturing decisions with an edge-first manufacturing intelligence platform.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Manufacturing Engineer",
    description:
      "Edge-first manufacturing intelligence for small and mid-sized manufacturers.",
  },
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

