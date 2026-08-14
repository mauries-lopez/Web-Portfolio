import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maurieslopez.netlify.app"),
  title: {
    default: "Mauries Lopez — Software Engineer & Full Stack Developer",
    template: "%s | Mauries Lopez",
  },
  description:
    "Mauries Lopez is a software engineer and full stack developer from De La Salle University specializing in React, Next.js, TypeScript, Python, and machine learning.",
  keywords: [
    "Mauries Lopez",
    "Software Engineer",
    "Full Stack Developer",
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "Machine Learning",
    "Python",
    "De La Salle University",
    "Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "Philippines",
    "NLP",
    "Sentiment Analysis",
  ],
  authors: [{ name: "Mauries Lopez" }],
  creator: "Mauries Lopez",
  publisher: "Mauries Lopez",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maurieslopez.netlify.app",
    siteName: "Mauries Lopez",
    title: "Mauries Lopez — Software Engineer & Full Stack Developer",
    description:
      "Portfolio of Mauries Lopez, software engineer from De La Salle University. Specializing in full stack development, React, Next.js, and machine learning.",
    images: [
      {
        url: "/og-image",
        width: 1200,
        height: 630,
        alt: "Mauries Lopez — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mauries Lopez — Software Engineer",
    description:
      "Portfolio of Mauries Lopez, software engineer from De La Salle University.",
    images: ["/og-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="google-site-verification" content="msrt8e_X9v3855CuI740zsVNgXL7cx4lAWoESaK7kC4" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("theme");if(s==="dark"||s==="\\"dark\\""){document.documentElement.classList.add("dark")}}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-neutral-950 duration-500 ease-out`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
