import Projects from "@/components/Projects";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Projects />
      <Footer />
    </div>
  );
};

export default ProjectsPage;