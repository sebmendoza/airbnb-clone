/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ["links.papareact.com"] },
  env: {
    mapbox_key:
      "pk.eyJ1Ijoic2VibWVuZG96YSIsImEiOiJjbDh5d2twcTAwY283M29vNmxnaXlwaHhmIn0.36r2Jz6tPiPT0hRjxOAfPQ",
  },
};

module.exports = nextConfig;
