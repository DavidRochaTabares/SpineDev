import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import StarsBackground from "./StarsBackground";

export default function MainView() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const slidesRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [sliderDimmensions, setSliderDimmensions] = useState<number>(0);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [starsReady, setStarsReady] = useState<boolean>(false);
  const starsReadyRef = useRef(false);

  const markStarsReady = () => {
    if (!starsReadyRef.current) {
      starsReadyRef.current = true;
      setStarsReady(true);
    }
  };

  useEffect(() => {
    const t = setTimeout(markStarsReady, 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    // Check if refs are populated, if not wait
    const checkRefs = () => {
      const numSlides = slidesRefs.current.filter(Boolean).length;
      if (numSlides > 0) {
        const slideWidth = window.innerWidth;
        setSliderDimmensions(numSlides * slideWidth);
        setIsReady(true);
      } else {
        // Refs not ready yet, check again
        setTimeout(checkRefs, 50);
      }
    };

    checkRefs();
  }, []);

  useEffect(() => {
    if (!isReady) return;

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".stickySection",
        start: "top top",
        scrub: true,
        pin: true,
        markers: false,
        invalidateOnRefresh: true,
      },
    });

    tl.fromTo(
      ".stickySection",
      {
        x: () =>
          -window.innerWidth * (slidesRefs.current.filter(Boolean).length - 1),
      },
      {
        x: window.innerWidth,
        ease: "none",
        duration: 10,
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isReady, sliderDimmensions]);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="w-full z-20" style={{ height: sliderDimmensions }}>
        <div className="absolute inset-0"></div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-400/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-400/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
        <div
          className="stickySection w-full"
          style={
            sliderDimmensions ? { height: `${sliderDimmensions}px` } : undefined
          }
        >
          <div ref={sliderRef} className="flex w-full">
            <div
              className="h-screen w-screen flex-shrink-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10"
              ref={(el) => (slidesRefs.current[0] = el)}
            >
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={
                    starsReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 18,
                    delay: 0.05,
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Software simple. Funcional. A tu medida.</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    starsReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 70,
                    damping: 16,
                    delay: 0.15,
                  }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 text-balance"
                >
                  Desarrollo de Software{" "}
                  <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                    a tu medida
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  animate={
                    starsReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 70,
                    damping: 16,
                    delay: 0.28,
                  }}
                  className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto text-balance"
                >
                  Soluciones de software que encajan con tu negocio, sin
                  complicaciones.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    starsReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 70,
                    damping: 16,
                    delay: 0.42,
                  }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <a
                    href="#contacto"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-semibold text-lg"
                  >
                    Iniciar Proyecto
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </div>
            </div>

            <div
              className="h-screen w-screen bg-red flex-shrink-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10"
              ref={(el) => (slidesRefs.current[1] = el)}
            >
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={
                    starsReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 18,
                    delay: 0.05,
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Software simple. Funcional. A tu medida.</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    starsReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 70,
                    damping: 16,
                    delay: 0.15,
                  }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 text-balance"
                >
                  Tecnología de Software{" "}
                  <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                    A tu medida
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  animate={
                    starsReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 70,
                    damping: 16,
                    delay: 0.28,
                  }}
                  className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto text-balance"
                >
                  Soluciones de software que encajan con tu negocio, sin
                  complicaciones.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    starsReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 70,
                    damping: 16,
                    delay: 0.42,
                  }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <a
                    href="#contacto"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-semibold text-lg"
                  >
                    Iniciar Proyecto
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#nosotros"
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
      <StarsBackground height={sliderDimmensions} onReady={markStarsReady} />
    </section>
  );
}
