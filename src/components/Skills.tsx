import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", 
        "Tailwind CSS", "Sass", "Redux", "Zustand", "React Router"
      ],
      gradient: "bg-gradient-primary"
    },
    {
      title: "Backend Development", 
      skills: [
        "Node.js", "Express.js", "Python", "Django", "FastAPI", "PostgreSQL", 
        "MongoDB", "Redis", "REST APIs", "GraphQL", "JWT"
      ],
      gradient: "bg-gradient-accent"
    },
    {
      title: "Mobile Development",
      skills: [
        "React Native", "Flutter", "Expo", "Android Studio", "iOS Development",
        "Cross-platform", "Native APIs", "Push Notifications"
      ],
      gradient: "bg-gradient-primary"
    },
    {
      title: "DevOps & Tools",
      skills: [
        "Git", "GitHub", "Docker", "AWS", "Vercel", "Netlify", "CI/CD", 
        "Linux", "Bash", "VS Code", "Figma", "Postman"
      ],
      gradient: "bg-gradient-accent"
    }
  ];

  const certifications = [
    "AWS Cloud Practitioner",
    "Meta Frontend Developer",
    "Google UX Design", 
    "Microsoft Azure Fundamentals"
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks, 
            constantly evolving with industry trends and best practices.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-8 bg-card border-border hover:shadow-elegant transition-all duration-300 group"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`w-4 h-4 rounded-full ${category.gradient}`} />
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1 bg-secondary/50 text-secondary-foreground border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <Card className="p-8 bg-gradient-subtle border-border">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Certifications & Learning</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Committed to continuous learning and professional development through 
              industry-recognized certifications and courses.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert) => (
                <Badge 
                  key={cert}
                  className="px-4 py-2 bg-accent/10 text-accent border border-accent/30 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;