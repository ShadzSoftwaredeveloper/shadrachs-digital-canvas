import { Github, Linkedin, Twitter, Instagram, Mail, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const SocialMediaFloat = () => {
  const [isHovered, setIsHovered] = useState(false);

  const socialLinks = [
    {
      icon: <Github className="h-4 w-4" />,
      href: "https://github.com/yourusername",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-4 w-4" />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn"
    },
    {
      icon: <Twitter className="h-4 w-4" />,
      href: "https://twitter.com/yourusername",
      label: "Twitter"
    },
    {
      icon: <Instagram className="h-4 w-4" />,
      href: "https://instagram.com/yourusername",
      label: "Instagram"
    },
    {
      icon: <Mail className="h-4 w-4" />,
      href: "mailto:your.email@example.com",
      label: "Email"
    }
  ];

  return (
    <div 
      className="fixed bottom-6 left-6 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main trigger button */}
      <Button
        variant="outline"
        size="icon"
        className="h-12 w-12 rounded-full bg-card border-border hover:border-primary shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-110 relative z-10"
      >
        <Share2 className={`h-5 w-5 text-primary transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} />
      </Button>

      {/* Social media icons */}
      {socialLinks.map((social, index) => {
        const angle = (index * 72) - 90; // 72 degrees apart, starting from top
        const radius = 60;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        
        return (
          <Button
            key={index}
            variant="outline"
            size="icon"
            asChild
            className={`absolute h-10 w-10 rounded-full bg-card border-border hover:border-primary shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-110 ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
            style={{
              transform: `translate(${x}px, ${y}px) ${isHovered ? 'rotate(360deg)' : 'rotate(0deg)'}`,
              transitionDelay: `${index * 100}ms`,
            }}
          >
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <span className="text-primary hover:text-primary-foreground">
                {social.icon}
              </span>
            </a>
          </Button>
        );
      })}
    </div>
  );
};

export default SocialMediaFloat;