/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false, // use true if you want a permanent redirect
      },
    ];
  },
};

export default nextConfig;
