import { Github, Linkedin, Twitter, Instagram, Mail, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const SocialMediaFloat = () => {
  const [isHovered, setIsHovered] = useState(false);

  const allIcons = [
    {
      icon: <Github className="h-4 w-4" />,
      href: "https://github.com/yourusername",
      label: "GitHub",
      isShare: false
    },
    {
      icon: <Linkedin className="h-4 w-4" />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
      isShare: false
    },
    {
      icon: <Share2 className="h-5 w-5" />,
      href: "#",
      label: "Share",
      isShare: true
    },
    {
      icon: <Twitter className="h-4 w-4" />,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
      isShare: false
    },
    {
      icon: <Instagram className="h-4 w-4" />,
      href: "https://instagram.com/yourusername",
      label: "Instagram",
      isShare: false
    },
    {
      icon: <Mail className="h-4 w-4" />,
      href: "mailto:your.email@example.com",
      label: "Email",
      isShare: false
    }
  ];

  return (
    <div 
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* All icons in circular arrangement */}
      {allIcons.map((item, index) => {
        const angle = (index * 60) - 90; // 60 degrees apart for 6 icons, starting from top
        const radius = isHovered ? 50 : 0;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        
        const isVisible = item.isShare || isHovered;
        
        return (
          <Button
            key={index}
            variant="outline"
            size="icon"
            asChild={!item.isShare}
            className={`absolute h-12 w-12 rounded-full bg-card border-border hover:border-primary shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-110 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            } ${item.isShare ? 'z-10' : ''}`}
            style={{
              transform: `translate(${x}px, ${y}px) ${isHovered ? 'rotate(360deg)' : 'rotate(0deg)'}`,
              transitionDelay: `${index * 80}ms`,
            }}
          >
            {item.isShare ? (
              <span className="text-primary">
                {item.icon}
              </span>
            ) : (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
              >
                <span className="text-primary hover:text-primary-foreground">
                  {item.icon}
                </span>
              </a>
            )}
          </Button>
        );
      })}
    </div>
  );
};

export default SocialMediaFloat;