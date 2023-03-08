import Image from 'next/image';
import styles from './../styles/About.module.css';

const About = () => {
  return (
    <div
      id="about"
      className={` sm:h-auto lg:py-10 flex md:flex-row flex-col items-center gap-44 w-8/12 mt-32 mx-auto mb-7 ${styles.about}`}
    >
      <div className="relative md:inline hidden">
        <div className={styles.square}>
          <Image
            className="absolute"
            src={require('./../public/imgs/mobile.png')}
            // fill="cover"
            alt=""
            // style={{ top: '-59px', left: '-87px' }}
          />
          <Image
            className="absolute"
            src={require('./../public/imgs/hosting.png')}
            alt=""
          />
          <Image
            className="absolute"
            src={require('./../public/imgs/lab.png')}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-2 items-center self-center mb-5">
          <div
            className={`${styles.line} rotate-180 md:h-1.5 h-1 md:w-24 w-20`}
          ></div>
          <span className="font-bold md:text-2xl text-lg flex gap-2">
            ABOUT <span className="text-bl">INT</span>
          </span>
          <div className={`${styles.line} md:h-1.5 h-1 md:w-24 w-20`}></div>
        </div>
        <p className="mb-1 text-dark font-bold leading-8">Who are we?</p>

        <p className="text-graytext mb-5">
          <br />
          We are a company that started in October 2022, and we are an Egyptian
          company, and we started with determination to succeed.
        </p>

        <p className="mb-1 text-dark font-bold leading-8">
          Why are we unique ?
        </p>
        <p className="text-graytext">
          <br />
          We are always working to satisfy the customer and provide all
          solutions to problems that you face in all services and we are always
          working to complete the work before the specified time because time is
          like gold and we always appreciate its precious value
        </p>
      </div>
    </div>
  );
};

export default About;
