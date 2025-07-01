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
      case 'mobile': return <Smartphone size={16} />;
      case 'api': return <Database size={16} />;
      default: return <Globe size={16} />;
    }
  };

  const getTypeBadgeStyle = (type: string) => {
    switch (type) {
      case 'mobile': 
        return {
          background: 'hsla(186, 100%, 64%, 0.1)',
          color: 'var(--accent)',
          borderColor: 'hsla(186, 100%, 64%, 0.3)'
        };
      case 'api': 
        return {
          background: 'hsla(142, 76%, 56%, 0.1)',
          color: 'var(--success)',
          borderColor: 'hsla(142, 76%, 56%, 0.3)'
        };
      default: 
        return {
          background: 'hsla(237, 84%, 64%, 0.1)',
          color: 'var(--primary)',
          borderColor: 'hsla(237, 84%, 64%, 0.3)'
        };
    }
  };

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section" style={{ padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-accent-text">
            Featured Projects
          </h2>
          <p className="text-lg" style={{ 
            color: 'var(--muted-foreground)', 
            maxWidth: '48rem', 
            margin: '0 auto',
            lineHeight: 1.6 
          }}>
            A showcase of my recent work, demonstrating expertise across different 
            platforms and technologies. Each project tells a story of problem-solving and innovation.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', marginBottom: '4rem' }}>
          {featuredProjects.map((project, index) => (
            <div 
              key={project.title}
              className="card hover-elegant"
              style={{
                background: 'var(--card)',
                transition: 'var(--transition-smooth)',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '12rem',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }}
                />
                
                <span 
                  className="badge"
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    border: '1px solid',
                    ...getTypeBadgeStyle(project.type)
                  }}
                >
                  {getTypeIcon(project.type)}
                  <span style={{ textTransform: 'capitalize' }}>{project.type}</span>
                </span>
              </div>
              
              <div className="p-6" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 className="text-xl font-bold" style={{ 
                  color: 'var(--foreground)',
                  transition: 'color 0.3s ease'
                }}>
                  {project.title}
                </h3>
                
                <p className="text-sm" style={{ 
                  color: 'var(--muted-foreground)', 
                  lineHeight: 1.6 
                }}>
                  {project.description}
                </p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="badge badge-secondary text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.5rem' }}>
                  <button className="btn btn-primary btn-sm" style={{ flex: 1 }}>
                    <ExternalLink size={16} style={{ marginRight: '0.5rem' }} />
                    Live Demo
                  </button>
                  <button className="btn btn-outline btn-sm" style={{ padding: '0.5rem' }}>
                    <Github size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <h3 className="text-3xl font-bold text-center" style={{ color: 'var(--foreground)' }}>
            More Projects
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <div 
                key={project.title}
                className="card p-6 hover-glow"
                style={{
                  background: 'var(--card)',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between' }}>
                    <h4 className="font-semibold" style={{ 
                      color: 'var(--foreground)',
                      transition: 'color 0.3s ease'
                    }}>
                      {project.title}
                    </h4>
                    <span 
                      className="badge text-xs"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid',
                        ...getTypeBadgeStyle(project.type)
                      }}
                    >
                      {getTypeIcon(project.type)}
                    </span>
                  </div>
                  
                  <p className="text-sm" style={{ 
                    color: 'var(--muted-foreground)', 
                    lineHeight: 1.6 
                  }}>
                    {project.description}
                  </p>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                    {project.tech.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className="badge text-xs"
                        style={{
                          background: 'hsla(220, 16%, 16%, 0.3)',
                          color: 'var(--secondary-foreground)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span 
                        className="badge text-xs"
                        style={{
                          background: 'hsla(220, 16%, 16%, 0.3)',
                          color: 'var(--secondary-foreground)'
                        }}
                      >
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button 
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: '0.5rem',
                        borderRadius: 'var(--radius)',
                        color: 'var(--muted-foreground)',
                        cursor: 'pointer',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--muted-foreground)'}
                    >
                      <ExternalLink size={16} />
                    </button>
                    <button 
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: '0.5rem',
                        borderRadius: 'var(--radius)',
                        color: 'var(--muted-foreground)',
                        cursor: 'pointer',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--muted-foreground)'}
                    >
                      <Github size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
