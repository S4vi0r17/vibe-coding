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
      {
        protocol: 'https',
        hostname: 'www.segmentamarketing.com',
        port: '',
        pathname:
          '/wp-content/uploads/2022/04/Ideas-para-crear-contenido-con-inteligencia_artificial-1024x576.png',
      },
      {
        protocol: 'https',
        hostname: 'aps.autodesk.com',
        port: '',
        pathname:
          '/sites/default/files/styles/twitter_card/public/2024-10/Screenshot%202024-10-03%20at%2015.34.40.png',
      },
      {
        protocol: 'https',
        hostname: 'd8285fmxt3duy.cloudfront.net',
        port: '',
        pathname: '/public/articulos/img/2024/7-apps-IA-educacion_3.jpg',
      },
      {
        protocol: 'https',
        hostname: 'all-images.ai',
        port: '',
        pathname:
          '/wp-content/uploads/2023/10/l26rsquo3Bimpact-de-l26rsquo3Bintelligence-artificielle-sur-l26rsquo3Bart-numerique.jpg',
      },
      {
        protocol: 'https',
        hostname: 'www.esic.edu',
        port: '',
        pathname:
          '/sites/default/files/2024-04/inteligencia%20artificial%20marketing%20%282%29.jpeg',
      },
      {
        protocol: 'https',
        hostname: 'www.innovaitors.ai',
        port: '',
        pathname:
          '/wp-content/uploads/2024/04/la-ia-en-los-procesos-de-la-arquitectura-g-1080x600.webp',
      },
    ],
  },
};

export default nextConfig;
