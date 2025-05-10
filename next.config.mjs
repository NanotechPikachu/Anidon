/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.animepahe.ru',
                port: '',
                pathname: '/posters/**',
            },
        ],
    }
};

export default nextConfig;
