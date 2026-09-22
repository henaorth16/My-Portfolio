import { FaLinkedin, FaQuoteLeft } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Img } from "react-image";
import { MainTitle } from "../components/Title";

const testimonials = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/98223438?v=4",
    name: "Leul Dereje",
    work: "Software Developer & Digital Creator",
    description: "Collaborating with Henok has been inspiring. He possesses dedication that ensures projects are completed on time with commendable quality, converting complex UI into stunning, functional websites.",
    instaLink: "",
    linkedLink: "https://www.linkedin.com/in/leul-dereje-0a0862224/"
  },
  {
    imageUrl: "https://media.licdn.com/dms/image/v2/D4E03AQFRHK0b6ER6sA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1704396561318?e=1729728000&v=beta&t=fBfJmDIxAtgHFR_gJl5W1VmCBkuR-BKMFob9zoAUzaM",
    name: "Ezra Mamo",
    work: "Co-Founder, Blue Nile IT Solutions",
    description: "I worked with Henok on key projects. He is well-versed in frontend engineering, dependable, and a solid developer to collaborate with on demanding milestones.",
    instaLink: "https://instagram.com/ezolbest",
    linkedLink: "https://www.linkedin.com/in/ezra-mamo-09201022b/"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
    name: "Yabsira Tolosa",
    work: "UI/UX Designer",
    description: "Henok collaborates seamlessly with design teams, translating complex UI specifications into pixel-perfect code while maintaining responsive accessibility standards.",
    instaLink: "",
    linkedLink: ""
  },
];

export default function Testimonial() {
  return (
    <section id="testimony" className="h-full w-full pt-14 pb-16 px-4 sm:px-6 overflow-y-auto wrapper">
      <div className="max-w-4xl mx-auto space-y-4">
        
        {/* Header */}
        <div className="text-center">
          <MainTitle title="Testimonials" subtitle="Feedback from colleagues and project collaborators" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-md p-2 sm:p-4 border border-secondary-800 bg-secondary-900/90 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3.5 pb-3.5 border-b border-secondary-800">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary-500/40">
                      <Img
                        className="w-full h-full object-cover"
                        src={item.imageUrl}
                        alt={item.name}
                      />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-sm sm:text-base text-secondary-100">
                        {item.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-primary-400">
                        {item.work}
                      </p>
                    </div>
                  </div>
                  <FaQuoteLeft className="text-base sm:text-lg text-secondary-600 flex-shrink-0" />
                </div>

                <p className="text-secondary-300 text-sm sm:text-base leading-relaxed">
                  &ldquo;{item.description}&rdquo;
                </p>
              </div>

              {/* Social Link */}
              <div className="mt-4 pt-2.5 border-t border-secondary-800/80 flex items-center justify-end gap-2.5">
                {item.linkedLink && (
                  <a
                    href={item.linkedLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="p-1.5 rounded text-secondary-400 hover:text-primary-400 text-base transition-colors"
                  >
                    <FaLinkedin />
                  </a>
                )}
                {item.instaLink && (
                  <a
                    href={item.instaLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="p-1.5 rounded text-secondary-400 hover:text-primary-400 text-base transition-colors"
                  >
                    <RiInstagramFill />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

