import Head from 'next/head';
import Header from './Header';
import ScrollIndicator from './ScrollIndicator';
import Sidebar from './Sidebar';

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container relative flex h-full flex-col">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content="Portfolio" />
      </Head>
      <Header />
      {/* <main className="my-12 grid h-max grow grid-cols-7 gap-6">
        {children}
      </main> */}
      <ScrollIndicator top={false} bottom={true} />
      <Sidebar currentSectionName="home" />
    </div>
  );
};

export default Layout;
