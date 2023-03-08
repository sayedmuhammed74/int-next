import Head from 'next/head';
import Card from '@/Comps/Card';
import Nav from '@/Comps/Nav';
import { info } from './../../public/data';
const Services = () => {
  return (
    <>
      <Head>
        <title>Services</title>
      </Head>
      <Nav />
      <div className="container mx-auto px-0 sm:px-20 overflow-hidden sm:overflow-auto">
        <p
          className="text-center font-bold text-4xl my-3"
          style={{ color: '#112020' }}
        >
          Our Service
        </p>
        <p
          className="text-center font-medium text-2xl"
          style={{ color: '#232324' }}
        >
          Let us do that for you
        </p>

        {/* services */}
        <div className="flex flex-col items-center my-10 gap-12">
          {info.services.map((item) => (
            <Card
              key={item.id}
              btnContent="Get it"
              // path={`/services/${item.id}`}
              item={item}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
