const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", 
        "Tailwind CSS", "Sass", "Redux", "Zustand", "React Router"
      ],
      color: "var(--primary)"
    },
    {
      title: "Backend Development", 
      skills: [
        "Node.js", "Express.js", "Python", "Django", "FastAPI", "PostgreSQL", 
        "MongoDB", "Redis", "REST APIs", "GraphQL", "JWT"
      ],
      color: "var(--accent)"
    },
    {
      title: "Mobile Development",
      skills: [
        "React Native", "Flutter", "Expo", "Android Studio", "iOS Development",
        "Cross-platform", "Native APIs", "Push Notifications"
      ],
      color: "var(--primary)"
    },
    {
      title: "DevOps & Tools",
      skills: [
        "Git", "GitHub", "Docker", "AWS", "Vercel", "Netlify", "CI/CD", 
        "Linux", "Bash", "VS Code", "Figma", "Postman"
      ],
      color: "var(--accent)"
    }
  ];

  const certifications = [
    "AWS Cloud Practitioner",
    "Meta Frontend Developer",
    "Google UX Design", 
    "Microsoft Azure Fundamentals"
  ];

  return (
    <section id="skills" className="section" style={{ 
      padding: '5rem 1.5rem',
      background: 'hsla(220, 16%, 12%, 0.3)'
    }}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-lg" style={{ 
            color: 'var(--muted-foreground)', 
            maxWidth: '48rem', 
            margin: '0 auto',
            lineHeight: 1.6 
          }}>
            A comprehensive toolkit of modern technologies and frameworks, 
            constantly evolving with industry trends and best practices.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="card p-8 hover-elegant"
              style={{
                background: 'var(--card)',
                transition: 'var(--transition-smooth)'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div 
                    style={{
                      width: '1rem',
                      height: '1rem',
                      borderRadius: '50%',
                      background: category.color
                    }}
                  />
                  <h3 className="text-2xl font-bold" style={{ 
                    color: 'var(--foreground)',
                    transition: 'color 0.3s ease'
                  }}>
                    {category.title}
                  </h3>
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="badge badge-secondary"
                      style={{
                        transition: 'var(--transition-smooth)',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.borderColor = 'var(--primary)';
                        e.target.style.background = 'hsla(237, 84%, 64%, 0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderColor = 'transparent';
                        e.target.style.background = 'hsla(220, 16%, 16%, 0.5)';
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="card p-8" style={{
          background: 'var(--gradient-subtle)',
          textAlign: 'center'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>
              Certifications & Learning
            </h3>
            <p style={{ 
              color: 'var(--muted-foreground)', 
              maxWidth: '32rem', 
              margin: '0 auto' 
            }}>
              Committed to continuous learning and professional development through 
              industry-recognized certifications and courses.
            </p>
            
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              gap: '1rem' 
            }}>
              {certifications.map((cert) => (
                <span 
                  key={cert}
                  className="badge badge-accent"
                  style={{
                    padding: '0.5rem 1rem',
                    transition: 'var(--transition-smooth)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'var(--accent)';
                    e.target.style.color = 'var(--accent-foreground)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'hsla(186, 100%, 64%, 0.1)';
                    e.target.style.color = 'var(--accent)';
                  }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;