import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "A TECH - Digital Solutions That Transform",
  description: "Premium digital agency for web, mobile, and scalable API products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <header className="sticky top-0 z-30 border-b border-white/10 bg-background/80 backdrop-blur-md">
          <div className="container-shell flex items-center justify-between py-4">
            <p className="text-lg font-semibold tracking-[0.15em]">A TECH</p>
            <nav className="flex gap-5 text-sm text-muted">
              <Link href="/home">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="mt-16 border-t border-white/10 py-10">
          <div className="container-shell grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-lg font-semibold tracking-[0.15em]">A TECH</p>
              <p className="mt-3 text-sm text-muted">Digital solutions that transform businesses.</p>
            </div>
            <div>
              <p className="text-sm font-medium">Company</p>
              <div className="mt-3 flex flex-col gap-2 text-sm text-muted">
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/projects">Portfolio</Link>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">Contact</p>
              <p className="mt-3 text-sm text-muted">contact@atech.com</p>
              <p className="text-sm text-muted">+1 (234) 567-890</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
