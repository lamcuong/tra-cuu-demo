/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/tra-cuu/danh-sach',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
