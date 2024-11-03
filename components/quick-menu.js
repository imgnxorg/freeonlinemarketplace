"use client";
import React, { useState } from "react";

const QuickMenu = ({ className }) => {
    const [quickView, setQuickView] = useState("");

    const handleClose = () => {
        setQuickView("");
    };

    const handleClickCapture = (e) => {
        e.stopPropagation();
    };

    return (
        <div className={className}>
            <div
                className="sticky z-40 unselectable bottom-[-22.5rem] w-full grid gap-4 px-4 grid-cols-4 cursor-pointer"
                onMouseLeave={handleClose}
            >
                <div
                    onMouseOver={() => {
                        setQuickView("Domains");
                    }}
                    className={`h-80 transition-transform rounded-t-4xl p-6 relative bg-gradient-to-b from-red-500 to-candy-apple-500 via-candy-apple-500 via-40% ${
                        quickView === "Domains"
                            ? "-translate-y-full"
                            : "-translate-y-10"
                    }`}
                >
                    Domains
                </div>
                <div
                    onMouseOver={() => {
                        setQuickView("Development");
                    }}
                    className={`h-80 transition-transform rounded-t-[3.14ch] relative bg-cyan-500 overflow-clip ${
                        quickView === "Development"
                            ? "-translate-y-full"
                            : "-translate-y-10"
                    }`}
                >
                    <div className="bg-[#00000088] text-xl text-center h-10 flex items-center justify-center font-light">
                        Development
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </div>
                </div>
                <div
                    onMouseOver={() => {
                        setQuickView("Git");
                    }}
                    className={`h-80 transition-transform rounded-t-4xl p-6 relative bg-fuchsia-500 ${
                        quickView === "Git"
                            ? "-translate-y-full"
                            : "-translate-y-10"
                    }`}
                >
                    Git
                </div>
                <div
                    onMouseOver={() => {
                        setQuickView("Hosting");
                    }}
                    className={`h-80 transition-transform rounded-t-4xl 4-6 relative bg-banana-400 ${
                        quickView === "Hosting"
                            ? "-translate-y-full"
                            : "-translate-y-10"
                    }`}
                >
                    Hosting
                </div>
            </div>
        </div>
    );
};

export default QuickMenu;
