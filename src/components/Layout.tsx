import Head from 'next/head';
import Header from './Header';
import Sidebar from './Sidebar';

type LayoutProps = {
  children: JSX.Element;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid h-full grid-cols-9 grid-rows-[100px_1fr]">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content="Portfolio" />
      </Head>
      <Header />

      <main className="col-start-3 col-end-8 row-start-2">{children}</main>

      <div className="col-start-9 row-start-2">
        <Sidebar currentSectionName="about" />
      </div>
    </div>
  );
};

export default Layout;
