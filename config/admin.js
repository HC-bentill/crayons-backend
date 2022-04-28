module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4a91da40b92cd39efdc58fd0a555e4bd'),
  },
});
