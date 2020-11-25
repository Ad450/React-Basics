import React, { useState } from "react";

function FormField(props) {
  const [header, setHeader] = useState("");
  const [content, setContent] = useState("");

  function handleChange(event) {
    setHeader(event.target.value);
    // console.log(event.target.value);
  }

  function handleContentChange(event) {
    setContent(event.target.value);
    // console.log(event.target.value);
  }

  function handleOnchange(event) {
    props.handleSubmit(content, header);
    event.preventDefault();
  }

  return (
    <div className="formClass">
      <form onSubmit={handleOnchange}>
        <input
          placeholder="heading text"
          onChange={handleChange}
          value={header}
        />{" "}
        <br />
        <input
          placeholder="body"
          onChange={handleContentChange}
          value={content}
        />{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormField;
