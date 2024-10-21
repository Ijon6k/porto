import ProjectCard from "../Components/ProjectCard";

const Project = () => {
  return (
    <div>
      <p className="text-3xl text-center font-bold my-10">My Work</p>

      <div className=" flex flex-col gap-5 lg:grid md:grid-cols-2 justify-items-center ">
        <ProjectCard
          link={`https://ijon6k.github.io/plants-e-commerce/`}
          desc="Plants marketplace website, made with vanilla HTML CSS and JS"
        >
          <img
            src="/src/assets/plants.jpg"
            className="w-full object-cover h-full overflow-hidden rounded-xl "
          />
        </ProjectCard>

        <ProjectCard
          link={`https://ecommerce-web-gilt.vercel.app/`}
          desc="Furniture marketplace, made with ReactJS"
        >
          <img
            src="/src/assets/fidea.jpg"
            className="w-full object-cover h-full overflow-hidden rounded-xl "
          />
        </ProjectCard>
      </div>
    </div>
  );
};

export default Project;
