import { HiOutlineLocationMarker } from 'react-icons/hi';
import { CiMail } from 'react-icons/ci';
import { BiPhoneCall } from 'react-icons/bi';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
const Footer = () => {
  return (
    <>
      <div className="bg-dark py-4">
        <div className="grid md:grid-cols-4 grid-cols-2 my-0 mx-10 md:py-5 md:px-5 px-3 gap-10 md:items-start items-baseline text-white">
          {/* logo */}
          <div className="text-center md:col-span-1 col-span-2">
            <div className="logo flex justify-center items-center">
              <Image
                src={require('./../public/imgs/logo-white.png')}
                alt=""
                className="mb-7 mt-3 w-48 h-24"
              />
            </div>
            <p className="text-graytext mb-3">
              We implement corporate programs with excellent performance, with
              flexibility in handling and use, with wonderful and modern designs
            </p>
            <span className="text-white font-bold text-lg">Follow us</span>
            <div className="w-12 h-1 bg-white my-2 mx-auto"></div>

            <div className="flex justify-center gap-2 text-3xl">
              <i>
                <FaFacebookSquare />
              </i>
              <i>
                <AiOutlineInstagram />
              </i>
              <i>
                <AiOutlineLinkedin />
              </i>
            </div>
          </div>

          {/* home */}
          <div>
            <span className="text-base font-bold">Home</span>
            <ul className="flex flex-col gap-4 justify-arout mt-2 text-graytext">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <a href="#about">About us</a>
              </li>
              <li>Customers</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <span className="text-base font-bold">Services</span>
            <ul className="text-graytext flex mt-2 flex-col gap-5 justify-center">
              <li>Creating Websites</li>
              <li>Mobile Applications</li>
              <li>Hosting</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1 col-span-2">
            <span className="text-base font-bold mb-1">Contact us</span>
            <ul className="flex flex-col gap-8 mt-2 text-center text-graytext">
              <li className="flex">
                <i className="flex items-center gap-3">
                  <BiPhoneCall />
                </i>
                <span>+20 105 004 9950</span>
              </li>
              <li className="flex items-center gap-3">
                <i>
                  <CiMail />
                </i>
                <span>info@int-companies</span>
              </li>
              <li className="flex items-center gap-3">
                <i>
                  <HiOutlineLocationMarker />
                </i>
                <span>Street 9 - Maadi-Cairo-Egypt</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
