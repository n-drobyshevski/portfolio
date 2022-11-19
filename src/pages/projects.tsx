import image from '@/images/projects_section.jpg';
import image1 from '@/images/projects_section_1.jpg';
import image2 from '@/images/projects_section_2.jpg';

import Project from '@/components/projects/Project';
import Layout from '@/components/Layout';

const ProjectSection = () => {
  return (
    <Layout pageName="projects" mainStyles="overflow-y-scroll scroll-smooth">
      <div className="flex h-full w-full flex-col gap-16">
        <h1 className="text-3xl text-neutral-400">My projects</h1>
        <Project
          title="Project title"
          projectImage={image}
          description="Repudiandae commodi quam deserunt sunt libero. Molestias autem labore et ut expedita explicabo nesciunt. Perferendis voluptatem quos molestias. Delectus aut rerum aut tempora ab sed. Culpa laboriosam nam voluptatem earum reiciendis in dolorem sequi. Eligendi at numquam deserunt et voluptatem dicta.lorem ipsum Voluptates fugiat hic deleniti repudiandae. Omnis voluptatum nihil fuga. Praesentium esse et voluptatibus et molestiae."
          technologies={['JavaScript', 'ReactJS']}
          imagePosition="right"
        />
        <Project
          title="Project title"
          projectImage={image1}
          description="Repudiandae commodi quam deserunt sunt libero.Molestias autem labore et ut expedita explicabo Molestias autem labore et ut expedita explicabo nesciunt. Perferendis voluptatem quos molestias. Delectus aut rerum aut tempora ab sed. Culpa laboriosam nam voluptatem earum reiciendis in dolorem sequi. Eligendi at numquam deserunt et voluptatem dicta.lorem ipsum Voluptates fugiat hic deleniti repudiandae. Omnis voluptatum nihil fuga. Praesentium esse et voluptatibus et molestiae."
          technologies={['TypeScript', 'NextJS']}
          imagePosition="left"
        />
        <Project
          title="Project title"
          projectImage={image2}
          description="Repudiandae commodi quam deserunt sunt libero. Molestias autem labore et ut expedita explicabo nesciunt. Perferendis voluptatem quos molestias. Delectus aut rerum aut tempora ab sed. Culpa laboriosam nam voluptatem earum reiciendis in dolorem sequi. Eligendi at numquam deserunt et voluptatem dicta.lorem ipsum Voluptates fugiat hic deleniti repudiandae. Omnis voluptatum nihil fuga. Praesentium esse et voluptatibus et molestiae."
          technologies={['JavaScript', 'ReactJS']}
          imagePosition="right"
        />
      </div>
    </Layout>
  );
};

export default ProjectSection;
