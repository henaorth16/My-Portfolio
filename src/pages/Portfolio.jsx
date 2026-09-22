import { useState } from "react";
import { Img } from "react-image";
import { FaExternalLinkAlt, FaGithub, FaLock } from "react-icons/fa";
import { MainTitle } from "../components/Title";
import imgTour from "../assets/image/tour.png";
import imgComp from "../assets/image/complain.png";
import imgAmazing from "../assets/image/amazing.png";
import churchFeast from "../assets/image/churchFeast.png";
import graphity from "../assets/image/graphity.jpg";
import anagnosi from "../assets/image/anagnosi.png";
import bible from "../assets/image/bible.png";
import debretabor from "../assets/image/debretabor.png";

const projects = [
  {
    imageUrl: debretabor,
    title: "Debre-Tabor Platform",
    category: "Full-Stack",
    description: "Theological college platform with news, events, content management, and integrated Chapa payment gateway for donations.",
    gitRepoLink: "",
    liveLink: "https://debre-tabor-portfolio.vercel.app/",
    skills: ["Next.js", "TypeScript", "MongoDB", "Shadcn UI"],
    date: "Jun 2026",
  },
  {
    imageUrl: graphity,
    title: "Graphity",
    category: "Interactive",
    description: "Interactive 3D mathematical equation game helping students strengthen algebra and calculus intuition.",
    gitRepoLink: "",
    liveLink: "https://graph-ity.vercel.app/",
    skills: ["React.js", "Three.js", "Vite", "TypeScript"],
    date: "May 2026",
  },
  {
    imageUrl: anagnosi,
    title: "Anágnosi DOCX Viewer",
    category: "Frontend",
    description: "Distraction-free Microsoft Word (.docx) document viewer running in-browser and as a browser extension.",
    gitRepoLink: "https://github.com/henaorth16/Anagnosi",
    liveLink: "https://anagnosi.vercel.app/",
    skills: ["React", "Vite", "WebExtension API"],
    date: "May 2026",
  },
  {
    imageUrl: bible,
    title: "Ethiopian Bible Web App",
    category: "Frontend",
    description: "Web application for reading, bookmarking, and taking digital notes on the Ethiopian Bible online.",
    gitRepoLink: "https://github.com/henaorth16/EOTC-bible-web-FE",
    liveLink: "https://bible.nehemiah-osc.org/",
    skills: ["Next.js", "Shadcn UI", "TypeScript"],
    date: "Sep 2025",
  },
  {
    imageUrl: churchFeast,
    title: "Church and Feasts",
    category: "Full-Stack",
    description: "Platform mapping Ethiopian Orthodox Churches and tracking celebration feast schedules with integrated maps.",
    gitRepoLink: "https://github.com/henaorth16/church-and-feasts",
    liveLink: "https://church-and-feasts.vercel.app",
    skills: ["Next.js", "Prisma", "TypeScript", "PostgreSQL"],
    date: "May 2025",
  },
  {
    imageUrl: imgComp,
    title: "Complaint Management",
    category: "Full-Stack",
    description: "Ticketing and complaint resolution portal with authenticated roles, statuses, and audit tracking.",
    gitRepoLink: "https://github.com/henaorth16/nextjs-complaint-system/",
    liveLink: "https://nextjs-complaint-system.vercel.app/",
    skills: ["Next.js", "Prisma", "TypeScript"],
    date: "Jun 2024",
  },
  {
    imageUrl: imgTour,
    title: "Tour & Travel Agency",
    category: "Frontend",
    description: "Responsive travel booking website built for clients featuring curated destination catalogs.",
    gitRepoLink: "https://github.com/henaorth16/delight",
    liveLink: "https://delighttourandtravel.com/",
    skills: ["React", "Tailwind CSS", "JavaScript"],
    date: "Jul 2023",
  },
  {
    imageUrl: imgAmazing,
    title: "Amazing Gear Game",
    category: "Interactive",
    description: "HTML5 Canvas 2D physics puzzle game crafted to sharpen algorithmic scripting and canvas rendering.",
    gitRepoLink: "https://github.com/henaorth16/Amazing-Gear",
    liveLink: "https://amazing-gear.netlify.app/",
    skills: ["JavaScript", "HTML5 Canvas"],
    date: "Dec 2023",
  },
];

const CATEGORIES = ["All", "Full-Stack", "Frontend", "Interactive"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="h-full w-full pt-14 pb-16 px-4 sm:px-6 overflow-y-auto wrapper">
      <div className="max-w-4xl mx-auto space-y-4">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <MainTitle title="Projects" subtitle="Selected full-stack and frontend work" />
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 pt-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary-600 text-white"
                    : "bg-secondary-900 text-secondary-300 hover:text-white border border-secondary-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="rounded-md overflow-hidden border border-secondary-800 bg-secondary-900/90 flex flex-col justify-between"
            >
              {/* Media */}
              <div className="relative h-44 sm:h-48 overflow-hidden bg-secondary-950">
                <Img
                  className="w-full h-full object-cover object-center"
                  src={project.imageUrl}
                  alt={project.title}
                />
                <span className="absolute top-2.5 right-2.5 text-xs font-mono px-2.5 py-1 rounded bg-secondary-900/40 text-secondary-300 border border-secondary-800">
                  {project.date}
                </span>
                <span className="absolute top-2.5 left-2.5 text-xs font-semibold px-2.5 py-1 rounded bg-primary-600 text-white shadow-sm">
                  {project.category}
                </span>
              </div>

              {/* Details */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3.5">
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-heading text-secondary-100 mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-secondary-300 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs rounded bg-secondary-950 text-secondary-300 border border-secondary-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-2.5 border-t border-secondary-800/80 flex items-center justify-between">
                  {project.liveLink ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs sm:text-sm font-semibold text-white bg-primary-600 hover:bg-primary-500 transition-colors"
                    >
                      Live Demo <FaExternalLinkAlt className="text-xs" />
                    </a>
                  ) : (
                    <span className="text-xs sm:text-sm text-secondary-400">In Development</span>
                  )}

                  {project.gitRepoLink ? (
                    <a
                      href={project.gitRepoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs sm:text-sm font-medium text-secondary-200 bg-secondary-950 hover:bg-secondary-850 border border-secondary-800 hover:text-white transition-colors"
                    >
                      <FaGithub className="text-sm" /> Code
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-secondary-400">
                      <FaLock className="text-xs" /> Private
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}



