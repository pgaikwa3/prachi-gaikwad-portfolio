import { Award, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const Certifications = () => {
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

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 shadow-soft hover-lift border-0 bg-card animate-fade-in">
              <div className="flex items-start gap-6">
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary to-primary/80">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">
                    Professional Certifications & Research
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    View my complete collection of professional certifications, academic achievements, 
                    and published research papers demonstrating continuous learning and contributions 
                    to the field of computer science.
                  </p>
                  <Button
                    variant="outline"
                    className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open("https://github.com/PrachiGaikwad1", "_blank")}
                  >
                    View Certifications & Publications
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
