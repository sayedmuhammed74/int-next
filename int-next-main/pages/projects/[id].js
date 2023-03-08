import Image from 'next/image';
import Nav from '@/Comps/Nav';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { info } from './../../public/data';
import { useRouter } from 'next/router';
const Details = () => {
  const router = useRouter();
  const id = router.asPath.slice(-1) - 1;
  console.log(id);
  return (
    <>
      <Nav></Nav>
      <div className="md:p-20 p-3 md:mt-2 mt-0 mx-auto">
        <p className="text-center font-bold md:text-4xl text-2xl mb-10 text-dark">
          {info.projects[id].title} Project
        </p>
        <Image
          className="md:w-9/12 w-10/12 md:h-96 mx-auto mb-14"
          src={require(`./../../public${info.projects[id].img}`)}
          alt=""
        />
        <p className="text-dark text-2xl font-bold mb-5">Description :</p>
        <p className="mb-8 text-graytext ml-5 leading-7">
          {info.projects[id].content}
        </p>
        <p className="text-dark text-2xl font-bold mb-5">Tools :</p>
        <ul className="text-graytext flex md:gap-5 gap-2 ml-5 mb-8 text-lg">
          <li>Figma</li>
          <li>Css</li>
          <li>After Effect</li>
          <li>Photoshop</li>
        </ul>
        <p className="text-dark text-xl md:text-3xl font-bold mb-5">
          What this Project achieved ?
        </p>
        <p className="text-graytext ml-5 mb-10 leading-7">
          To get the most out of the 360 Skills Assessment, your nominees should
          be people you work with on a frequent basis and whom you expect to
          work with for at least one year. We understand however that this may
          not be feasible for everyone, and if you believe the potential
          nominees from your new job will not have sufficient understanding of
          your skills before the deadline, you may reach out to nominees from
          your previous job instead.
        </p>
        <button className="bg-button text-white flex items-center gap-2 w-28 py-2 px-3 rounded-3xl font-semibold text-base">
          <span>VISIT IT</span>
          <IoIosArrowDroprightCircle
            style={{ backgroundColor: 'background: rgba(36, 133, 153, 0.8)' }}
          />
        </button>
      </div>
    </>
  );
};

// export async function getStaticPaths() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   const paths = data.map((d) => {
//     return {
//       params: { id: `${d.id}` },
//     };
//   });
//   return {
//     paths: paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps(context) {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const data = await res.json();
//   return {
//     props: {
//       post: data,
//     },
//   };
// }

export default Details;
