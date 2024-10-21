import About from "../Layouts/About";
import LandingPage from "../Layouts/LandingPage";
// import Navbar from "../Layouts/Navbar";
import PageWrapper from "../Layouts/PageWrapper";
import Project from "../Layouts/Project";

const Home = () => {
  return (
    <PageWrapper customClass="bg-slate-200 ">
      {/* <Navbar></Navbar> */}
      <LandingPage></LandingPage>

      <section className=" pb-96 flex flex-col bg-white h-autod px-10 rounded-tl-3xl rounded-tr-3xl">
        <About></About>
        <Project></Project>
      </section>
    </PageWrapper>
  );
};

export default Home;
