import { motion } from "framer-motion";
import { Camera, Award, Users, Heart } from "lucide-react";
import portrait from "../assets/pic.png";

const stats = [
  { icon: Camera, value: "5+", label: "Years Experience" },
  { icon: Award, value: "3+", label: "Awards Won" },
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: Heart, value: "80+", label: "Projects Completed" },
];

const About = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Portrait Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <motion.img
                src={portrait}
                alt="Elias Eshetu Portrait"
                className="w-full h-full object-cover rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-foreground bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm <span className="text-foreground font-semibold">Elias Eshetu</span>, a passionate Ethiopian photographer and videographer 
                dedicated to capturing the <span className="text-accent">rich tapestry</span> of Ethiopian culture, landscapes, 
                and people. My work celebrates the <span className="text-foreground">beauty and diversity</span> of Ethiopia through 
                portrait, wedding, street, and landscape photography.
              </p>
              <p>
                With over a decade of experience, I blend traditional Ethiopian aesthetics 
                with <span className="text-accent">modern cinematic techniques</span>. From the historic streets of Addis Ababa 
                to the breathtaking highlands, each frame tells a story rooted in our 
                vibrant heritage.
              </p>
              <p>
                I believe in preserving memories and honoring our culture through 
                <span className="text-foreground font-semibold"> authentic visual storytelling</span>. 
                Let's capture your Ethiopian story together.
              </p>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-6 mt-10"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-accent/50 transition-all duration-300 group"
                  >
                    <Icon className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-4xl font-bold text-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
