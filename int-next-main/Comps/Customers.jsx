import Image from 'next/image';
const Customers = () => {
  return (
    <div className="p-5 pb-8 my-8">
      <p
        className="text-center font-bold md:text-2xl text-lg my-4"
        style={{ color: '#1C2221' }}
      >
        OUR CUSTOMERS
      </p>
      <p
        className="text-center font-bold md:text-lg text-base"
        style={{ color: '#1C2221' }}
      >
        It&apos;s great to be one of them
      </p>
      <div className="imgs flex md:flex-row flex-col md:mt-0 mt-7 items-center justify-center gap-5 ">
        <Image src={require('./../public/imgs/ale_logo.png')} alt="" />
        <Image src={require('./../public/imgs/sleepy_logo.png')} alt="" />
      </div>
    </div>
  );
};

export default Customers;
