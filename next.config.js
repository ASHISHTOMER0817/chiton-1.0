/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
            remotePatterns: [
              {
                protocol: 'https',
                hostname: 'lp2.hm.com',
              },
            ],
          },
}

module.exports = nextConfig
