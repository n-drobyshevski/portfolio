import Image from 'next/image';
import type { StaticImageData } from 'next/image';

import Technologie from './Technologie';

type projectComponentProps = {
  title: string;
  description: string;
  technologies: string[];
  projectImage: StaticImageData;
  imagePosition: 'right' | 'left';
};

const ProjectImage = ({ image }: { image: StaticImageData }) => {
  return (
    <div className=" flex max-w-[25%] overflow-clip rounded-lg">
      <Image src={image} alt="project image" />
    </div>
  );
};
const Project = ({
  title,
  description,
  technologies,
  projectImage,
  imagePosition,
}: projectComponentProps) => {
  return (
    <div
      className={`flex ${
        imagePosition === 'left' ? 'flex-row-reverse' : 'flex-row'
      }min-h-[40%] gap-8`}
    >
      {/* image if imagePosition === left */}
      {imagePosition === 'left' ? <ProjectImage image={projectImage} /> : ''}

      {/* Text */}
      <div
        className={`flex flex-col ${
          imagePosition === 'left'
            ? 'items-end text-end'
            : 'items-start text-start'
        } gap-6 text-neutral-500`}
      >
        <h2 className="text-2xl">{title}</h2>
        <p className="text-md max-w-prose grow">{description}</p>
        <div className="flex w-min gap-4">
          {technologies
            ? technologies.map((name) => <Technologie key={name} name={name} />)
            : ''}
        </div>
      </div>

      {/* image if imagePosition === left */}
      {imagePosition === 'right' ? <ProjectImage image={projectImage} /> : ''}
    </div>
  );
};
export default Project;
