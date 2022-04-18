module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '835852cc50097579b5b2242959c850b1'),
  },
});
