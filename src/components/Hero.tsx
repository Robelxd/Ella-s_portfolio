"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  // Parallax scroll setup
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 300], [0, 80]);
  const opacityText = useTransform(scrollY, [0, 200], [1, 0.2]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Elias Eshetu - Professional Ethiopian Photographer"
          className="w-full h-full object-cover object-center"
          style={{ scale: 1.1 }}
          animate={{ scale: [1.1, 1.05, 1.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      {/* Hero Content */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Profession / Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="uppercase tracking-[4px] text-accent mb-4 text-sm md:text-base font-medium"
        >
          Photographer & Videographer
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-6xl md:text-8xl font-bold mb-6 tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
        >
          <span className="bg-gradient-to-r from-accent via-foreground to-accent bg-clip-text text-transparent">
            Elias Eshetu
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
            Ethiopian Stories Through the Lens
          </p>
          <p className="text-sm md:text-base text-muted-foreground/80 mt-2 italic">
            Capturing light, culture, and emotion — one frame at a time.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* View Work Button */}
          <Button
            size="lg"
            onClick={() => scrollToSection('Portfolio')}
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-amber px-8 py-6 text-lg group"
          >
            View My Work
            <motion.span
              className="ml-2 inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Button>

          {/* View / Download Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <Button
              size="lg"
              variant="outline"
              className="border-accent/30 text-foreground hover:bg-accent/10 hover:border-accent px-8 py-6 text-lg backdrop-blur-sm"
            >
              View Resume
            </Button>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          className="border border-accent/30 rounded-full p-3"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
