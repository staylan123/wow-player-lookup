import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "render.worldofwarcraft.com"}]
  }
};

export default nextConfig;
