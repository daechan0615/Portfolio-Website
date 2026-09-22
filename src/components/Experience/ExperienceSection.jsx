import React, { useState } from "react";
import { experience } from "@/lib/experience";
import { Briefcase, Calendar, ChevronDown, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const ExperienceCard = ({ experience }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-xs flex flex-col w-80 flex-shrink-0 snap-start card-hover">
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-1">
          <Briefcase size={18} className="text-primary" />
          <h3 className="text-xl font-semibold">{experience.role}</h3>
        </div>

        <p className="text-primary font-medium mb-1">{experience.company}</p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {experience.period}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={14} />
            {experience.location}
          </span>
        </div>

        {experience.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {experience.tags.map((tag, key) => (
              <span
                key={key}
                className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/70 text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div
          className={cn(
            "overflow-hidden transition-all duration-300",
            expanded ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
          )}
        >
          <p className="text-muted-foreground text-sm">{experience.description}</p>
        </div>

        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="flex items-center gap-1 text-sm text-primary hover:underline mt-auto"
        >
          {expanded ? "Less" : "More"}
          <ChevronDown
            size={16}
            className={cn("transition-transform duration-300", expanded && "rotate-180")}
          />
        </button>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="text-primary"> Experience</span>
        </h2>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-muted [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary/40">
          {experience.map((item, key) => (
            <ExperienceCard key={key} experience={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
