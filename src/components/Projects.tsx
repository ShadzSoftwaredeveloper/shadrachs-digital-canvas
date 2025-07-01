import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Globe, Database } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "ECommerce Platform",
      description: "A full-featured e-commerce platform with admin dashboard, payment integration, and real-time inventory management. Built with modern tech stack for scalability.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      demoUrl: "#",
      githubUrl: "#",
      type: "web",
      featured: true
    },
    {
      title: "Task Management Mobile App",
      description: "Cross-platform mobile application for team collaboration and project management with real-time updates and offline capabilities.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      tech: ["React Native", "Firebase", "Redux", "Expo"],
      demoUrl: "#",
      githubUrl: "#",
      type: "mobile",
      featured: true
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Advanced analytics platform with machine learning insights, real-time data visualization, and customizable reporting features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tech: ["Next.js", "Python", "TensorFlow", "D3.js", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#",
      type: "web",
      featured: true
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive healthcare management platform for clinics with patient records, appointment scheduling, and billing integration.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      tech: ["Vue.js", "Django", "PostgreSQL", "Docker"],
      demoUrl: "#",
      githubUrl: "#",
      type: "web",
      featured: false
    },
    {
      title: "Real Estate Mobile App",
      description: "Mobile application for property listings with advanced search, virtual tours, and mortgage calculator features.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      tech: ["Flutter", "Firebase", "Google Maps API", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
      type: "mobile",
      featured: false
    },
    {
      title: "Cryptocurrency Trading Bot",
      description: "Automated trading system with custom algorithms, risk management, and real-time market data analysis.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      tech: ["Python", "FastAPI", "Redis", "WebSocket", "Binance API"],
      demoUrl: "#",
      githubUrl: "#",
      type: "api",
      featured: false
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'mobile': return <Smartphone className="w-4 h-4" />;
      case 'api': return <Database className="w-4 h-4" />;
      default: return <Globe className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'mobile': return 'bg-accent/10 text-accent border-accent/30';
      case 'api': return 'bg-success/10 text-success border-success/30';
      default: return 'bg-primary/10 text-primary border-primary/30';
    }
  };

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, demonstrating expertise across different 
            platforms and technologies. Each project tells a story of problem-solving and innovation.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className="group overflow-hidden bg-card border-border hover:border-primary hover:shadow-elegant transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Project Type Badge */}
                <Badge 
                  className={`absolute top-4 left-4 ${getTypeColor(project.type)} border`}
                >
                  {getTypeIcon(project.type)}
                  <span className="ml-1 capitalize">{project.type}</span>
                </Badge>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-secondary/50 text-secondary-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-primary hover:shadow-glow"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-border hover:border-primary"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center text-foreground">More Projects</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <Card 
                key={project.title}
                className="p-6 bg-card border-border hover:border-primary hover:shadow-glow transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h4>
                    <Badge className={`${getTypeColor(project.type)} border text-xs`}>
                      {getTypeIcon(project.type)}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-secondary/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-secondary/30">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="p-2 h-8">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2 h-8">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
