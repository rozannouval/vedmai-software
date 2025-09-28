import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-background to-[hsl(215.4_16.3%_8.9%)] pt-20"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 fade-in-up in-view">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Crafting{" "}
                <span className="text-gradient">Digital Excellence</span>,
                Building Future-Proof Solutions
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Vedmai Software transforms your innovative ideas into
                high-performance web and mobile applications with cutting-edge
                technology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero-primary group">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button className="btn-hero-secondary group">
                <Play className="mr-2 h-5 w-5" />
                View Our Work
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Delivered
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">
                  Client Satisfaction
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative fade-in-up in-view">
            <div className="hero-float">
              <img
                src={heroImage}
                alt="Digital Technology Innovation"
                className="w-full h-auto rounded-2xl shadow-[var(--shadow-elegant)]"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-primary-glow rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-primary-glow to-primary rounded-full opacity-30 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
