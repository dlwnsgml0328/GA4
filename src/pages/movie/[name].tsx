import HeadMeta from "@/components/HeadMeta";
import { useRouter } from "next/router";

const MovieDetail = () => {
  const router = useRouter();
  const name = router.query.name?.toString();

  return (
    <>
      <HeadMeta
        description={`junhee's magazine detail ${name}`}
        title="junhee | magazine"
        image=""
        url={`https://ga-4.vercel.app/magazine/${name}`}
      />

      <div>
        <h1>Hello Magazine detail - {name || ""}</h1>
      </div>
    </>
  );
};

export default MovieDetail;
