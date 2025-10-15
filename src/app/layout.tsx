import type { Metadata } from "next";
import { Noto_Sans_Georgian } from "next/font/google";
import "@/app/globals.css"


const notoSansGeorgian = Noto_Sans_Georgian({
  subsets: ["georgian", "latin"],
});


export const metadata: Metadata = {
  title: "Gulf Business",
  description: "Stay updated with live fuel prices and automotive news.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${notoSansGeorgian.className} } flex min-h-screen flex-col bg-white text-gray-900`}>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
