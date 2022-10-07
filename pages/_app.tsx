import { type NextPage } from 'next';
import { ReactElement, ReactNode, type FC } from 'react';
import { type AppProps } from 'next/app';
import "./global.css"
/**
 * 这个文件是所有的页面都会走的
 */

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// 所有的页面都会经过这个组件，将页面当作Component传进来，当然还有一些其他的props
const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  // 如果页面中有自定义的layout，那么就使用页面级别的。
  // 也就是说传入的组件如果有getLayout方法，就用getLayout方法，否则就直接返回对应的页面。或者说添加公共的layout
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
};

export default App;
