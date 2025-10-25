import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import logo from "@/assets/logo_ela.png";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-background/80 backdrop-blur-md border border-border/50 rounded-full px-6 py-3 flex items-center justify-between shadow-lg">
          {/* Logo */}
          <div
  className="flex items-center gap-2 cursor-pointer"
  onClick={() => scrollToSection('hero')}
>
  <motion.div
  whileHover={{ scale: 1.1 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="w-10 h-10 bg-background border border-accent/40 rounded-full flex items-center justify-center shadow-md overflow-hidden"
>
  <img
  src={logo}
  alt="Elias Eshetu Logo"
  className="w-full h-full object-cover rounded-full brightness-110 contrast-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
/>

</motion.div>

  <span className="font-bold text-lg tracking-tight">Elias Eshetu</span>
</div>


          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {["Work", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative text-muted-foreground hover:text-accent transition-colors duration-300 font-medium after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all after:duration-300"

              >
                {item}
              </button>
            ))}
          </div>

          {/* CTA */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-accent text-accent-foreground px-6 py-2 rounded-full hover:shadow-amber transition-all duration-300 font-medium text-sm"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
