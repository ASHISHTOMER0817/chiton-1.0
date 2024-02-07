/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
    domains: ['image.hm.com', 'lp2.hm.com'],
        remotePatterns: [
              {
                protocol: 'https',
                hostname: 'hm.com',
              },
            ],
          },
}

module.exports = nextConfig
