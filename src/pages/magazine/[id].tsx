import HeadMeta from "@/components/HeadMeta";
import { useRouter } from "next/router";

const MagazineDetail = () => {
  const router = useRouter();
  const id = Number(router.query.id);

  return (
    <>
      <HeadMeta
        description={`junhee's magazine detail ${id}`}
        title="junhee | magazine"
        image=""
        url={`https://ga-4.vercel.app/magazine/${id}`}
      />

      <div>
        <h1>Hello Magazine detail - {id || 0}</h1>
      </div>
    </>
  );
};

export default MagazineDetail;
