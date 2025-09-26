import { Briefcase, Code, User } from "lucide-react";
import AboutCard from "./AboutCard";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* About Me */}
            <h3 className="text-2xl font-semibold">
              Passionate Full-Stack Developer
            </h3>

            <p className="text-muted-foreground">
              My background spans backend development with Java Spring Boot and
              PostgreSQL, frontend development with React, and data-driven
              features powered by Python and machine learning.
            </p>

            <p className="text-muted-foreground">
              I thrive on solving complex problems, designing clean
              architectures, and bringing impactful ideas to life through code.
              Beyond technical skills, I value collaboration, adaptability, and
              continuous learning as I work toward creating software that
              delivers real value to users.
            </p>

            <p className="text-muted-foreground">
              Beyond technical skills, I value collaboration, adaptability, and
              continuous learning as I work toward creating software that
              delivers real value to users.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>
              <a
                href="/NotFound"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {/* TODO: Add Resume file here */}
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Skills */}
            <AboutCard
              icon={<Code />}
              title="Full-Stack Development"
              description="Building robust and scalable web applications with a focus on performance, reliability, and maintainability."
            />
            <AboutCard
              icon={<User />}
              title="System Design & Problem Solving"
              description="Designing clean architectures and implementing efficient solutions to complex technical challenges."
            />
            <AboutCard
              icon={<Briefcase />}
              title="Collaboration & Project Execution"
              description="Contributing effectively in team settings, leading initiatives when needed, and delivering projects on time with clear impact."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
