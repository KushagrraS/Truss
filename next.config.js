/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "truss-images-bgremoved-highres-garms.s3.eu-west-2.amazonaws.com",
    ],
  },
  env: {
    REACT_APP_LOW_RES_IMAGES_BASE_URL:
      "https://truss-images-bgremoved-lowres-garms.s3.eu-west-2.amazonaws.com/",
    REACT_APP_HIGH_RES_IMAGES_BASE_URL:
      "https://truss-images-bgremoved-highres-garms.s3.eu-west-2.amazonaws.com/",
  },
};

module.exports = nextConfig;
