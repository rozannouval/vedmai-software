import { CheckCircle, Users, Target, Zap } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const AboutSection = () => {
  const highlights = [
    { icon: Users, text: "Expert development team" },
    { icon: Target, text: "Client-focused approach" },
    { icon: Zap, text: "Cutting-edge technology" },
    { icon: CheckCircle, text: "Proven track record" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-background to-[hsl(215.4_16.3%_8.9%)]"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image */}
          <div className="relative fade-in-up in-view">
            <img
              src={aboutImage}
              alt="Vedmai Software Team"
              className="w-full h-auto rounded-2xl shadow-[var(--shadow-elegant)]"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-primary to-primary-glow p-6 rounded-2xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-sm text-white opacity-90">Years</div>
              </div>
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="space-y-8 fade-in-up in-view">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Your Trusted{" "}
                <span className="text-gradient">Digital Partner</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                At Vedmai Software, we believe in the power of technology to
                transform businesses. Our mission is to help companies navigate
                their digital transformation journey through innovative,
                scalable, and reliable software solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a team of experienced developers, designers, and
                strategists, we deliver custom solutions that not only meet your
                current needs but also scale with your growing business.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-xl bg-card/50 border border-border/50"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center">
                    <item.icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    50+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    25+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Happy Clients
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    99%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Success Rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
