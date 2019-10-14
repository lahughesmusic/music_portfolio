import React from "react";
import Helmet from "react-helmet";

export default () => {
  const style = {
    marginTop: "300px",
    color: "lightgrey",
    textAlign: "center"
  };
  return (
    <div style={style}>
      <Helmet bodyAttributes={{ style: "background-color: black" }} />
      <h1>404 Page Not Found</h1>
      <p>Sorry, that page does not exist</p>
    </div>
  );
};
