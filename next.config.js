/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home-default',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
