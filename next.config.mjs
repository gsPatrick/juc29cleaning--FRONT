/** @type {import('next').NextConfig} */
const nextConfig = {
  // The site is a single landing page: old page URLs jump to their section.
  async redirects() {
    return [
      { source: "/services", destination: "/#services", permanent: true },
      { source: "/why-us", destination: "/#why-us", permanent: true },
      { source: "/reviews", destination: "/#reviews", permanent: true },
      { source: "/before-after", destination: "/#before-after", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
