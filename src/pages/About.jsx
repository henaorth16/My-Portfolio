import Skills from "../components/Skills";
import Education from "../components/Education";
import Additional from "../components/Additional";
import Credential from "../components/Credential";
import Me from "../components/Me";
import { MainTitle } from "../components/Title";

const About = () => {
  return (
    <section id="about" className="w-full h-full pt-14 pb-16 px-4 sm:px-6 overflow-y-auto wrapper">
      <div className="max-w-4xl mx-auto space-y-4">
        
        {/* Header */}
        <MainTitle title="About Me" subtitle="Overview of background, skills, education, and credentials" />

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <Me />
          <Skills />
          <Education />
          <Additional />
          <Credential />
        </div>

      </div>
    </section>
  );
};

export default About;