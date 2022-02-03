module.exports = {
  reactStrictMode: true,
  env: {
    DATOCMS_API_TOKEN: process.env.DATOCMS_API_TOKEN,
    DATOCMS_PREVIEW_SECRET: process.env.DATOCMS_PREVIEW_SECRET,
    API_ORIGIN: process.env.API_ORIGIN,
    SEGMENT_WRITE_KEY: process.env.SEGMENT_WRITE_KEY,
    GTM_ENV_ID: process.env.GTM_ENV_ID,
    GTM_ENV_AUTH: process.env.GTM_ENV_AUTH,
    GTM_ENV_PREVIEW: process.env.GTM_ENV_PREVIEW

  },
  images: {
    domains: ['www.datocms-assets.com'],
    deviceSizes: [450, 600, 768, 900, 1100, 1920, 1440],
  }
}
