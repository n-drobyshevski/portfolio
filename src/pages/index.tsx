import { type NextPage } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import Sidebar from "@/components/Sidebar";

const Home: NextPage = () => {
  return (
    <Layout>
      <Sidebar />
    </Layout>
  );
};

export default Home;
