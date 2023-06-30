import { useRouter } from 'next/router';
import React from 'react';

const MagazineDetail = () => {
  const router = useRouter();
  const id = Number(router.query.id);

  return (
    <div>
      <h1>Hello Magazine detail - {id || 0}</h1>
    </div>
  );
};

export default MagazineDetail;
