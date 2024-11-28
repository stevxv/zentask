import React from "react";

import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    Trabajo: { backgroundColor: "var(--tag-work-color)" },
    Estudios: { backgroundColor: "var(--tag-studies-color)" },
    Personal: { backgroundColor: "var(--tag-personal-color)" },
    Hogar: { backgroundColor: "var(--tag-home-color)" },
    Salud: { backgroundColor: "var(--tag-health-color)" },
  };
  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;
