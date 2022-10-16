import React from "react";

type SectionHeadingProps = {
  title1: string;
  title2?: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({ title1, title2 }) => {
  return (
    <div className="section_heading">
      <span className="title">{title1}</span>
      <div className="seprator"></div>
      {Boolean(title2) && <span className="title">{title2}</span>}
    </div>
  );
};

export default SectionHeading;
