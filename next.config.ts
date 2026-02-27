import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/protocolo-anticonfisco",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
