import { Fade } from "react-awesome-reveal";
import Title from './Title';
import { FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

const educationList = [
  {
    institution: "Microlink IT College",
    credential: "Certified",
    period: "Completed",
    icon: FaGraduationCap,
    description: "Core IT fundamentals, DSA, databases, networking, and software application foundations."
  },
  {
    institution: "Self-Taught Development",
    credential: "Full-Stack Web Development",
    period: "2021 - Present",
    icon: FaLaptopCode,
    description: "Extensive hands-on mastery in React, Next.js, TypeScript, Node.js, and client project delivery."
  }
];

function Education() {
  return (
    <div className="rounded-md p-5 sm:p-6 col-span-2 md:col-span-1 border border-secondary-800 bg-secondary-900/90">
      <Title title="Education" />

      <div className="space-y-3.5 mt-3.5">
        {educationList.map((item, index) => {
          const Icon = item.icon;
          return (
            <Fade key={index} delay={index * 50} triggerOnce>
              <div className="p-3.5 rounded-md bg-secondary-950/70 border border-secondary-800/80 flex gap-3.5">
                <div className="p-2.5 rounded-md bg-secondary-900 text-primary-400 h-fit flex-shrink-0">
                  <Icon className="text-xl" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1.5 mb-1">
                    <h3 className="font-heading font-bold text-sm sm:text-base text-secondary-100 truncate">
                      {item.institution}
                    </h3>
                    <span className="text-xs font-mono text-secondary-400">
                      {item.period}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold text-primary-400 mb-1">
                    {item.credential}
                  </h4>
                  <p className="text-xs sm:text-sm text-secondary-300 leading-relaxed">
                    {item.description}
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

export default Education;


