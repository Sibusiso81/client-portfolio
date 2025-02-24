import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Sanele Ncube | Business Automation Analyst",
  description:
    "Leveraging automation, data analytics, and business intelligence to optimize processes, drive smarter decisions, and enhance productivity.",
  keywords: [
    "Automation Business Analyst",
    "Business Intelligence",
    "RPA",
    "Data Analytics",
    "Process Optimization",
    "Cybersecurity",
    "Technology Solutions",
  ],
  authors: [{ name: "Sanele Ncube", url: "https://react-portfolio-nlhb-git-main-sibusiso-zulus-projects.vercel.app/" }],
  creator: "Sanele Ncube",
  publisher: "Sanele Ncube",
  applicationName: "Sanele Ncube Portfolio",
  robots: "index, follow",
  metadataBase: new URL("https://react-portfolio-nlhb-git-main-sibusiso-zulus-projects.vercel.app/"),
  alternates: {
    canonical: "https://react-portfolio-nlhb-git-main-sibusiso-zulus-projects.vercel.app/",
  },

  openGraph: {
    title: "Sanele Ncube | Business Automation Analyst",
    description:
      "Transforming workflows with RPA, business intelligence, and data analytics. Enhancing efficiency through automation and cybersecurity-driven solutions.",
    url: "https://react-portfolio-nlhb-git-main-sibusiso-zulus-projects.vercel.app/",
    siteName: "Sanele Ncube Portfolio",
    type: "website",
    images: [
      {
        url: "https://i.ibb.co/1ftrrQbS/og.png", 
        width: 1200,
        height: 630,
        alt: "Sanele Ncube - Business Automation Analyst",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle",
    creator: "@yourTwitterHandle",
    title: "Sanele Ncube | Business Automation Analyst",
    description:
      "Transforming workflows with RPA, business intelligence, and data analytics. Enhancing efficiency through automation and cybersecurity-driven solutions.",
    images: ["https://i.ibb.co/1ftrrQbS/og.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
