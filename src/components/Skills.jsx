import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Title from './Title';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMysql,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiGit,
} from 'react-icons/si';

const skills = [
  { title: "HTML5", icon: SiHtml5, color: "#E34F26", progValue: 95 },
  { title: "CSS3", icon: SiCss3, color: "#1572B6", progValue: 92 },
  { title: "JavaScript", icon: SiJavascript, color: "#F7DF1E", progValue: 90 },
  { title: "TypeScript", icon: SiTypescript, color: "#3178C6", progValue: 85 },
  { title: "React.js", icon: SiReact, color: "#61DAFB", progValue: 92 },
  { title: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", progValue: 88 },
  { title: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", progValue: 94 },
  { title: "Node.js", icon: SiNodedotjs, color: "#339933", progValue: 80 },
  { title: "Express.js", icon: SiExpress, color: "#AAAAAA", progValue: 82 },
  { title: "MongoDB", icon: SiMongodb, color: "#47A248", progValue: 78 },
  { title: "MySQL", icon: SiMysql, color: "#4479A1", progValue: 75 },
  { title: "Git & GitHub", icon: SiGit, color: "#F05032", progValue: 88 },
];

function SkillBar({ skill, index, animate }) {
  const [currentVal, setCurrentVal] = useState(0);

  useEffect(() => {
    if (!animate) {
      setCurrentVal(0);
      return;
    }

    const startTimeout = setTimeout(() => {
      let startTimestamp = null;
      const duration = 750;
      const target = skill.progValue;

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        setCurrentVal(Math.round(easeProgress * target));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }, index * 85 + 150);

    return () => clearTimeout(startTimeout);
  }, [animate, skill.progValue, index]);

  const Icon = skill.icon;

  return (
    <div className="p-3 rounded-md bg-secondary-950/70 border border-secondary-800 flex items-center gap-3">
      <div
        className="w-9 h-9 rounded-md flex items-center justify-center bg-secondary-900 flex-shrink-0"
        style={{ color: skill.color }}
      >
        <Icon className="text-xl" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-sm font-semibold text-secondary-200 truncate">
            {skill.title}
          </span>
          <span className="text-xs font-mono text-secondary-400">
            {currentVal}%
          </span>
        </div>

        <div className="w-full h-1.5 bg-secondary-800 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-primary-500 transition-all"
            style={{
              width: animate ? `${skill.progValue}%` : '0%',
              transitionDuration: '750ms',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: `${index * 85 + 150}ms`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

function Skills() {
  const location = useLocation();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // If on /about, trigger animation
    if (location.pathname === '/about') {
      const timer = setTimeout(() => {
        setAnimate(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setAnimate(false);
    }
  }, [location.pathname]);

  // Direct load fallback
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 250);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="rounded-md p-5 sm:p-6 col-span-2 border border-secondary-800 bg-secondary-900/90">
      <Title title="Skills" />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {skills.map((skill, index) => (
          <Fade key={skill.title} delay={index * 20} triggerOnce>
            <SkillBar
              skill={skill}
              index={index}
              animate={animate}
            />
          </Fade>
        ))}
      </div>
    </div>
  );
}

export default Skills;