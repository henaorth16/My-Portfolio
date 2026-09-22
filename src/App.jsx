import { lazy, Suspense, useEffect } from 'react';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import 'react-awesome-slider/dist/styles.css';
import AnimatedCursor from "react-animated-cursor";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './App.css';
import './index.css';
import './components/About.css';
import Loader from './components/Loader';
import Nav from './components/Nav';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Testimonial = lazy(() => import('./pages/Testimonial'));
const Contact = lazy(() => import('./pages/Contact'));

export const SLIDES = [
  { path: '/', label: 'Home', title: 'Henok Emyaye | Full-Stack Developer' },
  { path: '/about', label: 'About', title: 'Henok Emyaye | About Me' },
  { path: '/portfolio', label: 'Projects', title: 'Henok Emyaye | Featured Projects' },
  { path: '/testimonials', label: 'Testimonials', title: 'Henok Emyaye | Testimonials' },
  { path: '/contact', label: 'Contact', title: 'Henok Emyaye | Get in Touch' },
];

const pathToIndex = (pathname) => {
  const norm = pathname.toLowerCase().replace(/\/$/, '') || '/';
  if (norm === '/' || norm === '/home') return 0;
  if (norm === '/about') return 1;
  if (norm === '/portfolio' || norm === '/projects') return 2;
  if (norm === '/testimonials' || norm === '/testimony') return 3;
  if (norm === '/contact') return 4;
  return 0;
};

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const activeIndex = pathToIndex(location.pathname);

  // Sync document title with current active slide
  useEffect(() => {
    document.title = SLIDES[activeIndex].title;
  }, [activeIndex]);

  // Set data-page-title on slider next/prev arrow buttons for hover tooltips
  useEffect(() => {
    const prevSlide = activeIndex > 0 ? SLIDES[activeIndex - 1] : SLIDES[SLIDES.length - 1];
    const nextSlide = activeIndex < SLIDES.length - 1 ? SLIDES[activeIndex + 1] : SLIDES[0];

    const applyTitles = () => {
      const prevBtn = document.querySelector('button.awssld__prev');
      const nextBtn = document.querySelector('button.awssld__next');

      if (prevBtn) {
        prevBtn.setAttribute('data-page-title', prevSlide.label);
        prevBtn.setAttribute('title', `Previous: ${prevSlide.label}`);
      }
      if (nextBtn) {
        nextBtn.setAttribute('data-page-title', nextSlide.label);
        nextBtn.setAttribute('title', `Next: ${nextSlide.label}`);
      }

      return Boolean(prevBtn && nextBtn);
    };

    // Try immediately
    applyTitles();

    // Retry as lazy-loaded components and AwesomeSlider mount controls
    const t1 = setTimeout(applyTitles, 100);
    const t2 = setTimeout(applyTitles, 300);
    const t3 = setTimeout(applyTitles, 700);
    const t4 = setTimeout(applyTitles, 1500);

    // Watch for DOM mutations in case AwesomeSlider injects controls asynchronously
    const observer = new MutationObserver(() => {
      applyTitles();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Instantly ensure attributes on hover if user moves mouse over buttons
    const handlePointerOver = (e) => {
      if (e.target && e.target.closest && e.target.closest('button.awssld__prev, button.awssld__next')) {
        applyTitles();
      }
    };
    window.addEventListener('pointerover', handlePointerOver, { passive: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      observer.disconnect();
      window.removeEventListener('pointerover', handlePointerOver);
    };
  }, [activeIndex]);


  // Sync route after slide transitions (arrow clicks, touch swipes)
  const handleTransitionEnd = (sliderInfo) => {
    const nextIdx = sliderInfo?.currentIndex ?? sliderInfo?.nextIndex;
    if (typeof nextIdx === 'number' && nextIdx >= 0 && nextIdx < SLIDES.length) {
      const targetPath = SLIDES[nextIdx].path;
      if (location.pathname !== targetPath) {
        navigate(targetPath);
      }
    }
  };

  // Keyboard left / right arrow navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      const activeTag = document.activeElement?.tagName?.toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea') return;

      if (e.key === 'ArrowRight' && activeIndex < SLIDES.length - 1) {
        navigate(SLIDES[activeIndex + 1].path);
      } else if (e.key === 'ArrowLeft' && activeIndex > 0) {
        navigate(SLIDES[activeIndex - 1].path);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, navigate]);

  const isMobileDevice = () => {
    return typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  };

  return (
    <div className="relative w-full h-[100vh] overflow-hidden bg-[#0c0d10] select-text">
      {/* Custom Animated Cursor (Desktop only) */}
      {!isMobileDevice() && (
        <AnimatedCursor
          color="220,38,38"
          innerSize={7}
          outerSize={28}
          innerScale={1}
          outerScale={1.6}
          outerStyle={{ mixBlendMode: 'difference' }}
          showSystemCursor={true}
        />
      )}

      {/* Floating Modern Header / Navbar */}
      <Nav />

      {/* Main Horizontal AwesomeSlider Container */}
      <Suspense fallback={<Loader />}>
        <AwesomeSlider
          selected={activeIndex}
          bullets={false}
          fillParent={true}
          animation="openAnimation"
          mobileTouch={true}
          onTransitionEnd={handleTransitionEnd}
          className="bg-[#0c0d10]"
          fill=""
        >
          {/* Slide 0: Home */}
          <div className="w-full h-[100vh]">
            <Home />
          </div>

          {/* Slide 1: About */}
          <div className="w-full h-[100vh]">
            <About />
          </div>

          {/* Slide 2: Portfolio / Projects */}
          <div className="w-full h-[100vh]">
            <Portfolio />
          </div>

          {/* Slide 3: Testimonials */}
          <div className="w-full h-[100vh]">
            <Testimonial />
          </div>

          {/* Slide 4: Contact */}
          <div className="w-full h-[100vh]">
            <Contact />
          </div>
        </AwesomeSlider>
      </Suspense>

      {/* Fallback hidden routes to allow React Router to match any deep links cleanly */}
      <div className="hidden">
        <Routes>
          <Route path="/" element={null} />
          <Route path="/home" element={null} />
          <Route path="/about" element={null} />
          <Route path="/portfolio" element={null} />
          <Route path="/projects" element={null} />
          <Route path="/testimonials" element={null} />
          <Route path="/testimony" element={null} />
          <Route path="/contact" element={null} />
          <Route path="*" element={null} />
        </Routes>
      </div>

      {/* Floating Bottom Slide Pagination Bar */}
      <footer className="fixed bottom-4 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none">
        <div className="flex items-center gap-3 px-4 py-2 rounded-md border border-secondary-800 pointer-events-auto bg-secondary-900/95 shadow-md">
          
          {/* Prev Slide Button with Hover Title Tooltip */}
          <div className="relative group flex items-center">
            <button
              onClick={() => activeIndex > 0 && navigate(SLIDES[activeIndex - 1].path)}
              disabled={activeIndex === 0}
              aria-label="Previous Slide"
              title={activeIndex > 0 ? `Previous: ${SLIDES[activeIndex - 1].label}` : 'Start'}
              className="p-1.5 rounded text-secondary-400 hover:text-white disabled:opacity-25 transition-colors"
            >
              <FaChevronLeft className="text-xs sm:text-sm" />
            </button>
            {activeIndex > 0 && (
              <span className="absolute bottom-full left-0 mb-3 hidden group-hover:flex items-center px-2.5 py-1 text-xs font-semibold font-heading text-secondary-100 bg-secondary-950 border border-secondary-800 rounded-md shadow-lg whitespace-nowrap pointer-events-none">
                ← {SLIDES[activeIndex - 1].label}
              </span>
            )}
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center gap-2">
            {SLIDES.map((slide, idx) => (
              <button
                key={slide.path}
                onClick={() => navigate(slide.path)}
                title={slide.label}
                aria-label={`Go to ${slide.label}`}
                className={`h-2 transition-all duration-200 rounded-sm ${
                  activeIndex === idx
                    ? 'w-5 bg-primary-500'
                    : 'w-2 bg-secondary-700 hover:bg-secondary-500'
                }`}
              />
            ))}
          </div>

          {/* Slide Count Indicator */}
          <span className="text-xs sm:text-sm font-mono font-medium text-secondary-300 px-1">
            0{activeIndex + 1}/0{SLIDES.length}
          </span>

          {/* Next Slide Button with Hover Title Tooltip */}
          <div className="relative group flex items-center">
            <button
              onClick={() => activeIndex < SLIDES.length - 1 && navigate(SLIDES[activeIndex + 1].path)}
              disabled={activeIndex === SLIDES.length - 1}
              aria-label="Next Slide"
              title={activeIndex < SLIDES.length - 1 ? `Next: ${SLIDES[activeIndex + 1].label}` : 'End'}
              className="p-1.5 rounded text-secondary-400 hover:text-white disabled:opacity-25 transition-colors"
            >
              <FaChevronRight className="text-xs sm:text-sm" />
            </button>
            {activeIndex < SLIDES.length - 1 && (
              <span className="absolute bottom-full right-0 mb-3 hidden group-hover:flex items-center px-2.5 py-1 text-xs font-semibold font-heading text-secondary-100 bg-secondary-950 border border-secondary-800 rounded-md shadow-lg whitespace-nowrap pointer-events-none">
                {SLIDES[activeIndex + 1].label} →
              </span>
            )}
          </div>

        </div>
      </footer>

    </div>
  );
}

export default App;

