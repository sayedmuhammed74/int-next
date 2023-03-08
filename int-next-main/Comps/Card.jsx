import { IoIosArrowDroprightCircle } from 'react-icons/io';
import styles from './../styles/Services.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ btnContent, path = undefined, item }) => {
  return (
    <>
      <div
        className={`${styles.service} md:flex grid md:grid-cols-2 grid-cols-1 w-full gap-0 overflow-hidden md:overflow-y-auto xl:overflow-hidden`}
        style={{
          boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.25)',
          borderRadius: '47px',
        }}
      >
        <img
          src={item.img}
          alt=""
          className="aspect-[5/3] h-60 sm:h-auto sm:aspect-[4/3]"
          style={{ borderRadius: '47px' }}
        />
        <div className="flex flex-row sm:flex-col p-8 space-y-2 justify-between items-center sm:items-baseline gap-6 sm:gap-0">
          <h2
            className="font-bold md:text-3xl text-lg"
            style={{ color: '#112020' }}
          >
            {item.title}
          </h2>
          <p className="mb-4 text-graytext hidden sm:inline">
            {item.content}
            <br />
            <br />
            <br />
            {item.description}
          </p>

          {path && (
            <Link href={path} className="self-end">
              <button className="bg-dark text-white flex items-center gap-2 w-24 lg:w-28 py-2 px-3 rounded-3xl font-semibold md:text-base text-normal">
                {btnContent}
                <IoIosArrowDroprightCircle />
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
