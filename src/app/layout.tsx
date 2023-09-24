import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minvoice- Crawl data",
  description: "Minvoice- Crawl data",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-loading-overlay" id="app-loading-overlay">
          <div className="loading-spinner"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
