import HeadMeta from '@/components/HeadMeta';
import * as gtag from '@/lib/gtag';

const Magazine = () => {
  const handleClick = () => {
    gtag.event({
      action: 'click',
      category: 'button',
      label: 'click_magazine',
      value: '1',
    });
  };
  return (
    <>
      <HeadMeta
        description="junhee's magazine"
        title='junhee | magazine'
        image=''
        url='https://ga-4.vercel.app/magazine'
      />

      <div>
        <h1>Hello Magazine</h1>
      </div>

      <button onClick={handleClick}>CLICK MAGAZINE</button>
    </>
  );
};

export default Magazine;
