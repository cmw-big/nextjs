import { createProxyMiddleware } from 'http-proxy-middleware';

/**
 * 页面中的中间件,所有的页面都会代理
 */
export default createProxyMiddleware({
  target: 'http://yuanjin.tech:5005',
  changeOrigin: true,
});
