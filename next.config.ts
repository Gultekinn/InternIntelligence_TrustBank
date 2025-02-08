import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  experimental: {
    appDir: true, // App Router'ın etkin olduğundan emin olun
  },
};

export default nextConfig;
