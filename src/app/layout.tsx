import type { Metadata } from "next";
import { Noto_Sans_Georgian } from "next/font/google";
import "@/app/globals.css"
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ReactQueryProvider from "@/app/providers/ReactQueryProvider";

const notoSansGeorgian = Noto_Sans_Georgian({
  subsets: ["georgian", "latin"],
});

export const metadata: Metadata = {
  title: "Gulf",
  description: "Stay updated with live fuel prices and automotive news.",
  icons: {
    icon: "/logo.png", 
    shortcut: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${notoSansGeorgian.className} flex  flex-col bg-white text-gray-900`}>
        <Header />
        <ReactQueryProvider>
          <main className="flex-1">{children}</main>
        </ReactQueryProvider>
        <Footer />
      </body>
    </html>
  );
}
