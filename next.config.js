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
      {
        source: '/trabalhe-conosco',
        destination: 'https://forms.gle/3b4RPCroYB7rTgvPA',
        permanent: false,
      }
    ];
  },
}