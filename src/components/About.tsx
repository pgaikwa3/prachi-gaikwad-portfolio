import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Card } from "./ui/card";

const About = () => {
  const education = [
    {
      degree: "Master of Science, Computer Science",
      institution: "Binghamton University",
      date: "Dec 2024",
      icon: GraduationCap,
    },
    {
      degree: "Bachelor of Engineering, Computer Engineering",
      institution: "University of Pune",
      date: "May 2019",
      icon: Award,
    },
    {
      degree: "Diploma, Information Technology",
      institution: "Government Polytechnic Pune",
      date: "May 2016",
      icon: BookOpen,
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating efficient, scalable solutions and continuously learning
              new technologies to solve complex problems.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
            <div className="grid gap-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="p-6 shadow-soft hover-lift border-0 bg-card animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <edu.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-1">{edu.degree}</h4>
                      <p className="text-muted-foreground mb-1">{edu.institution}</p>
                      <p className="text-sm text-secondary font-medium">{edu.date}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
