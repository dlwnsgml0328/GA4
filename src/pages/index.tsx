import HeadMeta from "@/components/HeadMeta";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <HeadMeta
        description="junhee's main"
        title="junhee | main"
        image=""
        url="https://ga-4.vercel.app"
      />

      <main>
        <div>
          <p>
            Get started by editing&nbsp;
            <code>src/pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div>
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div>
          <Link href={"/movie"}>Go to the movie page</Link>
        </div>

        <div>
          <Link href={"/magazine"}>Go to the magazine page</Link>
        </div>
      </main>
    </div>
  );
}
