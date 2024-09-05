module.exports = {
  images: {
    domains: ['res.cloudinary.com', "www.datocms-assets.com"],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
}