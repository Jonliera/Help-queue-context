import React from "react";
import PropTypes from "prop-types";

const ToggleTheme = (props) => {
  const { toggleTheme } = props;
  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <hr />
    </>
  );
};

ToggleTheme.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};

export default ToggleTheme;
