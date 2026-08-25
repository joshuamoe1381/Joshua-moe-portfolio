import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/navigation/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { Providers } from "@/components/motion/Providers";
import { SkipLink } from "@/components/ui/SkipLink";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Joshua Moe — Creative Director",
    template: "%s — Joshua Moe",
  },
  description: site.description,
  applicationName: "Joshua Moe",
  authors: [{ name: site.name, url: site.linkedin }],
  creator: site.name,
  keywords: [
    "Joshua Moe",
    "Creative Director",
    "Brand Strategy",
    "Digital Campaigns",
    "Video Production",
    "On-set directing",
    "Minneapolis",
    "Los Angeles",
    "New York",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "Joshua Moe — Creative Director",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Moe — Creative Director",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg font-sans text-ink">
        <SkipLink />
        <JsonLd />
        <Providers>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
