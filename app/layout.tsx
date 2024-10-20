import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task A Gotchi",
  description: "Gamify your tasks and get your day done more effectively.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
