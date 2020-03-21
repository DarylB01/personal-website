import React from "react";

const SkillSection = props => {
  return (
    <section
      className="browser__content"
      style={
        props.tab !== props.skillArea ? { display: "none", opacity: "0" } : null
      }
    >
      {props.skillList.map((item, index) => {
        return (
          <figure key={index}>
            <img alt={`${item.name}`} src={item.imgSrc} />
            <figcaption>{`${item.name}`}</figcaption>
          </figure>
        );
      })}
    </section>
  );
};

export default SkillSection;
