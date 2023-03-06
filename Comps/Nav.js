import Image from 'next/image';
import Link from 'next/link';
import { BiMessage } from 'react-icons/bi';
import styles from './../styles/Nav.module.css';
const Nav = (props) => {
  const checkPath = props.path === '/' ? '#fff' : '#248599';
  const checkHover = props.path === '/';
  const checkPath2 = props.path === '/' ? 'logo-white' : 'logo-blue';
  return (
    <>
      <div
        className={`${styles.nav} grid md:grid-cols-2 grid-col-1 justify-center p-2 `}
      >
        <div className="mx-16 md:inline hidden">
          <Link href="/">
            <Image
              src={require(`./../public/imgs/${checkPath2}.png`)}
              className="h-14 w-36"
              alt=""
            />
          </Link>
        </div>
        <ul
          className="text-white text-xl flex flex-end mx-14 md:justify-around justify-center md:gap-0 gap-3 items-center font-bold"
          style={{ color: checkPath }}
        >
          <li className="flex flex-col justify-center items-center">
            <Link href="/">Home</Link>
            <div
              className={`${styles.hover} ${
                checkHover ? styles.whiteHover : styles.blueHover
              }`}
            ></div>
          </li>
          <li>|</li>
          <li className="flex flex-col justify-center items-center">
            <Link href="/services">Services</Link>
            <div
              className={`${styles.hover} ${
                checkHover ? styles.whiteHover : styles.blueHover
              }`}
              style={{ backgroundColor: `${props.text}` }}
            ></div>
          </li>
          <li>|</li>
          <li className="flex flex-col justify-center items-center">
            <Link href="/projects">Projects</Link>
            <div
              className={`${styles.hover} ${
                checkHover ? styles.whiteHover : styles.blueHover
              }`}
              style={{ backgroundColor: `${props.text}` }}
            ></div>
          </li>
          <li className="border-2 px-2 flex items-center gap-2 md:flex hidden">
            <span>Message</span>
            <BiMessage className="mt-1" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
