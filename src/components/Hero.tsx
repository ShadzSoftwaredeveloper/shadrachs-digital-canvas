import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      {/* Background Image with Overlay */}
      <div className="hero-bg">
        <img 
          src={heroImage} 
          alt="Developer workspace"
        />
        <div className="hero-overlay" />
      </div>

      {/* Animated Background Elements */}
      <div className="floating-elements">
        <div className="floating-dot animate-float" />
        <div className="floating-dot animate-float" style={{ animationDelay: '1s' }} />
        <div className="floating-dot animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <div className="hero-content">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-8xl font-bold mb-6 gradient-text">
            Mugerwa
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-8" style={{ color: 'var(--foreground)' }}>
            Shadrach
          </h2>
          <p className="text-xl md:text-2xl mb-8" style={{ 
            color: 'var(--muted-foreground)', 
            maxWidth: '32rem', 
            margin: '0 auto 2rem auto',
            lineHeight: 1.6 
          }}>
            Full-Stack Developer crafting exceptional digital experiences with modern technologies
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center justify-center mb-12 animate-slide-in" style={{ gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button className="btn btn-primary btn-lg">
              View My Work
            </button>
            <button className="btn btn-outline btn-lg">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center mb-16 animate-fade-in" style={{ 
          gap: '1.5rem',
          animationDelay: '0.5s' 
        }}>
          <a href="#" className="social-link">
            <Github size={24} />
          </a>
          <a href="#" className="social-link">
            <Linkedin size={24} />
          </a>
          <a href="#" className="social-link">
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToNext}
          className="animate-bounce"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--foreground)',
            cursor: 'pointer',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--primary)'}
          onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--foreground)'}
        >
          <ArrowDown size={32} />
        </button>
      </div>

      <style>{`
        .social-link {
          padding: 0.75rem;
          border-radius: 50%;
          background: var(--card);
          border: 1px solid var(--border);
          color: var(--muted-foreground);
          text-decoration: none;
          transition: var(--transition-smooth);
        }
        
        .social-link:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow-glow);
          color: var(--primary);
        }

        @media (max-width: 640px) {
          .flex {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;