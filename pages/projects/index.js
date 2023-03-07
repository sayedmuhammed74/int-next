import Card from "@/Comps/Card";
import Nav from "@/Comps/Nav";
import Head from "next/head";

const Projects = ({ data }) => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Nav />
      <div className="container mx-auto px-20">
        <p
          className="text-center font-semibold text-3xl my-5"
          style={{ color: "#112020" }}
        >
          Part of Our Projects
        </p>

        {/* services */}
        <div className="services flex flex-col items-center my-10 gap-12">
          {data.map((item) => (
            <Card
              key={item.id}
              btnContent="MORE"
              path={`/projects/${item.id}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}

export default Projects;
