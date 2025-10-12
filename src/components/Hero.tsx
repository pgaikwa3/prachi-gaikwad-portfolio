import { ArrowRight, Download } from "lucide-react";
import { Button } from "./ui/button";
import profilePicture from "@/assets/profile-picture.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-secondary px-4 py-2 rounded-full bg-secondary/10">
                Welcome to my portfolio
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Hello, I'm <br />
              <span className="text-gradient">Prachi Gaikwad</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground/80">
              Software Engineer | Full-Stack Developer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              I am a software engineer with a Master's in Computer Science and over three years
              of experience building scalable web applications and supporting technical operations.
              I specialize in full-stack development, database management, and troubleshooting
              complex systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-elegant"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Download className="mr-2 h-5 w-5" /> Download CV
              </Button>
            </div>
          </div>

          {/* Profile Picture with Geometric Frame */}
          <div className="relative animate-fade-in">
            <div className="relative">
              {/* Background Geometric Shapes */}
              <div className="absolute -top-8 -left-8 w-72 h-72 bg-primary/10 rounded-3xl rotate-6 -z-10"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary/10 rounded-3xl -rotate-12 -z-10"></div>
              
              {/* Profile Image Container */}
              <div className="relative overflow-hidden rounded-3xl shadow-elegant hover-lift">
                <div className="aspect-square max-w-md mx-auto skewed-frame bg-gradient-to-br from-primary to-secondary p-1">
                  <div className="w-full h-full bg-card rounded-3xl overflow-hidden">
                    <img
                      src={profilePicture}
                      alt="Prachi Gaikwad - Software Engineer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-2xl rotate-45 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/20 rounded-full animate-pulse delay-75"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
