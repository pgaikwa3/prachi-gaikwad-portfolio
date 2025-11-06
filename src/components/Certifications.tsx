import { Award, Database, BookOpen, ExternalLink, Container } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const Certifications = () => {
  const certifications = [
    {
      icon: Award,
      title: "Data Analytics Certification",
      description: "Professional certification in data analytics and visualization",
      link: "https://github.com/PrachiGaikwad1/Certifications/blob/main/CertificateOfCompletion_Career%20Essentials%20in%20Data%20Analysis%20by%20Microsoft%20and%20LinkedIn.pdf",
      buttonText: "View Certificate",
    },
    {
      icon: Database,
      title: "SQL Certification",
      description: "Expertise in database management and SQL query optimization",
      link: "https://github.com/PrachiGaikwad1/Certifications/blob/main/CertificateOfCompletion_SQL%20for%20Healthcare%20Professionals.pdf",
      buttonText: "View Certificate",
    },
    {
      icon: Container,
      title: "Docker Certification",
      description: "Expertise in containerization and Docker technologies",
      link: "https://github.com/PrachiGaikwad1/Certifications/blob/main/CertificateOfCompletion_Docker%20Foundations%20Professional%20Certificate.pdf",
      buttonText: "View Certificate",
    },
    {
      icon: BookOpen,
      title: "Research Paper Published",
      description: "Contributing to academic research in computer science",
      link: "https://github.com/PrachiGaikwad1/Paper-Publications/blob/main/pothole-detection-and-notification-using-accelerometer-and-gyroscope/COETPCOMPBE32.pdf",
      buttonText: "View Publication",
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

          <div className="grid md:grid-cols-4 gap-6">
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
