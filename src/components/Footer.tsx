import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:shadrach.mugerwa@email.com", label: "Email" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'var(--card)',
      borderTop: '1px solid var(--border)'
    }}>
      <div className="container" style={{ padding: '3rem 1.5rem' }}>
        <div className="grid md:grid-cols-3 mb-8">
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button 
              onClick={scrollToTop}
              className="text-3xl font-bold gradient-text"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              Mugerwa Shadrach
            </button>
            <p style={{ 
              color: 'var(--muted-foreground)', 
              lineHeight: 1.6 
            }}>
              Full-Stack Developer passionate about creating exceptional digital experiences 
              and solving complex problems through code.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 className="font-semibold" style={{ color: 'var(--foreground)' }}>
              Quick Links
            </h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--muted-foreground)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: '0.5rem 0',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--muted-foreground)'}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 className="font-semibold" style={{ color: 'var(--foreground)' }}>
              Get In Touch
            </h3>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.5rem',
              color: 'var(--muted-foreground)' 
            }}>
              <p>Kampala, Uganda</p>
              <p>shadrach.mugerwa@email.com</p>
              <p>+256 123 456 789</p>
            </div>
            
            {/* Social Links */}
            <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.5rem' }}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  style={{
                    padding: '0.5rem',
                    background: 'var(--secondary)',
                    borderRadius: 'var(--radius)',
                    border: '1px solid var(--border)',
                    color: 'var(--muted-foreground)',
                    textDecoration: 'none',
                    transition: 'var(--transition-smooth)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = 'var(--primary)';
                    e.target.style.boxShadow = 'var(--shadow-glow)';
                    e.target.style.color = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = 'var(--border)';
                    e.target.style.boxShadow = 'none';
                    e.target.style.color = 'var(--muted-foreground)';
                  }}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '2rem'
        }}>
          <div className="flex flex-col md:flex-row justify-between items-center" style={{ gap: '1rem' }}>
            <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
              © {currentYear} Mugerwa Shadrach. All rights reserved.
            </p>
            
            <div className="flex items-center text-sm" style={{ 
              gap: '0.5rem',
              color: 'var(--muted-foreground)' 
            }}>
              <span>Built with</span>
              <Heart size={16} style={{ color: '#ef4444', fill: 'currentColor' }} />
              <span>using React, TypeScript & CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;