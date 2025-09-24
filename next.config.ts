import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  images: {
    domains: ["img.icons8.com"],
  },
};

export default nextConfig;
