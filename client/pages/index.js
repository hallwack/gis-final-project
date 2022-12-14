import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col bg-sky-900 h-screen">
        <div className="navbar bg-sky-900/50 flex justify-center items-center">
          <a className="btn btn-ghost normal-case text-xl">Sidamri</a>
        </div>
        <div className="hero bg-base-200 flex flex-grow justify-center">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-6xl font-bold">Sidamri</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <div className="flex gap-5 justify-center">
                <Link href="/routes" className="btn btn-primary">
                  Rute Bus
                </Link>
                <Link href="/shelters" className="btn btn-primary">
                  Halte Bus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
