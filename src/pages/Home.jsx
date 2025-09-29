import StarBackground from "@/components/StarBackground";
import Navbar from "@/components/NavBar";
import HomeSection from "@/components/Home/HomeSection";
import AboutSection from "@/components/About/AboutSection";
import SkillsSection from "@/components/Skills/SkillsSection";
import ProjectSection from "@/components/Project/ProjectSection";
import ContactSection from "@/components/Contact/ContactSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Effects */}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
