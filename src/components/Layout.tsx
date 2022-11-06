import Head from "next/head";
import Header from "./Header";
import ScrollIndicator from "./ScrollIndicator";
import Sidebar from "./Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container flex h-screen w-screen flex-col bg-neutral-900 px-56">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content="Portfolio" />
      </Head>
      <Header />
      <main className="my-12 grid h-max grow grid-cols-7 gap-6">
        {children}
      </main>
      <ScrollIndicator />
      <Sidebar />
    </div>
  );
};

export default Layout;
