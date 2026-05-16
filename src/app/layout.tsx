import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingContactButtons from "@/components/ui/FloatingContactButtons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luyện thi Aptis ESOL B1/B2 tại 2A Education",
  description: "Khóa luyện thi Aptis ESOL 12 buổi, học online/offline, luyện sát đề, chấm Speaking & Writing 1-1, tư vấn lộ trình miễn phí.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${inter.className} pb-16 md:pb-0`}>
        {children}
        <FloatingContactButtons />
      </body>
    </html>
  );
}