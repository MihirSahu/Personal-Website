import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import ProfileImage from "./components/ProfileImage";

export const metadata: Metadata = {
  title: "Mihir's Blog",
  description: "Personal blog and portfolio of Mihir Sahu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="page">
          <nav>
            <div className="pfp-div">
              <ProfileImage />
            </div>
            <div className="links">
              <Link href="/thoughts">thoughts</Link>
              <Link href="/work">work</Link>
              <Link href="/contact">contact</Link>
            </div>
          </nav>
          {children}
          <div className="placeholder">
            <Link
              href="https://x.com/TheMihirSahu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/twitter.svg" alt="Twitter" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/the-mihir-sahu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/linkedin.svg" alt="LinkedIn" />
            </Link>
            <Link
              href="mailto:mihir@mihirsahu.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/mail.svg" alt="Email" />
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
