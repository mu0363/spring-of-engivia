import Head from "next/head";
import SlackIcon from "src/svg/slack-icon.svg";
import { signIn, signOut } from "next-auth/client";

export default function Home() {
  return (
    <div>
      <Head>
        <title>エンジビアの泉</title>
        <meta
          name="description"
          content="気軽にエンジビアの豆知識・ムダ知識を披露する場。Zoomを同時に開きながら楽しむアプリ。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex">
        <div className="flex flex-col items-center my-auto w-[43%]">
          <img className="h-20" src="/engivia_logo.png" alt="logo" />
          <h1 className="mt-10 text-3xl font-bold text-[#0284C7]">
            エンジビアの泉
          </h1>
          <p className="mb-10 text-[#38BDF8]">
            〜素晴らしきプログラミング豆知識〜
          </p>
          <button
            onClick={() =>
              signIn("slack", {
                callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/broadcast`,
              })
            }
            className="flex items-center py-2 px-4 hover:bg-gray-100 rounded-md border-2"
          >
            <SlackIcon />
            <p className="ml-2">Sign in with Slack</p>
          </button>
        </div>
        <img
          className="object-cover w-[57%] h-screen"
          src="/AdobeStock_162810993_Preview.jpeg"
          alt="spring"
        />
      </div>
    </div>
  );
}
