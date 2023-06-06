import React from "react";
// import DeleteIcon from "Y

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        DELETE
        {/* <DeleteIcon /> */}
      </button>
    </div>
  );
}

export default Note;
