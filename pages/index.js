import About from "@/Comps/About";
import Customers from "@/Comps/Customers";
import Header from "@/Comps/Header";
import Contact from "@/Comps/Contact";
import Head from "next/head";
import Nav from "@/Comps/Nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>INT</title>
      </Head>
      <Nav isAbsolute />
      <Header />
      <About />
      <Customers />
      <Contact />
    </>
  );
}
