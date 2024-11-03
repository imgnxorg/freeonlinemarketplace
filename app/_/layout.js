"use client";
import React, { useEffect } from "react";

const ClientLayout = () => {
    useEffect(() => {
        localStorage.debug = "*";
        // same origin version
        // const socket = io("/admin");
        // cross origin version
        // const socket = io("https://server-domain.com/admin");
    }, []);

    return <div>Not for sale!!!</div>;
};

export default ClientLayout;
