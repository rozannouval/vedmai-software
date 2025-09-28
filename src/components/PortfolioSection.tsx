import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import ecommerceImage from "@/assets/project-ecommerce.jpg";
import saasImage from "@/assets/project-saas.jpg";

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform A",
      description: "A comprehensive e-commerce solution with advanced inventory management, payment processing, and analytics dashboard. Built for scalability and performance.",
      image: ecommerceImage,
      technologies: ["Next.js", "Tailwind CSS", "Stripe", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Web Development"
    },
    {
      id: 2,
      title: "SaaS Dashboard B",
      description: "A sophisticated SaaS platform featuring real-time analytics, user management, subscription handling, and comprehensive reporting tools.",
      image: saasImage,
      technologies: ["React", "Node.js", "Firebase", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full-Stack Development"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up in-view">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Featured Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our latest projects that demonstrate our expertise in creating innovative digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="card-elevated group fade-in-up in-view"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button size="sm" className="btn-hero-primary">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-card border border-border px-3 py-1 rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button className="btn-hero-secondary">
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;