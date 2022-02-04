module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8996c7a853608424e777e144b7b7e0d8'),
  },
})
