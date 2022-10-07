import { useRouter } from 'next/router';
import { ReactElement, type FC } from 'react';
import { type NextPageWithLayout } from '../_app';

const MovieDetail: NextPageWithLayout = (props) => {
  const router = useRouter();
  console.log(router);

  return <div>detail</div>;
};

MovieDetail.getLayout = function getLayout(page: ReactElement) {
  return (
    <div>
      <h1>navigation</h1>
      {page}
    </div>
  );
};

export default MovieDetail;
