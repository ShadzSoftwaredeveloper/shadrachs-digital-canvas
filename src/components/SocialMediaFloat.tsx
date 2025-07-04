import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialMediaFloat = () => {
  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/yourusername",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://twitter.com/yourusername",
      label: "Twitter"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://instagram.com/yourusername",
      label: "Instagram"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:your.email@example.com",
      label: "Email"
    }
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {socialLinks.map((social, index) => (
        <Button
          key={index}
          variant="outline"
          size="icon"
          asChild
          className="h-12 w-12 rounded-full bg-card border-border hover:border-primary shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        >
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
          >
            <span className="text-primary group-hover:text-primary-foreground">
              {social.icon}
            </span>
          </a>
        </Button>
      ))}
    </div>
  );
};

export default SocialMediaFloat;