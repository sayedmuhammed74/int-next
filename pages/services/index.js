import Card from '@/Comps/Card';
import Head from 'next/head';
const Services = ({ data }) => {
  return (
    <>
      <Head>
        <title>Services</title>
      </Head>
      <div className="my-12 p-5">
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
          {data.map((item) => (
            <Card
              key={item.id}
              btnContent="Get it"
              path={`/services/${item.id}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  );
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}

export default Services;
