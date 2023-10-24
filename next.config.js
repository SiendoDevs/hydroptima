/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/home-default',
                destination: '/',
                permanent: true,
            },
        ];
    },
};