/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'logg-wheat.vercel.app',
            port: '3000',
          },
        ],
      },
};

export default nextConfig;
