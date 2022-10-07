import { type ReactElement, useState, useEffect } from 'react';
import type { NextPageWithLayout } from './_app';
import Head from 'next/head';
import { getMovies } from '../services/movieService';

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

/**
 * 自定义模板
 */
Page.getLayout = function getLayout(page: ReactElement) {
  const [randomNum, setRandomNum] = useState(0);
  useEffect(() => {
    setRandomNum(Math.random());
  }, []);
  getMovies().then((res) => console.log(res));
  return (
    <div>
      <Head>
        <title>Index Page</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      {page}
      {randomNum}
    </div>
  );
};

export default Page;
