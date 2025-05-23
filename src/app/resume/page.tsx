import Head from 'next/head';

const Resume = () => {
  return (
    <>
      <Head>
        <title>My Resume</title>
        <meta name="description" content="View my professional resume" />
      </Head>
      <iframe
        src="/Resume/KishanAdhikari_.pdf"
        className="w-full h-screen"
        title="My Resume"
      />
    </>
  );
};

export default Resume;