import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import styles from './../styles/Header.module.css';
import Image from 'next/image';
const Header = () => {
  return (
    <>
      <div
        className={`${styles.header} flex md:flex-row flex-col-reverse mx-auto md:px-10 px-2 py-8 justify-between items-center my-0 text-white`}
      >
        {/* first */}
        <div className="md:flex flex-col items-center w-10 justify-center mt-36 font-bold hidden">
          <div className="rotate-90 flex gap-1 mb-12">
            FOLLOW <span> US</span>
          </div>
          <div className="bg-white w-1 h-16 mb-2"></div>
          <div className=" flex flex-col gap-3 text-2xl">
            <FaFacebookF />
            <AiOutlineInstagram />
            <AiOutlineLinkedin />
          </div>
        </div>

        {/* second */}
        <div className="flex md:mt-10 mt-0 items-center md:w-1/2 w-8/12">
          <Image
            src={require('./../public/imgs/square.png')}
            className="md:inline hidden"
            alt=""
          />
          <div className="md:mt-14 mt-6 relative">
            <span className="md:text-5xl text-3xl font-bold">
              WE
              <br />
              IMPLEMNT
            </span>
            <p className="text-2xl font-bold">Your infinity software</p>
            <p className="md:leading-7 leading-6">
              We implement corporate programs with excellent performance, with
              flexibility in handling and use, with wonderful and modern designs
            </p>
            <button className="font-semibold text-base my-3 bg-button px-5 py-2 rounded-3xl text-white md:ml-20 md:mt-2.5 ml-0 mt-2">
              CONTACT US
            </button>
          </div>
        </div>

        {/* third */}
        <div className="flex justify-center items-center text-3xl md:ml-20 ml-0">
          <Image
            src={require('./../public/imgs/logo-white.png')}
            className="md:h-72 md:w-68 h-60 w-56 mt-16"
            alt=""
          />
        </div>

        {/* forth */}
        <div className="md:flex items-center flex-col hidden">
          <div className="bg-white rounded-full w-4 h-4 "></div>
          <div className="bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
