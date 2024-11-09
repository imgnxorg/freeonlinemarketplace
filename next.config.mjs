import createMDX from "@next/mdx";
const dotenv = require("dotenv");
const path = require("path");
// Load environment variables from a custom path
dotenv.config({
    path: path.resolve(
        __dirname,
        "~/.safe/.hidden/.com/.freeonlinemarketplace/.www/.env",
    ),
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions` to include markdown and MDX files
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
