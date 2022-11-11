import Head from 'next/head';
import Header from './Header';
import ScrollIndicator from './ScrollIndicator';
import Sidebar from './Sidebar';

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container grid h-full grid-cols-9 grid-rows-[100px_1fr_50px]">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content="Portfolio" />
      </Head>
      <Header />
      <main className="col-start-2 col-end-9 row-start-2 row-end-3 mt-6 gap-6 border border-white">
        {children}
      </main>
      <div
        className="col-start-10 col-end-9 row-start-2 row-end-4"
        id="sidebar"
      >
        <Sidebar currentSectionName="about" />
      </div>
      <div
        className="relative col-start-1 col-end-2 row-start-2 row-end-4"
        id="scrollIndicator"
      >
        <ScrollIndicator top={false} bottom={true} />
      </div>
    </div>
  );
};

export default Layout;
