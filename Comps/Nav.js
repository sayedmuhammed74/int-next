import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { BiMessage } from "react-icons/bi";

// Style
import styles from "./../styles/Nav.module.css";

const Nav = ({ text, isAbsolute = false }) => {
  const router = useRouter();

  const checkPath = router.pathname === "/" ? "#fff" : "#248599";
  const checkHover = router.pathname === "/";
  const checkPath2 = router.pathname === "/" ? "logo.svg" : "logo-blue.svg";

  return (
    <>
      <nav
        className={`${isAbsolute ? "absolute" : ""}
        text-primary inset-x-0 z-10 flex items-center gap-5 p-8 lg:px-14 lg:py-10 justify-between`}
      >
        <div className="">
          <Link href="/">
            <img src={`/imgs/${checkPath2}`} className="h-22" alt="" />
          </Link>
        </div>

        <ul
          className="flex flex-end justify-center items-center md:justify-around text-white text-xl gap-1 md:gap-3 font-bold"
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
              style={{ backgroundColor: `${text}` }}
            ></div>
          </li>

          <li>|</li>
          <li className="flex flex-col justify-center items-center">
            <Link href="/projects">Projects</Link>
            <div
              className={`${styles.hover} ${
                checkHover ? styles.whiteHover : styles.blueHover
              }`}
              style={{ backgroundColor: `${text}` }}
            ></div>
          </li>

          <li className="border-2 px-2 py-1 flex items-center gap-1 md:flex justify-center hidden">
            <span>Message</span>
            <BiMessage />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
