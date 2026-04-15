import React, { useState } from "react";
import { projects } from "@/lib/projects";
import { ArrowRight, ChevronDown, ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-xs flex flex-col w-80 flex-shrink-0 snap-start">
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, key) => (
            <span
              key={key}
              className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/70 text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          className={cn(
            "overflow-hidden transition-all duration-300",
            expanded ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
          )}
        >
          <p className="text-muted-foreground text-sm">{project.descrition}</p>
        </div>

        <div className="flex justify-between items-center mt-auto">
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="flex items-center gap-1 text-sm text-primary hover:underline"
          >
            {expanded ? "Less" : "More"}
            <ChevronDown
              size={16}
              className={cn(
                "transition-transform duration-300",
                expanded && "rotate-180"
              )}
            />
          </button>

          <div className="flex space-x-3">
            {project.appUrl && (
              <a
                href={project.appUrl}
                target="_blank"
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                <ExternalLink size={20} />
              </a>
            )}
            {project.sourceCodeUrl && (
              <a
                href={project.sourceCodeUrl}
                target="_blank"
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've built that showcase my approach to
          problem-solving, design, and full-stack development. Each project
          reflects my focus on creating practical, impactful solutions while
          continually learning and refining my skills. More projects will be
          added as I continue exploring new ideas and technologies.
        </p>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-muted [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary/40">
          {projects.map((project, key) => (
            <ProjectCard key={key} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/daechan0615"
            target="_blank"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
