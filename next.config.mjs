/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['pngimg.com'], 
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false, 
      },
    ];
  },
};

export default nextConfig;
