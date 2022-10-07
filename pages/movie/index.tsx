import { type FC } from 'react';

import styles from './index.module.scss';

interface MovieProps {}

const Movie: FC<MovieProps> = () => {
  return <h1 className={styles.wrap}>Movie Page</h1>;
};

export default Movie;
