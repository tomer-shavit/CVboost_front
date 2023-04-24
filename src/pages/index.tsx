import Head from "next/head";
import { PageLayout } from "@/components/PageLayout";
import { useState } from "react";
import ApiLoader from "../components/ApiLoader";
import useApi from "@/hooks/useApi";
import PreUpload from "@/components/PreUpload";
import PostUpload from "@/components/PostUpload";

export default function Home() {
  const [file, setFile] = useState<File | undefined>();
  const { data, isLoading, error } = useApi(
    "https://func-cvboost.azurewebsites.net/api/resumetrigger",
    file,
    "resume"
  );

  const test_res = {
    edited_lines: [
      {
        old_line:
          "Investack Self-taught Full stack project Aug 2020 – Oct 2020 • Created a platform for monitoring stocks and crypto investments via a sleek dashboard. • Leveraged React with Next.js and Typescript for the front end, using APIs for up-to-date prices. • Implemented a secure and efficient PostgreSQL database following industry best practices. Lead Cyclist Owner of an Ecommerce Cyclist Clothing Brand May 2019 – May 2021 • Launched a cyclist clothing brand that made over $450,000 in revenue. • Built and managed a team of designers, customer support agents and logistics managers.",
        new_line:
          "Created a sleek dashboard for monitoring stocks and crypto investments using React with Next.js and Typescript, and implemented a secure PostgreSQL database following industry best practices.",
      },
      {
        old_line:
          "Experience & Projects #1 Place In ASPER-HUJI Hackathon Application Developer Dec 2021 - Dec 2021 • Collaborated with a team to develop an end-to-end system boosting sales of time-sensitive products. • Created a React based front-end, featuring a QR code scanner for seamless access to product data. • Designed and deployed a Flask-based cloud server tor streamlined data management.",
        new_line:
          "Launched a successful cyclist clothing brand that generated over $450,000 in revenue, while building and managing a team of designers, customer support agents, and logistics managers.",
      },
      {
        old_line:
          "Javascript • Typescript • Python • C/C++ • Java • SQL • Azure Serverless Function • Docker • Linux • React • Asynchronous Programming • MongoDB • Azure Application Insights • GraphQL • PostgreSQL • Threads • Next.js • Node.js • Flask • Redux • Redis • Sass • Git • Tailwind.",
        new_line:
          "Collaborated with a team to develop an end-to-end system boosting sales of time-sensitive products, utilizing React for the front-end, Flask for the cloud server, and a QR code scanner for seamless access to product data.",
      },
      {
        old_line:
          "Python and C/C++ Tutor Algorithms and data structures Aug 2021 – Present • Instructed university students in Python, C, and C++, covering algorithms implementation, data structures, test preparation, and advanced programming concepts.",
        new_line:
          "Proficient in Javascript, Typescript, Python, C/C++, Java, SQL, Azure Serverless Function, Docker, Linux, React, MongoDB, Azure Application Insights, GraphQL, PostgreSQL, Threads, Next.js, Node.js, Flask, Redux, Redis, Sass, Git, and Tailwind.",
      },
      {
        old_line:
          "CVBoost Self-taught Full stack project Feb 2023 – Present • Designed and developed a full-stack application that analyzes resumes with AI-powered feedback.",
        new_line:
          "Instructed university students in Python, C, and C++ covering algorithms implementation, data structures, test preparation, and advanced programming concepts.",
      },
    ],
    score: {
      clarity: 90,
      relevance: 95,
      achievements: 85,
      keywords: 95,
    },
    clarity:
      "Your resume is well-organized and easy to read. The font size is consistent throughout the document, and the bullet points make it easy to skim and quickly understand your experience and skills. However, there are a few areas where you could improve clarity, such as providing more specific details about your projects and experiences.",
    relevance:
      "Your resume is highly relevant to the software development and architecture field. You have listed your relevant skills and experiences, including your education, projects, and work experience. Additionally, you have demonstrated your passion for software development, which is a valuable trait in this field.",
    achievements:
      "Your resume includes some impressive achievements, such as winning the ASPER-HUJI Hackathon and launching a successful cyclist clothing brand. However, you could provide more specific details about your accomplishments, such as the specific impact your projects had on the organizations you worked with.",
    keywords:
      "You have included a comprehensive list of relevant keywords, including programming languages, frameworks, and tools. This makes it easy for potential employers to quickly identify your skills and experience.",
    feedback:
      "Overall, your resume is well-written and informative. However, you could improve by providing more specific details about your experiences and accomplishments. Additionally, you could consider tailoring your resume to specific job applications to highlight the most relevant skills and experiences for each position.",
  };

  var body;
  if (file == null && isLoading == false) {
    body = <PreUpload setFile={setFile}></PreUpload>;
  } else if (isLoading == true) {
    body = <ApiLoader></ApiLoader>;
  } else if (file && isLoading == false && data != undefined) {
    body = <PostUpload file={file} data={data}></PostUpload>;
  }

  // if (file == null && isLoading == false) {
  //   body = <PreUpload setFile={setFile}></PreUpload>;
  // } else if (file != undefined) {
  //   body = <PostUpload file={file} data={test_res}></PostUpload>;
  // }

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
