import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: 'image/v2/D4D03AQE2TyjKNsWxDg/profile-dis//media.licdn.com/dms/image/v2/D4D03AQE2TyjKNsWxDg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723307992013',
        search:'?e=1739404800&v=beta&t=db413gRNU6e7xPG6ZXq9Moc6gY_G7SrjaHJB5ZcxpcU'
      },
    ],
  },
};

export default nextConfig;
