import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Play, X } from "lucide-react";

import wedding1 from "@/assets/wedding_5.jpg";
import wedding2 from "@/assets/wedding-2.jpg";
import wedding3 from "@/assets/wedding-3.jpg";
import wedding6 from "@/assets/wedding_6.jpg";
import wedding7 from "@/assets/wedding_7.jpg";
import wedding8 from "@/assets/wedding_8.jpg";
import street1 from "@/assets/street-1.jpg";
import street2 from "@/assets/street-2.jpg";
import street3 from "@/assets/street-3.jpg";
import landscape from "@/assets/landscape.jpg";
import portrait from "@/assets/portrait.png";
import showreel from "@/assets/showreel.mp4";
import showreel1 from "@/assets/showreel-thumb.png";
import commercial from "@/assets/commercial.mp4";
import commercial1 from "@/assets/commercial.png";
import weddingvid from "@/assets/wedding-vid.mp4";
import wedthumb2 from "@/assets/wedthumb2.png";
import bd from "@/assets/bd.jpg";
import irrecha from "@/assets/irrecha.jpg";

type PortfolioItem = {
  id: number;
  image: string;
  title: string;
  category: string;
  aspect: "landscape" | "portrait" | "square";
  type: "image" | "video";
  videoUrl?: string;
  description?: string;
  client?: string;
  date?: string;
};

const portfolioItems: PortfolioItem[] = [
  { 
    id: 1, 
    image: wedding1, 
    title: "Eternal Love", 
    category: "Wedding", 
    aspect: "landscape",
    type: "image",
    videoUrl: "",
    description: "A beautiful wedding celebration capturing precious moments and emotions",
    client: "Wedding Couple",
    date: "2024"
  },
  { 
    id: 2, 
    image: wedding2, 
    title: "Wedding Ceremony", 
    category: "Wedding", 
    aspect: "landscape",
    type: "image",
    videoUrl: "",
    description: "Sacred moments from an elegant wedding ceremony",
    client: "Wedding Couple",
    date: "2023"
  },
  { 
    id: 3, 
    image: wedding3, 
    title: "Bride & Groom", 
    category: "Wedding", 
    aspect: "landscape",
    type: "image",
    videoUrl: "",
    description: "Romantic waterfront wedding portraits with city skyline",
    client: "Wedding Couple",
    date: "2024"
  },
  { 
    id: 4, 
    image: street1, 
    title: "Elegant Portrait", 
    category: "Street", 
    aspect: "portrait",
    type: "image",
    videoUrl: "",
    description: "Graceful portrait in architectural setting with natural light",
    client: "Fashion Photography",
    date: "2024"
  },
  { 
    id: 5, 
    image: street2, 
    title: "Traditional Spirit", 
    category: "Street", 
    aspect: "portrait",
    type: "image",
    videoUrl: "",
    description: "Capturing cultural heritage and character in natural settings",
    client: "Cultural Documentation",
    date: "2024"
  },
  { 
    id: 6, 
    image: street3, 
    title: "Black Elegance", 
    category: "Street", 
    aspect: "portrait",
    type: "image",
    videoUrl: "",
    description: "Stunning formal portrait showcasing elegance and style",
    client: "Fashion Magazine",
    date: "2024"
  },
  { 
    id: 7, 
    image: landscape, 
    title: "Waterfall Paradise", 
    category: "Landscape", 
    aspect: "landscape",
    type: "image",
    videoUrl: "",
    description: "Breathtaking natural waterfall surrounded by lush greenery",
    client: "Nature Magazine",
    date: "2024"
  },
  { 
    id: 8, 
    image: portrait, 
    title: "Professional Presence", 
    category: "Portrait", 
    aspect: "portrait",
    type: "image",
    videoUrl: "",
    description: "Professional portrait capturing confidence and charisma",
    client: "Corporate Photography",
    date: "2024"
  },
  { 
    id: 9, 
    image: showreel1, 
    title: "Cinematic Showreel", 
    category: "Wedding", 
    aspect: "landscape",
    type: "video",
    videoUrl: showreel,
    description: "A cinematic showreel blending wedding, street, and portrait photography.",
    client: "Personal Project",
    date: "2025"
  },
  { 
    id: 10, 
    image: commercial1, 
    title: "Cinematic Showreel", 
    category: "Commercial", 
    aspect: "landscape",
    type: "video",
    videoUrl: commercial,
    description: "A cinematic showreel on binance event.",
    client: "Commercial Project",
    date: "2025"
  },
  { 
    id: 11, 
    image: wedthumb2, 
    title: "Cinematic Showreel", 
    category: "Wedding", 
    aspect: "landscape",
    type: "video",
    videoUrl: weddingvid,
    description: "A cinematic blending wedding, street, and portrait photography.",
    client: "Commercial Project",
    date: "2025"
  },
  { 
    id: 12, 
    image: bd, 
    title: "Joyful Birthday", 
    category: "Birthday", 
    aspect: "landscape",
    type: "image",
    videoUrl: "",
    description: "Celebrating a lively birthday party filled with smiles and fun",
    client: "Birthday Family",
    date: "2024"
  },
  { 
    id: 13, 
    image: irrecha, 
    title: "Irrecha Celebration", 
    category: "Festival", 
    aspect: "square",
    type: "image",
    videoUrl: "",
    description: "Capturing the vibrant Irrecha festival, honoring Ethiopian culture and tradition",
    client: "Community Event",
    date: "2024"
  },
  { 
    id: 14, 
    image: wedding6, 
    title: "Eternal Love", 
    category: "Wedding", 
    aspect: "portrait",
    type: "image",
    videoUrl: "",
    description: "A beautiful wedding celebration capturing precious moments and emotions",
    client: "Wedding Couple",
    date: "2024"
  },
  { 
    id: 15, 
    image: wedding7, 
    title: "Wedding Ceremony", 
    category: "Wedding", 
    aspect: "landscape",
    type: "image",
    videoUrl: "",
    description: "Sacred moments from an elegant wedding ceremony",
    client: "Wedding Couple",
    date: "2023"
  },
  { 
    id: 16, 
    image: wedding8, 
    title: "Bride & Groom", 
    category: "Wedding", 
    aspect: "landscape",
    type: "image",
    videoUrl: "",
    description: "Romantic waterfront wedding portraits with city skyline",
    client: "Wedding Couple",
    date: "2024"
  },
];

const categories = ["All", "Portrait", "Street", "Wedding", "Birthday", "Festival",  "Commercial"];

const isExternalUrl = (url?: string) => !!url && /^https?:\/\//i.test(url || "");

const makeEmbedUrl = (url: string) => {
  // Convert youtube watch links to embed
  if (url.includes("youtube.com/watch")) return url.replace("watch?v=", "embed/");
  if (url.includes("youtu.be/")) return url.replace("youtu.be/", "www.youtube.com/embed/");
  // Vimeo or other direct embed links likely already ok
  return url;
};

const Portfolio = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const filteredItems = filter === "All"
    ? portfolioItems
    : portfolioItems.filter((it) => it.category === filter);

  return (
    <section id="Portfolio" className=" id = Portfolio py-24 px-6 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent to-foreground bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A curated selection of my finest work across various photographic disciplines
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category
                  ? "bg-accent text-accent-foreground shadow-amber"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95, rotateY: -8 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.06, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => {
                  if (item.type === "video") {
                    setActiveItem(item);
                  } else {
                    navigate(`/project/${item.id}`);
                  }
                }}
                className={`group relative overflow-hidden rounded-lg cursor-pointer shadow-xl ${
                  item.aspect === "portrait" ? "row-span-2" : item.aspect === "square" ? "aspect-square" : "aspect-video"
                }`}
              >
                {/* Thumbnail / Hover Preview */}
                <div className="relative w-full h-full">
                  {item.type === "video" && hoveredId === item.id ? (
                    // Hover preview: muted autoplay
                    <video
                      src={item.videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}

                  {/* Cinematic gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none" />

                  {/* Play button / Icon */}
                  {item.type === "video" && (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: hoveredId === item.id ? 1.05 : 0.9, opacity: hoveredId === item.id ? 1 : 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      <div className="rounded-full bg-black/40 p-4 backdrop-blur-sm shadow-2xl ring-1 ring-white/10">
                        <div className="relative">
                          <div className="absolute -inset-2 rounded-full blur-xl opacity-30 bg-gradient-to-r from-accent to-foreground/60" />
                          <Play className="w-8 h-8 text-white relative z-10" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Bottom overlay content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute bottom-0 left-0 right-0 p-6"
                >
                  <div className="bg-gradient-to-t from-black/60 via-black/30 to-transparent backdrop-blur-sm rounded-t-xl p-4">
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <p className="text-accent font-medium">{item.category}</p>
                    <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                  </div>
                </motion.div>

                {/* Focus ring */}
                <motion.div
                  className={`absolute inset-0 rounded-lg ring-2 ring-inset transition-all duration-300 ${hoveredId === item.id ? "ring-accent/40" : "ring-transparent"}`}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Cinematic Video Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Blurred background layer */}
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
            />

            {/* Modal content */}
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="relative z-10 w-full max-w-5xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* video / embed container */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10">
                {/* if external embed (YouTube/Vimeo) */}
                {activeItem.videoUrl && isExternalUrl(activeItem.videoUrl) ? (
                  <iframe
                    src={makeEmbedUrl(activeItem.videoUrl!)}
                    title={activeItem.title}
                    allow="autoplay; fullscreen; picture-in-picture"
                    className="w-full aspect-video"
                    frameBorder={0}
                  />
                ) : (
                  <video
                    key={activeItem.videoUrl}
                    src={activeItem.videoUrl}
                    controls
                    autoPlay
                    className="w-full aspect-video object-cover"
                  />
                )}

                {/* Cinematic overlay with title/description */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 }}
                  className="absolute left-6 bottom-6 right-6 pointer-events-none"
                >
                  <div className="bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-lg p-4 backdrop-blur-sm">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{activeItem.title}</h3>
                    <p className="text-muted-foreground mt-1">{activeItem.description}</p>
                  </div>
                </motion.div>
              </div>

              {/* Close button */}
              <button
                onClick={() => setActiveItem(null)}
                aria-label="Close video"
                className="absolute top-6 right-6 z-20 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
