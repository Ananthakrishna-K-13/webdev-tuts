import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  const { note, updateNote } = props;
  const {deleteNote} = useContext(NoteContext)
  const handledelete=()=>{
    deleteNote(note._id);
    props.showAlert("Deleted Succesfully","success")
  }
  return (
    <div className="col-md-3">
      <div className="card my-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i className="fa-solid fa-trash mx-2" onClick={handledelete}></i>
            <i className="fa-solid fa-file-pen mx-2" onClick={()=>{updateNote(note);}}></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
