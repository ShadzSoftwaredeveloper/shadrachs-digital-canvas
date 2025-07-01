import { Code, Lightbulb, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and scalable code with best practices"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Bringing creative solutions to complex problems with modern approaches"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed, user experience, and reliability"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams and communicating technical concepts clearly"
    }
  ];

  return (
    <section id="about" className="section" style={{ padding: '5rem 1.5rem' }}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-accent-text">
            About Me
          </h2>
          <p className="text-lg" style={{ 
            color: 'var(--muted-foreground)', 
            maxWidth: '48rem', 
            margin: '0 auto',
            lineHeight: 1.6 
          }}>
            Passionate full-stack developer with expertise in modern web technologies. 
            I love building applications that make a difference and solving complex challenges 
            with elegant, user-centered solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 mb-16" style={{ gap: '3rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 className="text-3xl font-bold" style={{ color: 'var(--foreground)' }}>
              Building the Future, One Line at a Time
            </h3>
            <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.6 }}>
              With a strong foundation in both frontend and backend development, 
              I specialize in creating robust, scalable applications using cutting-edge 
              technologies. My journey in software development has been driven by 
              curiosity and a commitment to continuous learning.
            </p>
            <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.6 }}>
              I believe in writing code that not only works but also tells a story - 
              clean, documented, and maintainable. Whether it's crafting pixel-perfect 
              user interfaces or architecting efficient backend systems, I approach 
              every project with attention to detail and a focus on user experience.
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            <div className="card p-8 hover-elegant" style={{
              background: 'var(--gradient-subtle)',
              transition: 'var(--transition-smooth)'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div 
                    className="animate-glow-pulse"
                    style={{
                      width: '1rem',
                      height: '1rem',
                      background: 'var(--success)',
                      borderRadius: '50%'
                    }}
                  />
                  <span style={{ color: 'var(--success)', fontWeight: 500 }}>
                    Available for new opportunities
                  </span>
                </div>
                
                <div>
                  <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Based in</p>
                  <p className="font-semibold" style={{ color: 'var(--foreground)' }}>Uganda, East Africa</p>
                </div>
                
                <div>
                  <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Experience</p>
                  <p className="font-semibold" style={{ color: 'var(--foreground)' }}>3+ Years in Development</p>
                </div>
                
                <div>
                  <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Focus Areas</p>
                  <p className="font-semibold" style={{ color: 'var(--foreground)' }}>Web Development, Mobile Apps, API Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight, index) => (
            <div 
              key={highlight.title}
              className="card p-6 hover-glow"
              style={{
                background: 'var(--card)',
                transition: 'var(--transition-smooth)',
                textAlign: 'center'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div 
                  className="hover-glow"
                  style={{
                    width: '3rem',
                    height: '3rem',
                    background: 'var(--gradient-primary)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  <highlight.icon size={24} color="var(--primary-foreground)" />
                </div>
                <h4 className="font-semibold" style={{ color: 'var(--foreground)' }}>
                  {highlight.title}
                </h4>
                <p className="text-sm" style={{ 
                  color: 'var(--muted-foreground)', 
                  lineHeight: 1.6 
                }}>
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;