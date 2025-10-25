import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <div id="work">
        <Portfolio />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-6 text-center">
        <p className="text-muted-foreground">
          © 2025 Elias Eshetu Photography. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
