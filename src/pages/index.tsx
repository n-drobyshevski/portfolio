import { type NextPage } from 'next';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar';
import HomeSection from '@/components/sections/HomeSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen bg-neutral-900 px-8">
      <Layout>
        <HomeSection />
        {/* <AboutSection /> */}
        {/* <SkillsSection /> */}
        {/* <ProjectSection /> */}
        {/* <ContactSection /> */}
      </Layout>
    </div>
  );
};

export default Home;
