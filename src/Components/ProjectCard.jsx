import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ children, desc, link }) => {
  return (
    <div className="relative bg-slate-200 w-[95%] h-fit lg:h-96 lg:w-[600px] rounded-xl self-center ">
      <div className="w-full h-80 flex justify-center items-center overflow-hidden">
        {children}
      </div>
      <div>
        <p className=" p-5">{desc}</p>
      </div>
      <a href={link} className="absolute bottom-5 right-5">
        <FaExternalLinkAlt size={25} />
      </a>
    </div>
  );
};

export default ProjectCard;
