import imgds from "../assets/image/dsajs.png";
import imght from "../assets/image/htmlcss.png";
import imgcpp from "../assets/image/imgcpp.jpg";
import imgcss from "../assets/image/imgcss.jpg";
import Title from "./Title";
import { Img } from "react-image";
import { FaExternalLinkAlt } from "react-icons/fa";

const certificates = [
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    image: imgds,
    link: "https://www.freecodecamp.org/certification/henaorth/javascript-algorithms-and-data-structures",
  },
  {
    title: "Responsive Web Design Certification",
    issuer: "freeCodeCamp",
    image: imght,
    link: "https://www.freecodecamp.org/certification/henaorth/responsive-web-design",
  },
  {
    title: "C++ Training Crash Course",
    issuer: "Udemy",
    image: imgcpp,
    link: "https://www.udemy.com/certificate/UC-b886a8df-9a76-4030-aa09-49e9c7b0cb28/",
  },
  {
    title: "Complete HTML5 and CSS3 Masterclass",
    issuer: "Udemy",
    image: imgcss,
    link: "https://www.udemy.com/certificate/UC-8dc2edaf-bff8-4da4-9d1e-5069fec0f2fe/",
  },
];

function Credential() {
  return (
    <div className="rounded-md p-5 sm:p-6 col-span-2 border border-secondary-800 bg-secondary-900/90">
      <Title title="Certifications" />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-3.5">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="rounded-md overflow-hidden bg-secondary-950/70 border border-secondary-800 flex flex-col justify-between"
          >
            <div className="relative h-32 sm:h-36 overflow-hidden bg-secondary-950">
              <Img
                className="w-full h-full object-cover object-top"
                src={cert.image}
                alt={cert.title}
              />
            </div>

            <div className="p-3 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-primary-400">
                  {cert.issuer}
                </span>
                <h3 className="font-heading font-semibold text-sm text-secondary-100 line-clamp-2 mt-1">
                  {cert.title}
                </h3>
              </div>

              <div className="pt-2 mt-1.5 border-t border-secondary-800/80">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-400 hover:text-primary-300"
                >
                  Verify <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Credential;


