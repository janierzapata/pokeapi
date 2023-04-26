import React from "react";

export const BotonAzul = ({ action, text, textAction, github=false, clear}) => {
  return (
    <div
      className="celdas-azules "
      onClick={() => {
        action( textAction && textAction );
        github && window.open("https://github.com/janierzapata", "_blank");
    }}
    >
      <p>{text}</p>
    </div>
  );
};
