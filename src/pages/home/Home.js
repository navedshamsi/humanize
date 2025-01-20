import React, { useState } from "react";
import "./home.css";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the CSS for the editor theme

const options = ["Lead1", "Lead2", "Lead3", "Lead3"];

function Home() {
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState({
    title: "Digital Discovery Assessment",
    description:
      "The Digital Discovery Assessment (DDA) is used in the sales cycle to assess a customer's requirements and match them with the best SAP S/4HANA Cloud solution to fit their needs.\n Upload your DDA report and other notes/transcripts (if any).",
    lead: "Lead1",
  });

  const handleChange = (field, val) => {
    setData((elem) => ({ ...elem, [field]: val }));
  };

  const tabPress = (val) => {
    setEdit(val);
  };

  return (
    <div className="home">
      <div className="tabs">
        <div
          onClick={() => tabPress(false)}
          className={"tab " + (edit ? "tabsSelected" : "tabsNotSelected")}
        >
          Discover
        </div>
        <div
          onClick={() => tabPress(true)}
          className={"tab " + (!edit ? "tabsSelected" : "tabsNotSelected")}
        >
          Prepare
        </div>
        <div className="tab tabsNotSelected">Explore</div>
      </div>

      <div className="tab_content">
        {edit && <label>Title</label>}
        <input
          disabled={!edit}
          onChange={({ val }) => handleChange("title", val)}
          className="title"
          placeholder="Title"
          value={data?.title}
        ></input>

        {edit && <label>Description</label>}

        {/* {edit ? ( */}
          <ReactQuill
            key={edit}
            value={data?.description}
            onChange={(val) => handleChange("description", val)}
            placeholder="Description"
            className={"description " + (edit ? " border" : " descriptionReadOnly")}
            readOnly={!edit}
            modules={{ toolbar: edit }}
          />
        {edit ? (
          <>
            <label>Assign Lead</label>
            <select
              disabled={!edit}
              onChange={(e) => handleChange("lead", e.target.value)}
              value={data?.lead}
            >
              {options.map((elem) => (
                <option value={elem}>{elem}</option>
              ))}
            </select>
          </>
        ) : (
          <p className="lead">Assigned to : {data.lead}</p>
        )}
        {edit && <label for="pdf">Select a PDF:</label>}
        <input type="file" id="pdf" name="pdf" accept=".pdf" />
        <button>Upload</button>
      </div>
    </div>
  );
}

export default Home;
