import { IoIosArrowDroprightCircle } from "react-icons/io";
import styles from "./../styles/Services.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({ btnContent, path = undefined }) => {
  return (
    <>
      <div
        className={`${styles.service} md:flex grid md:grid-cols-2 grid-cols-1 w-full gap-0 overflow-auto`}
        style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)" }}
      >
        <img src="/imgs/website-hosting.png" alt="" className="aspect-[4/3]" />
        <div className="flex flex-col p-8 space-y-2">
          <h2
            className="font-bold md:text-3xl text-lg"
            style={{ color: "#112020" }}
          >
            Website Development
          </h2>
          <p className="mb-4 text-graytext">
            Almost every business nowadays has a website, but just having a
            website doesn&apos;t guarantee the success of the business; it has
            to be a creatively-unique designed website customized based on the
            business. Websites help with your brand recognition, with your
            marketing campaigns, and help you reach new customers every day;
            that is why at INT we offer you several web solutions services,
            starting from creating your website to creatively designing it based
            on your preferences. INT Creations specializes in delivering the
            best e-commerce and general websites, including a consultation to
            the best market approach for your brand. We not only build your
            platform, but we also help guide you through the process of
            optimizing your content.
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
