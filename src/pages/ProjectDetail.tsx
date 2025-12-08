import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Instagram, Linkedin, Share2, Calendar, User, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import bd from "@/assets/bd.jpg";
import irrecha from "@/assets/irrecha.jpg";

const projectData: Record<string, any> = {
  "1": {
    id: 1,
    title: "Eternal Love",
    category: "Wedding",
    image: wedding1,
    client: "Wedding Couple",
    date: "2024",
    tools: ["Canon EOS R5", "24-70mm f/2.8", "Natural Light", "Lightroom", "Photoshop"],
    description: "A beautiful wedding celebration capturing precious moments and emotions. This project showcases the intimate moments, joy, and love shared between the couple and their families on their special day.",
    goals: "Capture authentic emotional moments and create timeless memories for the couple while documenting the wedding ceremony and celebration with attention to venue and decor details.",
    gallery: [wedding1, wedding2, wedding3],
    behindTheScenes: wedding2,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
  },
  "2": {
    id: 2,
    title: "Wedding Ceremony",
    category: "Wedding",
    image: wedding2,
    client: "Wedding Couple",
    date: "2023",
    tools: ["Canon EOS R5", "85mm f/1.4", "Flash", "Lightroom", "Premiere Pro"],
    description: "Sacred moments from an elegant wedding ceremony captured with attention to every detail. The soft lighting and careful composition create a serene atmosphere that reflects the significance of the day.",
    goals: "Document the ceremony proceedings and capture candid reactions to create a visual narrative of the celebration with focus on the couple's special moments.",
    gallery: [wedding2, wedding3, wedding1],
    behindTheScenes: wedding3,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
  },
  "3": {
    id: 3,
    title: "Bride & Groom",
    category: "Wedding",
    image: wedding3,
    client: "Wedding Couple",
    date: "2024",
    tools: ["Canon EOS R5", "70-200mm f/2.8", "Natural Light", "Lightroom"],
    description: "Romantic waterfront wedding portraits with city skyline backdrop. These images showcase the elegance of the couple against stunning urban and natural landscapes.",
    goals: "Create romantic couple portraits utilizing the waterfront location and city skyline backdrop to deliver magazine-quality images.",
    gallery: [wedding3, wedding1, wedding2],
    behindTheScenes: wedding1,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  "4": {
    id: 4,
    title: "Elegant Portrait",
    category: "Street",
    image: street1,
    client: "Fashion Photography",
    date: "2024",
    tools: ["Canon EOS R5", "50mm f/1.2", "Natural Light", "Lightroom"],
    description: "Graceful portrait captured in an architectural setting with beautiful natural light. The elegant subject and classical architecture create a timeless composition.",
    goals: "Showcase elegant fashion photography utilizing architectural elements to create depth with natural light while capturing grace and poise.",
    gallery: [street1, street2, street3],
    behindTheScenes: street2,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
  },
  "5": {
    id: 5,
    title: "Traditional Spirit",
    category: "Street",
    image: street2,
    client: "Cultural Documentation",
    date: "2024",
    tools: ["Canon EOS R5", "85mm f/1.4", "Natural Light", "Lightroom"],
    description: "Capturing cultural heritage and character in natural settings. This portrait celebrates tradition while showcasing genuine personality and warmth.",
    goals: "Document cultural heritage and capture authentic personality while creating respectful portraiture that celebrates traditional attire.",
    gallery: [street2, street3, street1],
    behindTheScenes: street3,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
  },
  "6": {
    id: 6,
    title: "Black Elegance",
    category: "Street",
    image: street3,
    client: "Fashion Magazine",
    date: "2024",
    tools: ["Canon EOS R5", "70-200mm f/2.8", "Natural Light", "Lightroom", "Photoshop"],
    description: "Stunning formal portrait showcasing elegance and style. The dramatic black gown and architectural setting create a powerful and memorable image.",
    goals: "Create high-fashion editorial images showcasing dramatic styling and architectural elements to deliver magazine-quality portraits.",
    gallery: [street3, street1, street2],
    behindTheScenes: street1,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  
  "8": {
    id: 8,
    title: "Professional Presence",
    category: "Portrait",
    image: portrait,
    client: "Corporate Photography",
    date: "2024",
    tools: ["Canon EOS R5", "85mm f/1.4", "Studio Lighting", "Lightroom", "Photoshop"],
    description: "Professional portrait capturing confidence and charisma. The warm lighting and professional styling create an image that commands attention and respect.",
    goals: "Create professional headshots that capture personality and confidence while delivering corporate-quality images with professional styling.",
    gallery: [portrait],
    behindTheScenes: portrait,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
  },
   "12": { 
      id: 12,  
      title: "Joyful Birthday", 
      category: "Birthday",
      image: bd, 
      client: "Fashion Magazine",
      date: "2024",
      tools: ["Canon EOS R5", "85mm f/1.4", "Studio Lighting", "Lightroom", "Photoshop"],
      description: "Celebrating a lively birthday party filled with smiles and fun",
      gallery: [street3, street1, street2],
      behindTheScenes: street1,
      videoUrl: "",
      
    },
   "13": { 
      id: 13,  
      title: "Irrecha Celebration",
      category: "Festival",
      image: irrecha,
      client: "Fashion Magazine",
      date: "2024",
      tools: ["Canon EOS R5", "85mm f/1.4", "Studio Lighting", "Lightroom", "Photoshop"],
      description: "Capturing the vibrant Irrecha festival, honoring Ethiopian culture and tradition",
      gallery: [street3, street1, street2],
      behindTheScenes: street2,
      videoUrl: "",
      
    },
    "14": {
    id: 14,
    title: "Eternal Love",
    category: "Wedding",
    image: wedding6,
    client: "Wedding Couple",
    date: "2024",
    tools: ["Canon EOS R5", "24-70mm f/2.8", "Natural Light", "Lightroom", "Photoshop"],
    description: "A beautiful wedding celebration capturing precious moments and emotions. This project showcases the intimate moments, joy, and love shared between the couple and their families on their special day.",
    goals: "Capture authentic emotional moments and create timeless memories for the couple while documenting the wedding ceremony and celebration with attention to venue and decor details.",
    gallery: [wedding6, wedding7, wedding8],
    behindTheScenes: wedding7,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
  },
  "15": {
    id: 15,
    title: "Wedding Ceremony",
    category: "Wedding",
    image: wedding7,
    client: "Wedding Couple",
    date: "2023",
    tools: ["Canon EOS R5", "85mm f/1.4", "Flash", "Lightroom", "Premiere Pro"],
    description: "Sacred moments from an elegant wedding ceremony captured with attention to every detail. The soft lighting and careful composition create a serene atmosphere that reflects the significance of the day.",
    goals: "Document the ceremony proceedings and capture candid reactions to create a visual narrative of the celebration with focus on the couple's special moments.",
    gallery: [wedding7, wedding8, wedding6],
    behindTheScenes: wedding8,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
  },
  "16": {
    id: 16,
    title: "Bride & Groom",
    category: "Wedding",
    image: wedding8,
    client: "Wedding Couple",
    date: "2024",
    tools: ["Canon EOS R5", "70-200mm f/2.8", "Natural Light", "Lightroom"],
    description: "Romantic waterfront wedding portraits with city skyline backdrop. These images showcase the elegance of the couple against stunning urban and natural landscapes.",
    goals: "Create romantic couple portraits utilizing the waterfront location and city skyline backdrop to deliver magazine-quality images.",
    gallery: [wedding8, wedding6, wedding7],
    behindTheScenes: wedding6,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData[id || "1"];

  const videoRef = useRef<HTMLVideoElement | null>(null);

  /** REAL VIDEO LAZY LOADING */
  useEffect(() => {
    if (!videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const video = videoRef.current!;
            const realSrc = video.dataset.src;
            if (realSrc) {
              video.src = realSrc;
              video.load();
            }
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(videoRef.current);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Project not found</p>
      </div>
    );
  }

  /** SHARE HANDLER */
  const shareProject = () => {
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: project.description,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-4 left-4 z-50"
      >
        <Button
          onClick={() => navigate("/")}
          variant="outline"
          className="backdrop-blur-lg bg-card/80 border-accent/30 hover:bg-accent/10 px-4 py-2"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-[100svh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        <div className="relative z-10 h-full flex items-end justify-center pb-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full text-accent text-sm font-medium mb-4"
            >
              {project.category}
            </motion.span>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
              {project.title}
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-card">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <InfoCard icon={<User className="w-8 h-8 text-accent" />} label="Client" value={project.client} />
            <InfoCard icon={<Calendar className="w-8 h-8 text-accent" />} label="Date" value={project.date} />
            <InfoCard icon={<Briefcase className="w-8 h-8 text-accent" />} label="Category" value={project.category} />
          </motion.div>

          {/* Goals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Project Goals</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {project.goals}
            </p>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Tools Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.tools?.map((tool, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Project Gallery
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery?.map((image, index) => (
              <motion.div
                key={image + index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
              >
                <img
                  src={image}
                  loading="lazy"
                  alt={`Gallery item ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind The Scenes */}
      <section className="py-24 px-6 bg-gradient-to-b from-card to-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Behind the Scenes</h2>
            <p className="text-muted-foreground text-lg">
              A glimpse into the creative process
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-8 items-center mb-12"
          >
            {/* LAZY VIDEO */}
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <video
                ref={videoRef}
                data-src={project.videoUrl}
                preload="none"
                controls
                poster={project.behindTheScenes}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img
                src={project.behindTheScenes}
                loading="lazy"
                alt="Behind the scenes"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Share */}
      <section className="py-16 px-6 bg-card border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Share This Project</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              onClick={shareProject}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>

            <Button
              onClick={() => window.open("https://instagram.com", "_blank")}
              variant="outline"
              className="border-accent/30 hover:bg-accent/10"
            >
              <Instagram className="w-4 h-4 mr-2" />
              Instagram
            </Button>

            <Button
              onClick={() => window.open("https://linkedin.com", "_blank")}
              variant="outline"
              className="border-accent/30 hover:bg-accent/10"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

/* Reusable Info Card */
const InfoCard = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border">
    {icon}
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  </div>
);

export default ProjectDetail;
