import React from "react";

const Page = ({ children }) => {
    return (
        <>
            {children}
            <div>Login Page</div>
            <div class="mobile_footer_text">
                Sign in by scanning this QR code
            </div>
            <img
                class="mobile_footer_qr_code"
                src="https://store.cloudflare.steamstatic.com/public/images/mobile/steam_mobile_qr_code.png"
            />
        </>
    );
};

export default Page;
