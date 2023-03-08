import Image from 'next/image';
import styles from './../styles/Contact.module.css';
const Contact = () => {
  return (
    <div className={`${styles.contact} p-7 md:flex hidden mb-10`}>
      <Image src={require('./../public/imgs/design.png')} alt="" />
      <div>
        <div className="flex gap-5 items-center">
          <p className="text-primary font-bold text-4xl my-3">INT</p>
          <div className={`${styles.line}`}></div>
        </div>
        <p className="font-bold text-2xl mb-3">
          CONTACT US <span className="font-normal">TODAY!</span>
        </p>
        <p className={`${styles.text}`}>
          Get in touch with us if you want to optimize your controlling and
          accounting processes with system support! We would be happy to present
          our solution portfolio to you and support you as a partner in the
          design and implementation.
        </p>
        <button className="font-bold text-lg my-3 bg-button px-4 py-2 rounded-3xl text-white">
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default Contact;
