"use client";
import React, { useEffect } from "react";

const ThemeProvider = ({ children }) => {
    useEffect(() => {
        console.log("Document is loaded");
        function userInteracted() {
            console.log("User interacted with the document");
            const target = document.getElementById("focus-on-the-target");
            console.log("TARGET", target);
            // alert("Welcome! You've interacted with the document.");
        }

        // Detect focus (e.g., "tabbing in" to the page)
        document.addEventListener("focus", userInteracted, true);

        // Detect clicks anywhere in the document
        document.addEventListener("click", userInteracted);

        // Detect key presses (like hitting Page Down)
        document.addEventListener("keydown", userInteracted);
        return () => {};
    }, []);
    return <>{children}</>;
};

export default ThemeProvider;
