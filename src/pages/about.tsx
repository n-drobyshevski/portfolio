import Image from 'next/image';
import image from '@/images/about_section.jpg';
import Layout from '@/components/Layout';
const AboutSection = () => {
  return (
    <Layout pageName="about">
      <div className="flex h-full items-center gap-8">
        <div className="flex grow-0 basis-1/2 flex-col gap-4 text-neutral-400">
          <h1 className="text-3xl"> About me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            scelerisque dui hac diam. Molestie sit feugiat elit eleifend diam id
            purus elementum dignissim. Adipiscing nibh sed eu purus nulla magna
            nulla. Tortor, tristique luctus in commodo sollicitudin augue nec.
            Faucibus semper laoreet pharetra sit. Auctor ac massa risus a ipsum.
            Id tempor pretium, facilisis ut euismod eget volutpat. Maecenas
            mauris tortor eu nam. Elit sed tellus non sed adipiscing. Amet, nibh
            enim tincidunt porttitor. Pulvinar mattis maecenas enim suspendisse
            condimentum facilisi aliquam. Eu tristique metus urna, orci
            hendrerit leo. Feugiat id pharetra sed at amet felis augue pulvinar
            id. Dolor, morbi massa pretium etiam urna, ut ac.
          </p>
        </div>
        <div className=" flex grow-0 basis-1/2 flex-row-reverse justify-center overflow-hidden">
          <Image
            alt="photo"
            src={image}
            className="my-4 min-h-full min-w-full rounded-md"
          />
        </div>
      </div>
    </Layout>
  );
};

export default AboutSection;
