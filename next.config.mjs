/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.animepahe.ru",
        port: "",
        pathname: "/**/**",
      },
      {
        protocol: "https",
        hostname: "i.animepahe.si",
        port: "",
        pathname: "/**/**",
      },
    ],
  },
};

export default nextConfig;
