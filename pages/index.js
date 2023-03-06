import About from '@/Comps/About';
import Customers from '@/Comps/Customers';
import Header from '@/Comps/Header';
import Contact from '@/Comps/Contact';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>INT</title>
      </Head>
      <Header />
      <About />
      <Customers />
      <Contact />
    </>
  );
}
