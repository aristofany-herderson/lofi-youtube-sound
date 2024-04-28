import "@/styles/globals.scss";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-default",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lofi Youtube Sound",
  description: "Listening Lofi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
