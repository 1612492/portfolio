import type { NextPage } from 'next';
import Head from 'next/head';

import About from 'components/about';
import Banner from 'components/banner';
import Header from 'components/header';
import History from 'components/history';
import Project from 'components/project';
import Contact from 'components/contact';
import Footer from 'components/footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>

      <Header />

      <main>
        <Banner />
        <About />
        <History />
        <Project />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Home;
