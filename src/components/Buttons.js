import React from "react";
import './Buttons.css'

const Buttons = (props) => {
  return (
    <div>
      {props.goPrev && <button onClick={props.goPrev} className="Back">Previous Page</button>}
      <button onClick={props.goNext} className="forward">Next Page</button>
    </div>
  );
};

export default Buttons;
