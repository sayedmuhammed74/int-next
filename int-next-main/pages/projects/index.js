import Card from '@/Comps/Card';
import Nav from '@/Comps/Nav';
import Head from 'next/head';
import { info } from './../../public/data';
const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Nav />
      <div className="container mx-auto px-0 sm:px-20 overflow-hidden sm:overflow-auto">
        <p
          className="text-center font-semibold text-3xl my-5"
          style={{ color: '#112020' }}
        >
          Part of Our Projects
        </p>

        {/* services */}
        <div className="flex flex-col items-center my-10 gap-12">
          {info.projects.map((item) => (
            <Card
              key={item.id}
              btnContent="MORE"
              path={`/projects/${item.id}`}
              item={item}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
