import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Play, X } from "lucide-react";
import LazyMedia from "@/components/LazyMedia";


import wedding1 from "@/assets/wedding_5.jpg";
import wedding2 from "@/assets/wedding-2.jpg";
import wedding3 from "@/assets/wedding-3.jpg";
import wedding6 from "@/assets/wedding_6.avif";
import wedding7 from "@/assets/wedding_7.jpg";
import wedding8 from "@/assets/wedding_8.jpg";
import street1 from "@/assets/street-1.jpg";
import street2 from "@/assets/street-2.jpg";
import street3 from "@/assets/street-3.jpg";
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

const categories = [
  "All",
  "Portrait",
  "Street",
  "Wedding",
  "Birthday",
  "Festival",
  "Commercial",
];

// External URL check
const isExternalUrl = (url?: string) => !!url && /^https?:\/\//i.test(url);

// Convert YouTube/Vimeo to embed
const makeEmbedUrl = (url: string) => {
  if (url.includes("youtube.com/watch"))
    return url.replace("watch?v=", "embed/");
  if (url.includes("youtu.be/"))
    return url.replace("youtu.be/", "www.youtube.com/embed/");
  return url;
};

const Portfolio = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeItem, setActiveItem] = useState<any | null>(null);

  const filteredItems =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((it) => it.category === filter);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-accent to-foreground bg-clip-text text-transparent">
            Portfolio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my finest work across different photographic
            disciplines.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === cat
                  ? "bg-accent text-accent-foreground shadow-lg"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                className={`group relative rounded-lg overflow-hidden cursor-pointer shadow-xl ${
                  item.aspect === "portrait"
                    ? "row-span-2"
                    : item.aspect === "square"
                    ? "aspect-square"
                    : "aspect-video"
                }`}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() =>
                  item.type === "video"
                    ? setActiveItem(item)
                    : navigate(`/project/${item.id}`)
                }
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                {/* Optimized Image/Video with poster */}
                <LazyMedia
                  src={item.type === "video" ? item.videoUrl : item.image}
                  type={item.type}
                  poster={item.image}
                  autoPlayOnHover={item.type === "video"}
                  className="w-full h-full"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

                {/* Play icon for videos */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/40 p-4 rounded-full backdrop-blur-md">
                      <Play className="text-white w-8 h-8" />
                    </div>
                  </div>
                )}

                {/* Hover Title */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{
                    opacity: hoveredId === item.id ? 1 : 0,
                    y: hoveredId === item.id ? 0 : 15,
                  }}
                  className="absolute bottom-0 left-0 right-0 p-6"
                >
                  <div className="bg-black/60 p-4 rounded-lg backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-accent">{item.category}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
              onClick={() => setActiveItem(null)}
            />

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="relative max-w-5xl w-full mx-auto"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
                {isExternalUrl(activeItem.videoUrl) ? (
                  <iframe
                    src={makeEmbedUrl(activeItem.videoUrl)}
                    className="w-full aspect-video"
                    loading="lazy"
                    allow="autoplay; fullscreen"
                  />
                ) : (
                  <video
                    src={activeItem.videoUrl}
                    controls
                    autoPlay
                    preload="none"
                    poster={activeItem.image}
                    className="w-full aspect-video object-cover"
                  />
                )}
              </div>

              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 bg-black/50 p-2 rounded-full"
              >
                <X className="text-white w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
