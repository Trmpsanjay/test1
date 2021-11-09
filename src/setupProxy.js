const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://10.10.10.189:8000//api/v1',
      changeOrigin: true,
    })
  );
};