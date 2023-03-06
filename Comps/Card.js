import { IoIosArrowDroprightCircle } from 'react-icons/io';
import styles from './../styles/Services.module.css';
import Image from 'next/image';
import Link from 'next/link';
const Card = ({ btnContent, path }) => {
  return (
    <>
      <div
        className={`${styles.service} border-2 border-graytext md:flex grid md:grid-cols-2 grid-cols-1 w-full md:w-7/12 md:gap-7 gap-0 overflow-hidden `}
      >
        <Image
          src={require('./../public/imgs/website-hosting.png')}
          alt=""
          className="w-full md:h-full lg:w-96 h-36"
        />
        <div className="flex flex-col md:ml-0 ml-2 mr-5">
          <p
            className="font-bold md:text-2xl text-lg  md:mb-1 mb-0 md:mt-1 mt-0"
            style={{ color: '#112020' }}
          >
            Web Hosting
          </p>
          <p className="mb-4 text-graytext md:inline hidden">
            To get the most out of the 360 Skills Assessment, your nominees
            should be people you work with on a frequent basis and whom you
            expect to work with for at least one year.
          </p>
          <p className="md:mb-6 mb-0 text-graytext">
            We understand however that this may not be feasible for everyone,
            and if you believe the potential nominees.
          </p>
          <Link href={path} className="self-end">
            <button className="bg-dark text-white flex items-center gap-2 w-24 lg:w-28 py-2 px-3 rounded-3xl font-semibold md:text-base text-normal">
              {btnContent}
              <IoIosArrowDroprightCircle />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
