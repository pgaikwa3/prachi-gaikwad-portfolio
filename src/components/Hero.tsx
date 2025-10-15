import { ArrowRight, Download, Sparkles, Code2, Zap } from "lucide-react";
import { Button } from "./ui/button";
import profilePicture from "@/assets/profile-picture.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 animate-slide-up">
              <div className="glass-card px-5 py-2.5 rounded-full border-primary/20 shadow-glow">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                  <span className="text-sm font-semibold text-gradient">
                    Welcome to my portfolio
                  </span>
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                Hello, I'm <br />
                <span className="text-gradient inline-flex items-center gap-3">
                  Prachi Gaikwad
                  <Code2 className="w-12 h-12 md:w-16 md:h-16 text-primary animate-glow" />
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90 flex items-center gap-3 flex-wrap">
                <Zap className="w-7 h-7 text-accent" />
                Software Engineer | Full-Stack Developer
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl animate-slide-up" style={{ animationDelay: '0.3s' }}>
              I am a software engineer with a Master's in Computer Science and over three years
              of experience building scalable web applications and supporting technical operations.
              I specialize in full-stack development, database management, and troubleshooting
              complex systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="relative group overflow-hidden bg-gradient-to-r from-primary to-secondary hover:shadow-glow transition-all duration-300 hover:scale-105"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="relative z-10 flex items-center">
                  Get In Touch 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-elegant transition-all duration-300 hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-pulse" /> 
                Download CV
              </Button>
            </div>
          </div>

          {/* Profile Picture with Modern Frame */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Animated Background Shapes */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 rounded-3xl blur-2xl animate-glow"></div>
              <div className="absolute -top-8 -left-8 w-72 h-72 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl rotate-6 -z-10 animate-float"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-secondary/20 to-transparent rounded-3xl -rotate-12 -z-10 animate-float" style={{ animationDelay: '1s' }}></div>
              
              {/* Main Profile Container */}
              <div className="relative group">
                {/* Gradient Border Effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-glow"></div>
                
                {/* Profile Image Container */}
                <div className="relative overflow-hidden rounded-3xl bg-card">
                  <div className="aspect-square max-w-[240px] mx-auto skewed-frame bg-gradient-to-br from-primary to-secondary p-1.5">
                    <div className="w-full h-full bg-card rounded-3xl overflow-hidden">
                      <img 
                        src={profilePicture} 
                        alt="Prachi Gaikwad - Software Engineer" 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                  </div>
                  
                  {/* Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-accent to-accent/50 rounded-2xl rotate-45 animate-float shadow-glow backdrop-blur-sm" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-primary to-primary/50 rounded-full animate-float shadow-glow backdrop-blur-sm" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-1/4 -right-4 w-16 h-16 bg-gradient-to-br from-secondary to-secondary/50 rounded-xl rotate-12 animate-float shadow-glow backdrop-blur-sm" style={{ animationDelay: '2.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;