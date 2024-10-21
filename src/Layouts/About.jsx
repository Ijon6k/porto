import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import Icon from "../Components/Icon";

import { FaFigma, FaGitAlt, FaGithub, FaHtml5 } from "react-icons/fa";
import { SiAdobelightroom, SiAdobephotoshop } from "react-icons/si";
const About = () => {
  return (
    <section className="">
      <div className="text-3xl font-bold text-center pt-20 ">My toolkit</div>
      <div className="grid grid-cols-2 md:flex justify-items-center  items-center  gap-10 justify-center mt-10">
        <Icon name="Git">
          <FaGitAlt />
        </Icon>
        <Icon name="GitHub">
          <FaGithub />
        </Icon>
        <Icon name="HTML">
          <FaHtml5 />
        </Icon>
        <Icon name="Tailwind CSS">
          <RiTailwindCssFill />
        </Icon>
        <Icon name="ReactJS">
          <RiReactjsFill />
        </Icon>
        <Icon name="Figma">
          <FaFigma />
        </Icon>
        <Icon name="Photoshop">
          <SiAdobephotoshop />
        </Icon>
        <Icon name="Lightroom">
          <SiAdobelightroom />
        </Icon>
      </div>
    </section>
  );
};

export default About;
