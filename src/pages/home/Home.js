import React, { useState } from "react";
import "./home.css";
import "react-quill/dist/quill.snow.css"; // Import the CSS for the editor theme
import { Outlet, useNavigate } from "react-router-dom";

function Home() {
  const [edit, setEdit] = useState(true);
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "Digital Discovery Assessment",
    description:
      "The Digital Discovery Assessment (DDA) is used in the sales cycle to assess a customer's requirements and match them with the best SAP S/4HANA Cloud solution to fit their needs.\n Upload your DDA report and other notes/transcripts (if any).",
    lead: "Lead_1",
  });

  const handleChange = (field, val) => {
    setData((elem) => ({ ...elem, [field]: val }));
  };

  const tabPress = (val) => {
    setEdit(val);
    navigate("/home");
  };

  const goto = () => {
    navigate("/home/explore");
  };

  return (
    <div className="home">
      <div className="tabs">
        <div
          onClick={() => tabPress(true)}
          className="tab "
        >
          Prepare
        </div>
        <div
          onClick={() => tabPress(false)}
          className="tab " 
        >
          Discover
        </div>

        <div onClick={goto} className="tab tabsNotSelected">
          Explore
        </div>
      </div>
      <Outlet context={{ edit, data, handleChange }} />
    </div>
  );
}

export default Home;
