import Head from "next/head";
import { PageLayout } from "@/components/PageLayout";
import { useEffect, useState } from "react";
import ApiLoader from "../components/ApiLoader";
import useApi from "@/hooks/useApi";
import PreUpload from "@/components/PreUpload";
import PostUpload from "@/components/PostUpload";
import SomethingWentWrong from "@/components/SomethingWentWrong";
import { useSession } from "next-auth/react";

export default function Home() {
  const [file, setFile] = useState<File | undefined>();
  const { data: session } = useSession();
  const { data, isLoading, error } = useApi(
    process.env.NEXT_PUBLIC_BOOST_FUNC_API as string,
    file,
    "resume",
    session?.user?.id
  );

  var body;
  if (file == null && isLoading == false) {
    body = <PreUpload setFile={setFile}></PreUpload>;
  } else if (isLoading == true) {
    body = <ApiLoader></ApiLoader>;
  } else if (error) {
    body = <SomethingWentWrong></SomethingWentWrong>;
  } else if (file && isLoading == false && data != undefined) {
    body = <PostUpload data={data}></PostUpload>;
  }

  return (
    <>
      <Head>
        <title>CVBoost</title>
        <link
          rel="manifest"
          href="/site.webmanifest"
          crossOrigin="use-credentials"
        />
        <meta property="og:title" content="CVBoost" />
        <meta property="og:url" content="https://cvboost.ai/" />
        <meta property="og:description" content="Boost your resume now!" />
        <meta property="og:image" content="/favicon-32x32.png" />
        <meta property="og:image" content="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>{body}</PageLayout>
    </>
  );
}
