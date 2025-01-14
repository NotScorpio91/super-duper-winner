/** @type {import('next').NextConfig} */

const nextConfig = {
    sassOptions: {
        includePaths: ['@/styles'],
        prependData: `@import '@/styles/mixins.scss';`
    }
};

export default nextConfig;
