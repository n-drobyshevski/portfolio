import { type NextPage } from 'next';
import Layout from '@/components/Layout';
import Image from 'next/image';

import image from '@/images/home_section.jpg';
const Home: NextPage = () => {
  return (
    <Layout pageName="home">
      <div className="relative block h-full w-full">
        <div className=" absolute top-2/3 z-10">
          <h2 className="text-3xl text-neutral-400">Hi</h2>
          <h2 className="text-3xl text-neutral-400">
            I&#39;m Nikolai Drobyshevski
          </h2>
          <h4 className="text-xl text-neutral-500">Front-end developer</h4>
        </div>
        <div className=" absolute top-0 right-0 h-5/6 w-5/6 overflow-hidden rounded-md bg-neutral-800">
          <Image
            alt="image"
            className="brightness-75"
            src={image}
            fill={true}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
