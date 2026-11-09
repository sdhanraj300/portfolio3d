import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the Turbopack workspace root so the build never infers a lockfile
  // from a parent directory of the repository.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
