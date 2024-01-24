/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'images.dog.ceo',
            }
        ],
    }
};

export default nextConfig;
