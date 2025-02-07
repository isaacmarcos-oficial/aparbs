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
        destination: 'https://forms.gle/sg7qJpLmo2n85KFk8',
        permanent: false,
      }
    ];
  },
}