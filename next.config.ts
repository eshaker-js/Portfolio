import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'udemy-certificate.s3.amazonaws.com',
        pathname: '/image/**',
      },
    ],
  },
}

export default nextConfig
