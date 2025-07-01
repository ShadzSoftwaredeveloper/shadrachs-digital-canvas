import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "shadrach.mugerwa@email.com",
      link: "mailto:shadrach.mugerwa@email.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+256 123 456 789",
      link: "tel:+256123456789"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kampala, Uganda",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/mugerwa-shadrach",
      color: "var(--foreground)"
    },
    {
      icon: Linkedin,
      name: "LinkedIn", 
      url: "https://linkedin.com/in/mugerwa-shadrach",
      color: "var(--accent)"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/mugerwa_shadrach",
      color: "var(--primary)"
    }
  ];

  return (
    <section id="contact" className="section" style={{ 
      padding: '5rem 1.5rem',
      background: 'hsla(220, 16%, 12%, 0.3)'
    }}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Work Together
          </h2>
          <p className="text-lg" style={{ 
            color: 'var(--muted-foreground)', 
            maxWidth: '48rem', 
            margin: '0 auto',
            lineHeight: 1.6 
          }}>
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you. Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2" style={{ gap: '3rem' }}>
          {/* Contact Form */}
          <div className="card p-8 hover-elegant" style={{
            background: 'var(--card)',
            transition: 'var(--transition-smooth)'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
                  Send a Message
                </h3>
                <p style={{ color: 'var(--muted-foreground)' }}>
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="grid md:grid-cols-2" style={{ gap: '1rem' }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                </div>
                
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="input"
                  required
                />
                
                <textarea
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea"
                  required
                />
                
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  <Send size={16} style={{ marginRight: '0.5rem' }} />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="card p-8" style={{
              background: 'var(--gradient-subtle)',
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>
                  Get in Touch
                </h3>
                <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.6 }}>
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {contactInfo.map((info) => (
                    <a
                      key={info.title}
                      href={info.link}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '0.75rem',
                        borderRadius: 'var(--radius)',
                        background: 'hsla(220, 20%, 8%, 0.5)',
                        border: '1px solid var(--border)',
                        textDecoration: 'none',
                        transition: 'var(--transition-smooth)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.borderColor = 'var(--primary)';
                        e.target.style.boxShadow = 'var(--shadow-glow)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderColor = 'var(--border)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{
                        padding: '0.5rem',
                        background: 'var(--gradient-primary)',
                        borderRadius: 'var(--radius)'
                      }}>
                        <info.icon size={20} color="var(--primary-foreground)" />
                      </div>
                      <div>
                        <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                          {info.title}
                        </p>
                        <p className="font-medium" style={{ 
                          color: 'var(--foreground)',
                          transition: 'color 0.3s ease'
                        }}>
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="card p-8" style={{ background: 'var(--card)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                  Follow Me
                </h3>
                <p style={{ color: 'var(--muted-foreground)' }}>
                  Stay connected and follow my journey in tech and development.
                </p>
                
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '0.75rem',
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
                        e.target.style.color = social.color;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderColor = 'var(--border)';
                        e.target.style.boxShadow = 'none';
                        e.target.style.color = 'var(--muted-foreground)';
                      }}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="card p-6" style={{
              background: 'var(--gradient-accent)',
              textAlign: 'center'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  <div 
                    className="animate-glow-pulse"
                    style={{
                      width: '0.75rem',
                      height: '0.75rem',
                      background: 'var(--success)',
                      borderRadius: '50%'
                    }}
                  />
                  <span className="font-semibold" style={{ color: 'var(--accent-foreground)' }}>
                    Available for Work
                  </span>
                </div>
                <p className="text-sm" style={{ color: 'hsla(220, 26%, 6%, 0.8)' }}>
                  Currently accepting new projects and collaborations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;