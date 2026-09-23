import { Fade } from 'react-awesome-reveal';
import { Img } from 'react-image';
import { FaGithub, FaFilePdf } from 'react-icons/fa';
import image from '../assets/image/image.jpg';

function Home() {
  return (
    <section id="home" className="h-full w-full flex items-center justify-center px-4">
      <div className="flex flex-col items-center text-center max-w-xl mx-auto space-y-5 font-par">
        
        {/* Animated Avatar with Dynamic Broken Line to Full Circle SVG */}
        <Fade triggerOnce>
          <div className="relative flex items-center justify-center p-3">
            

            {/* Avatar Image */}
            <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-secondary-800/80 shadow-2xl relative z-10">
              <Img
                className="w-full h-full object-cover"
                src={image}
                alt="Henok Emyaye"
              />
            </div>
          </div>
        </Fade>

        {/* Name & Role */}
        <Fade triggerOnce delay={100}>
          <div className="space-y-1.5">
            <h1 className="text-3xl font-extrabold font-heading text-white tracking-tight">
              HENOK <span className="text-primary-500">EMYAYE</span>
            </h1>
            <p className="text-secondary-300 font-medium text-base sm:text-lg">
              Full-Stack & Frontend Developer
            </p>
          </div>
        </Fade>

        {/* Minimal Bio */}
        <Fade triggerOnce delay={150}>
          <p className="text-secondary-300 text-sm sm:text-base leading-relaxed max-w-lg">
            Specializing in React, Next.js, TypeScript, and Node.js. Building fast, responsive, and production-ready web applications.
          </p>
        </Fade>

        {/* Action Buttons with small border radius */}
        <Fade triggerOnce delay={200}>
          <div className="flex items-center gap-3.5 pt-2">
            <a
              href="https://drive.google.com/file/d/1AlFVg32EF30vwmE7GKqfD1MpwWHK4keT/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-3 py-1.5 text-sm sm:text-base font-semibold font-heading text-white bg-primary-600/60 hover:bg-primary-500 rounded-md transition-colors shadow-sm"
            >
              <FaFilePdf className="text-base" /> Resume
            </a>

            <a
              href="https://github.com/henaorth16"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-3 py-1.5 text-sm sm:text-base font-semibold font-heading text-secondary-200 bg-secondary-900/60 hover:bg-secondary-800 border border-secondary-700 rounded-md transition-colors"
            >
              <FaGithub className="text-lg" /> GitHub
            </a>
          </div>
        </Fade>

      </div>
    </section>
  );
}

export default Home;


