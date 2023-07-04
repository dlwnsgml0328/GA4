import HeadMeta from '@/components/HeadMeta';
import { useRouter } from 'next/router';
import * as gtag from '@/lib/gtag';
import { useEffect } from 'react';

const MagazineDetail = () => {
  const router = useRouter();
  const id = Number(router?.query?.id);

  const handleClick = (id: number) => {
    gtag.event({
      action: 'click-detail',
      category: 'button',
      label: `click_magazine_detail-${id}`,
      value: id,
    });
  };

  useEffect(() => {
    if (!id) return;

    gtag.event({
      action: 'view_item',
      category: 'routes',
      label: `magazine_detail-${id}`,
      value: id,
    });
  }, [id]);

  return (
    <>
      <HeadMeta
        description={`junhee's magazine detail ${id}`}
        title={`junhee | magazine - ${id}`}
        image=''
        url={`https://ga-4.vercel.app/magazine/${id}`}
      />

      <div>
        <h1>Hello Magazine detail - {id || 0}</h1>
      </div>

      <button onClick={() => handleClick(id)}>CLICK MAGAZINE</button>
    </>
  );
};

export default MagazineDetail;
