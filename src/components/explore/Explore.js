import React from "react";
import "./explore.css";
import close from "../../assets/close.png";
import down from "../../assets/down.png";

function Explore() {
  return (
    <>
      <details className="explore">
        <summary>
            <div className="icons">
              <span>
              About Client
              </span>
                <img
                  src={close}
                  className="cross"
                  alt ="icon"
                  ></img>
                <img
                  alt ="icon"
                  src={down}
                  className="down"
                ></img>
            </div>
          
        </summary>
        <div className="expandedCard">
          <label>Company url</label>
          <input placeholder="Enter the Company" />
          <label>Current Content</label>
          <textarea
            className="grey"
            placeholder="This is the current content for the About the Client section."
          />
          <label>
            Want to regenerate the content? Type your thoughts below.
          </label>
          <textarea placeholder="Type your thoughts and regenerate" />
          <button>Save</button>
        </div>
      </details>
    </>
  );
}

export default Explore;
