import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  const { notes, getNotes, editNote } = useContext(NoteContext);
  let navigate= useNavigate()
  useEffect(() => {
    if(localStorage.getItem('token')) {getNotes();}
    else {navigate('/login')}
    // eslint-disable-next-line
  }, []);
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
      id:currentNote._id
    });
  };
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const handleclick = (e) => {
    e.preventDefault();
    refClose.current.click();
    editNote(note.id,note.etitle,note.edescription,note.etag);
    props.showAlert("Updated Succesfully","success");

  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.id]: e.target.value });
  };
  return (
    <>
      <AddNote showAlert={props.showAlert}/>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    aria-describedby="emailHelp"
                    value={note.etitle}
                    onChange={onChange}
                    required
                    minLength={5}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    value={note.edescription}
                    onChange={onChange}
                    required
                    minLength={5}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    value={note.etag}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
               disabled={note.etitle.length<5 || note.edescription.length<5 }
                type="button"
                className="btn btn-primary"
                onClick={handleclick}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h1>Your Notes</h1>
        <div className="container mx-2">
        {notes.length===0 && "No notes to display"}
        </div>
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} note={note} updateNote={updateNote} showAlert={props.showAlert}/>
          );
        })}
      </div>
    </>
  );
};

export default Notes;
