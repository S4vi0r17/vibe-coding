import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'observatorio.tec.mx',
        port: '',
        pathname: '/wp-content/uploads/2024/08/IMG.png',
      },
      {
        protocol: 'https',
        hostname: 'mlearninglab.com',
        port: '',
        pathname: '/wp-content/uploads/2019/06/discriminativo-768x472.jpg',
      },
      {
        protocol: 'https',
        hostname: 'i.blogs.es',
        port: '',
        pathname: '/bd2b76/gan_arquitectura/650_1200.jpg',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        port: '',
        pathname: '/v2/resize:fit:1320/0*0Sf00Jozgtms2673.jpg',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        port: '',
        pathname: '/v2/resize:fit:1400/1*xc2Y6jwIUhfEGxJLytU1RA.png',
      },
      {
        protocol: 'https',
        hostname: 'mindfulml.vialabsdigital.com',
        port: '',
        pathname: '/images/transformer-schema.png',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/r1vGhYM/67ac700c-ac6e-46fe-b9ef-e63e8845dbb3.png',
      },
    ],
  },
};

export default nextConfig;
