import { useRouter } from 'next/router';
import React from 'react';

const MovieDetail = () => {
  const router = useRouter();
  const name = router.query.name?.toString();

  return (
    <div>
      <h1>Hello Magazine detail - {name || ''}</h1>
    </div>
  );
};

export default MovieDetail;
