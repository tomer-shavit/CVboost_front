import { useUser } from "@clerk/nextjs";
import Head from "next/head";
import { PageLayout } from "@/components/PageLayout";
import { useEffect, useState } from "react";
import ApiLoader from "../components/ApiLoader";
import useApi from "@/hooks/useApi";
import PreUpload from "@/components/PreUpload";
import PostUpload from "@/components/PostUpload";
import SomethingWentWrong from "@/components/SomethingWentWrong";

export default function Home() {
  const [file, setFile] = useState<File | undefined>();
  const { data, isLoading, error } = useApi(
    process.env.NEXT_PUBLIC_BOOST_FUNC_API as string,
    file,
    "resume"
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
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>{body}</PageLayout>
    </>
  );
}
