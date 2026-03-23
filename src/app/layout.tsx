import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trustynx — Trust, verified.",
  description:
    "Trustynx helps doctors prove they're legitimate and helps patients trust who they're seeing. Healthcare verification infrastructure.",
  openGraph: {
    title: "Trustynx — Trust, verified.",
    description:
      "Trustynx makes trust in healthcare instant, visible, and reliable.",
    type: "website",
    url: "https://trustynx.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trustynx — Trust, verified.",
    description:
      "Trustynx makes trust in healthcare instant, visible, and reliable.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
