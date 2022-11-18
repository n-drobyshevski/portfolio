import { type NextPage } from 'next';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar';

const Home: NextPage = () => {
  return (
    <div className="container h-screen w-screen bg-neutral-900 px-56 pb-8">
      <Layout></Layout>
    </div>
  );
};

export default Home;
