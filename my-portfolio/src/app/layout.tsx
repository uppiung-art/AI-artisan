import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "김동환 — 조직문화 담당자 Portfolio",
  description: "조직문화 혁신과 구성원 경험 개선을 통해 더 나은 조직을 만들어가는 조직문화 담당자입니다.",
  keywords: ["조직문화", "HR", "구성원경험", "조직개발", "문화혁신", "포트폴리오"],
  authors: [{ name: "김동환" }],
  creator: "김동환",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://portfolio.example.com",
    title: "김동환 — 조직문화 담당자 Portfolio", 
    description: "조직문화 혁신과 구성원 경험 개선을 위한 포트폴리오",
    siteName: "김동환 Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "김동환 — 조직문화 담당자 Portfolio",
    description: "조직문화 혁신과 구성원 경험 개선을 위한 포트폴리오",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
