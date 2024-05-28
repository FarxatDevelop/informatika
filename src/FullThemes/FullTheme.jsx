import React from "react";
import { Link } from "react-router-dom";

const FullTheme = ({ theme, tasks, numberOfTheme }) => {
  let newTheme = theme;
  if (newTheme.length > 38) {
    newTheme = theme.slice(0, 37) + "...";
  }
  return (
    <Link to={`/theme/${numberOfTheme}`}>
      <div className="class">
        <div className="theme-row">
          <p className="theme">
            <span>{numberOfTheme}-tema: </span>
            {newTheme}
          </p>
        </div>
        <div className="theme-info">
          <h4>Tapsirmalar : {tasks}</h4>
        </div>
      </div>
    </Link>
  );
};

export default FullTheme;
