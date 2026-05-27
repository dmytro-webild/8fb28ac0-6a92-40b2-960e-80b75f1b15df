import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'Pawara Diagnostic & Children Care Centre - Reliable Diagnosis & Pediatric Care',
  description: 'Leading diagnostic and pediatric care clinic in Shirpur. We offer Sonography, X-Ray, CT Scan, MRI, and expert child care with advanced technology and compassionate service.',
  openGraph: {
    "title": "Pawara Diagnostic & Children Care Centre",
    "description": "Leading diagnostic and pediatric care clinic in Shirpur. We offer Sonography, X-Ray, CT Scan, MRI, and expert child care with advanced technology and compassionate service.",
    "url": "https://www.pawara-clinic.com",
    "siteName": "Pawara Diagnostic & Children Care Centre",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-117924.jpg",
        "alt": "Modern medical clinic interior with diagnostic equipment"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Pawara Diagnostic & Children Care Centre",
    "description": "Leading diagnostic and pediatric care clinic in Shirpur. We offer Sonography, X-Ray, CT Scan, MRI, and expert child care with advanced technology and compassionate service.",
    "images": [
      "http://img.b2bpic.net/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-117924.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${mulish.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
