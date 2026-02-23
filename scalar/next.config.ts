import type { NextConfig } from "next";

const assetPrefix = process.env.ASSET_PREFIX || '';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix,
  env: {
    NEXT_PUBLIC_ASSET_PREFIX: assetPrefix,
  },
};

export default nextConfig;
