import { Globe, Settings, LineChart } from "lucide-react";
import { Card } from "./ui/card";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Full-Stack Web Development",
      description:
        "Building responsive, scalable web applications from frontend to backend. Expertise in React.js, Node.js, and modern web technologies with focus on user experience and performance optimization.",
      features: ["Responsive Web Apps", "Database Management", "User-Focused Solutions"],
    },
    {
      icon: Settings,
      title: "Technical Consulting & Optimization",
      description:
        "Providing expert technical guidance and troubleshooting for complex systems. Specializing in workflow optimization, system architecture, and performance improvements.",
      features: ["System Troubleshooting", "Workflow Optimization", "Technical Architecture"],
    },
    {
      icon: LineChart,
      title: "Data Analytics & Insights",
      description:
        "Leveraging data to drive informed decision-making. Expertise in SQL optimization, data modeling, and creating analytics solutions that provide actionable business insights.",
      features: ["SQL Query Optimization", "Data Modeling", "Business Intelligence"],
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-sm font-semibold text-secondary px-4 py-2 rounded-full bg-secondary/10 inline-block mb-4">
              WHAT I OFFER
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Services I <span className="text-gradient">Provide</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to your technical needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 shadow-soft hover-lift border-0 bg-card animate-fade-in group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-6">
                  <div className="inline-flex p-4 rounded-2xl bg-primary/10 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary transition-all">
                    <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
