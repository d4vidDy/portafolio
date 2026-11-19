import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.PAGES_BASE_PATH ?? "",
  images: { unoptimized: true },
  devIndicators: false,
};

export default nextConfig;
