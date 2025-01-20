import React from 'react'
import ReactQuill from 'react-quill';
import { useOutletContext } from 'react-router-dom';

const options = ["Lead_1", "Lead_2", "Lead_3", "Lead_4"];

function ContentCard() {

  const {edit,data,handleChange} = useOutletContext();

  return (<div className="tab_content">
    {edit && <label>TITLE</label>}
    <input
      disabled={!edit}
      onChange={({ val }) => handleChange("title", val)}
      className="title"
      placeholder="Title"
      value={data?.title}
    ></input>

    {edit && <label>DESCRIPTION</label>}

    {/* {edit ? ( */}
    <ReactQuill
      key={edit}
      value={data?.description}
      onChange={(val) => handleChange("description", val)}
      placeholder="Description"
      className={
        "description " + (edit ? " border" : " descriptionReadOnly")
      }
      readOnly={!edit}
      modules={{ toolbar: edit }}
    />
    {edit ? (
      <>
        <label>ASSIGN LEAD</label>
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
      <p className="lead">Assigned to : <span>{data.lead}</span></p>
    )}
    {edit && <label for="pdf">Digital Discovery Report</label>}
    <button>Upload</button>
  </div>
  )
}

export default ContentCard