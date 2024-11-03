import React from "react";
import localFont from "next/font/local";
import "./globals.css";
import { SkipNavLink } from "@reach/skip-nav";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "freeonlinemarketplace.com - Home",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${
                    process.env.NODE_ENV === "development" && DEBUG
                        ? "debug"
                        : ""
                } ${geistSans.variable} ${geistMono.variable} ${
                    geistSans.className
                } antialiased selection:subpixel-antialiased selection:bg-[#88ffff] selection:text-[#0d0d0d] overflow-x-clip relative min-h-[100vh]`}
            >
                <div className="relative z-[100]">
                    <SkipNavLink>Skip to main content</SkipNavLink>
                    <SkipNavLink>Accessibility help</SkipNavLink>
                    <SkipNavLink>Accessibility feedback</SkipNavLink>
                </div>
                {children}
            </body>
        </html>
    );
}

const DEBUG = !true;
