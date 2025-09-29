import React from "react";

const AboutCard = (props) => {
  return (
    <div className="gradient-border p-6 card-hover">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/10">
          {/* <Code className="h-6 w-6 text-primary" /> */}
          <div className="h-6 w-6 text-primary">{props.icon}</div>
        </div>
        <div className="text-left">
          <h4 className="font-semibold text-lg">{props.title}</h4>
          <p className="text-muted-foreground">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
