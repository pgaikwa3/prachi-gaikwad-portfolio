import { Award, Shield, BookOpen, ExternalLink, Container } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const Certifications = () => {
  const certifications = [
    {
      icon: Award,
      title: "Data Analytics Certification",
      description: "Professional certification in data analytics and visualization",
      link: "#",
      buttonText: "View Certificate",
    },
    {
      icon: Shield,
      title: "Secure Code Warrior",
      description: "Expertise in secure coding practices and application security",
      link: "#",
      buttonText: "View Certificate",
    },
    {
      icon: BookOpen,
      title: "Research Paper Published",
      description: "Contributing to academic research in computer science",
      link: "#",
      buttonText: "View Publication",
    },
    {
      icon: Container,
      title: "Docker Certification",
      description: "Expertise in containerization and Docker technologies",
      link: "#",
      buttonText: "View Certificate",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Certifications & <span className="text-gradient">Publications</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional certifications and research contributions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="p-6 shadow-soft hover-lift border-0 bg-card animate-fade-in transition-all duration-300 hover:shadow-glow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary to-secondary mb-4">
                    <cert.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                    {cert.description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-auto"
                  >
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      {cert.buttonText}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
