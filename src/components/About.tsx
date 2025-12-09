import { motion, useScroll, useTransform } from "framer-motion";
import { Camera, Award, Users, Heart, CameraIcon, Aperture, Video } from "lucide-react";
import portrait from "../assets/pp.png";
import { useRef } from "react";

const stats = [
  { icon: Camera, value: "5+", label: "Years Experience" },
  { icon: Award, value: "3+", label: "Awards Won" },
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: Heart, value: "80+", label: "Projects Completed" },
];

// Camera Gear Section
const gear = [
  { icon: CameraIcon, label: "Canon EOS R6 / R5" },
  { icon: Aperture, label: "RF 24-70mm f/2.8" },
  { icon: Aperture, label: "Prime Lenses (35mm / 85mm)" },
  { icon: Video, label: "4K Cinema Video Rig" },
];

const fadeIn = (dir = "up", delay = 0) => ({
  hidden: { opacity: 0, y: dir === "up" ? 20 : -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
});

const About = () => {
  const imageRef = useRef(null);

  // Parallax scrolling effect for portrait
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["0 1", "1 0"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -40]); // smooth upward motion

  return (
    <section className="py-24 px-6 bg-card relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Decorative Blurs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-accent/20 blur-3xl rounded-full"></div>
        <div className="absolute top-40 -right-32 w-96 h-96 bg-foreground/10 blur-3xl rounded-full"></div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* TEXT SECTION */}
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            {/* Heading */}
            <h2 className="text-5xl md:text-6xl font-extrabold mb-3 leading-tight bg-gradient-to-r from-accent to-foreground bg-clip-text text-transparent">
              About Me
            </h2>

            {/* Signature Autograph Name */}
            <p
              className="text-3xl md:text-4xl mt-1 italic"
              style={{
                fontFamily: "'Great Vibes', cursive",
                color: "var(--accent)",
                letterSpacing: "1px",
              }}
            >
              — Elias Eshetu
            </p>

            {/* Description */}
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed max-w-xl mt-6">
              <p>
                I’m{" "}
                <span className="text-foreground font-semibold">
                  Elias Eshetu
                </span>
                , a passionate Ethiopian photographer and videographer dedicated
                to capturing the{" "}
                <span className="text-accent font-semibold">
                  rich tapestry of Ethiopian culture
                </span>
                .
              </p>

              <p>
                I blend traditional Ethiopian aesthetics with{" "}
                <span className="text-accent font-semibold">
                  modern cinematic storytelling
                </span>
                , creating visuals that feel authentic, bold, and timeless.
              </p>

              <p>
                Every project is a chance to preserve memories through{" "}
                <span className="text-foreground font-semibold">
                  genuine visual narratives
                </span>
                . Let’s bring your story to life.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6 mt-12"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="p-6 rounded-xl border border-border bg-background/40 backdrop-blur-md
                    hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 
                    group"
                  >
                    <Icon className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-4xl font-bold text-foreground">{stat.value}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Camera Gear Section */}
            <div className="mt-14">
              <h3 className="text-3xl font-semibold text-foreground mb-4">My Camera Gear</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {gear.map((g, i) => {
                  const Icon = g.icon;
                  return (
                    <motion.div
                      key={g.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.12 }}
                      className="flex items-center gap-3 p-4 rounded-lg bg-background/40 backdrop-blur border border-border hover:border-accent/50 transition"
                    >
                      <Icon className="w-6 h-6 text-accent" />
                      <span className="text-foreground">{g.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* IMAGE WITH PARALLAX */}
          <motion.div
            ref={imageRef}
            style={{ y }}
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-2 md:order-1 relative group"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-black/30">
              <motion.img
                src={portrait}
                alt="Elias Eshetu Portrait"
                className="w-full h-auto object-cover rounded-2xl"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent 
              opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
