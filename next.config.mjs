/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow all HTTPS image sources (celebrity photos come from various CDNs)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Suppress false-positive Edge Runtime warning from jose (used by next-auth v5)
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client", "bcryptjs"],
  },
};

export default nextConfig;
