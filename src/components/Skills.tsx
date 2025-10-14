import { Code2, Database, Server, GitBranch, BarChart3 } from "lucide-react";
import { Card } from "./ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Code2,
      skills: ["React.js", "JavaScript", "HTML", "CSS", "Responsive Design"],
      color: "from-primary to-primary/80",
    },
    {
      category: "Backend Development",
      icon: Server,
      skills: ["Node.js", "Python", "Java", "REST APIs", "Flask"],
      color: "from-secondary to-secondary/80",
    },
    {
      category: "Database Management",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "SQL Optimization", "Data Modeling"],
      color: "from-accent to-accent/80",
    },
    {
      category: "DevOps & Tools",
      icon: GitBranch,
      skills: ["AWS", "CI/CD", "Jenkins", "Git", "Agile/Scrum"],
      color: "from-primary/80 to-secondary",
    },
    {
      category: "Data Analytics",
      icon: BarChart3,
      skills: ["Tableau", "PowerBI", "Excel", "ETL"],
      color: "from-accent/80 to-secondary/80",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Full-stack development and data analytics expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 shadow-soft hover-lift border-0 bg-card animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-muted text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
