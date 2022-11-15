import { type NextPage } from 'next';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar';
import HomeSection from '@/components/sections/HomeSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
const Home: NextPage = () => {
  return (
    <div className="container h-screen w-screen bg-neutral-900 px-56 pb-8">
      <Layout>
        {/* <HomeSection /> */}
        {/* <AboutSection /> */}
        <SkillsSection />
      </Layout>
    </div>
  );
};

export default Home;
