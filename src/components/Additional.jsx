import { Fade } from "react-awesome-reveal";
import { MdAccessTimeFilled } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaLightbulb } from "react-icons/fa";
import Title from './Title';

const additionals = [
  {
    icon: MdAccessTimeFilled,
    header: "Time Management",
    desc: "Consistent delivery of project milestones and requirements on schedule."
  },
  {
    icon: FaLightbulb,
    header: "Problem Solving",
    desc: "Debugging complex architectural challenges and optimizing algorithms."
  },
  {
    icon: HiMiniUserGroup,
    header: "Collaboration",
    desc: "Git workflow, pull requests, code reviews, and cross-functional teamwork."
  },
];

function Additional() {
  return (
    <div className="rounded-md p-5 sm:p-6 col-span-2 md:col-span-1 border border-secondary-800 bg-secondary-900/90">
      <Title title="Strengths" />

      <div className="space-y-3.5 mt-3.5">
        {additionals.map((item, index) => {
          const Icon = item.icon;
          return (
            <Fade key={index} delay={index * 50} triggerOnce>
              <div className="p-3.5 rounded-md bg-secondary-950/70 border border-secondary-800/80 flex gap-3.5">
                <div className="p-2.5 rounded-md bg-secondary-900 text-primary-400 h-fit flex-shrink-0">
                  <Icon className="text-xl" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-secondary-100 mb-1">
                    {item.header}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
    </div>
  );
}

export default Additional;


