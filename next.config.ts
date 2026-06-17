import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/demopet",
  assetPrefix: "/demopet/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
