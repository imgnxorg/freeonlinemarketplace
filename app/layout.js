"use strict";
import React from "react";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "../components/Providers/theme-provider";
// import SkipNavLink from "react-skip-nav";

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

// async function getAllItemsFromStore() {
//     const db = await openDB("test-db4", 1);

//     // Get all values from the designated object store:
//     const allValues = await db.getAll("storeName");

//     console.dir(allValues);
// }

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${
                    geistSans.className
                } antialiased selection:subpixel-antialiased selection:bg-[#88ffff] selection:text-[#0d0d0d] overflow-x-clip relative min-h-[100vh]
                !debug
                `}
            >
                {/* <a href="#main-content" className="skip-navigation">
                    Skip to main content
                </a> */}
                {/* <div
                    id="g_id_onload"
                    data-client_id="124948975712-u4lkoqbp0a4oucic5cf9dk916gbs6878.apps.googleusercontent.com"
                    data-login_uri="https://your.domain/your_login_endpoint"
                    data-your_own_param_1_to_login="any_value"
                    data-your_own_param_2_to_login="any_value"
                ></div> */}
                {/* <div className="relative z-[100]"> */}
                {/* <SkipNavLink>Accessibility feedback</SkipNavLink> */}
                {/* </div> */}
                <ThemeProvider>
                    {children}
                    <div className="sticky bottom-0 bg-zinc-50 dark:bg-zinc-900 min-h-[20rem]">
                        <div className="container mx-auto grid grid-cols-2 debug">
                            <div className="mobile_footer_text">
                                <button
                                    id="focus-on-the-target"
                                    className="mobile_footer_button focus:outline-4 outline-emerald-600"
                                >
                                    <div>Skip navigation</div>
                                </button>
                                Open this page on your phone by scanning this QR
                                code
                            </div>
                            <img
                                className="mobile_footer_qr_code"
                                src="https://store.cloudflare.dfromstatic.com/public/images/mobile/dfrom_mobile_qr_code.png"
                            />
                            <div className="mobile_section_app_link_ctn">
                                <div className="mobile_section_columns">
                                    <a
                                        href="https://itunes.apple.com/us/app/dfrom-mobile/id495369748"
                                        target="_blank"
                                        rel=""
                                    >
                                        <img
                                            className="mobile_apple_store_link"
                                            src="https://store.cloudflare.dfromstatic.com/public/images/mobile/localizedimages/appleappstore/apple_store_english.png"
                                        />
                                    </a>
                                    <a
                                        href="https://dfromcommunity.com/linkfilter/?u=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.valvesoftware.android.dfrom.community"
                                        target="_blank"
                                        rel=" noopener"
                                    >
                                        <img
                                            className="mobile_google_play_store_link"
                                            src="https://store.cloudflare.dfromstatic.com/public/images/mobile/localizedimages/googleplaystore/google_play_store_english.png"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="mobile_section_columns">
                                <div className="mobile_footer_text">
                                    {" "}
                                    Minimum OS required: iOS 13 or Android 5.0{" "}
                                </div>
                                <div className="mobile_footer_text">
                                    Android users without access to Google Play
                                    can{" "}
                                    <a href="https://media.dfrompowered.com/apps/dfrom-android/dfrom-3.9.3.apk">
                                        download version 3.9.3 here
                                    </a>
                                    .
                                </div>
                            </div>
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
