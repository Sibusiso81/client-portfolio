import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    
    domains: ['i.ibb.co'],
    formats:['image/avif','image/webp'],
   remotePatterns:[{
    protocol:'https',
    hostname:'i.ibb.co',
    port:'',
  
   }]
  },
};

export default nextConfig;
