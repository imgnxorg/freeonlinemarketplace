import { fileURLToPath } from "url";
// import HtmlWebpackPlugin from "html-webpack-plugin";
import createMDX from "@next/mdx";
import dotenv from "dotenv";
import path from "path";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

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
