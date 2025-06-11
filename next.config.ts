const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "udemy-certificate.s3.amazonaws.com",
        pathname: "/image/**",
      },
    ],
  },
}

module.exports = nextConfig
