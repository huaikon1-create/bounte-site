import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bounte-design-yw.dasenya66.chatgpt.site"),
  title: "朔果 · Bounte 空间设计",
  description: "朔果 Bounte 空间设计工作室官方网站与住宅设计案例。",
  openGraph: {
    title: "朔果 · Bounte 空间设计",
    description: "朔果 Bounte 空间设计工作室官方网站与住宅设计案例。",
    images: ["/image/bounte-social-cover.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/image/bounte-social-cover.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
