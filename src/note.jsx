import React from "react";

const Note = ({ header, body, handleClick, id }) => {
  function clickHandler() {
    handleClick(id);
  }
  return (
    <div className="note">
      <h1>{header}</h1>
      <p>{body}</p>
      <button onClick={clickHandler}>delete</button>
    </div>
  );
};

export default Note;
