module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
<<<<<<< HEAD
  url: 'http://27.71.237.228:8131'
=======
  url: "http://27.71.237.228:8131",
>>>>>>> 8d1344a01444b2a3f1b25a5ccecf7f3681f1e9ac
});
