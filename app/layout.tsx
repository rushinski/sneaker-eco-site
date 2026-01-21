import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "../src/components/SiteHeader";
import { SiteFooter } from "../src/components/SiteFooter";

export const metadata: Metadata = {
  title: "SneakerEco — Websites for Sneaker Resellers",
  description:
    "SneakerEco builds subscription storefront websites for sneaker resellers. $50/month. Launch fast with a clean, modern storefront.",
  metadataBase: new URL("https://sneakereco.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
