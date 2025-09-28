import { Monitor, Smartphone, Palette, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks like React, Next.js, and Node.js. Scalable, performant, and SEO-optimized solutions.",
      features: ["React & Next.js", "Full-Stack Development", "API Integration", "Performance Optimization"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android. Built with React Native and Flutter for maximum reach.",
      features: ["React Native", "Flutter", "iOS & Android", "Cross-Platform"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality. Creating intuitive interfaces that drive engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up in-view">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Core Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-elevated group fade-in-up in-view"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border">
                <button className="text-primary hover:text-primary-glow transition-colors duration-300 font-semibold group-hover:translate-x-1 transform transition-transform">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;