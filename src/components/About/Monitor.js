import React from "react";

const Monitor = () => {
  return (
    <React.Fragment>
      <section className="about__monitor">
        <div className="monitor__screen area">
          {/* Each li element needed for moving squares in the monitor  */}
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="monitor__bottom">
          <div className="monitor__button"></div>
        </div>
      </section>
      <div className="monitor__stand"></div>
      <div className="monitor__base"></div>
      <section className="about__editor">
        <div className="editor__taskbar">
          <div className="taskbar__buttons">
            <div
              className="buttons__button"
              style={{ backgroundColor: "red" }}
            ></div>
            <div
              className="buttons__button"
              style={{ backgroundColor: "yellow" }}
            ></div>
            <div
              className="buttons__button"
              style={{ backgroundColor: "green" }}
            ></div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Monitor;
