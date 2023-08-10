import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddNote = (props) => {
    const {addNote} = useContext(NoteContext);
    const [note, setNote] = useState({title:"",description:"",tag:""})
    const handleclick =(e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag)
        console.log(note.title)
        setNote({title:"",description:"",tag:""})
        props.showAlert("Added Successfully","success")
    }
    const onChange = (e)=>{
        setNote({...note, [e.target.id]: e.target.value})
    }
  return (
    <div className="container my-3">
        <h1>Add a note</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
              onChange={onChange}
              required
              minLength={5}
              value={note.title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              onChange={onChange}
              required
              minLength={5}
              value={note.description}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              onChange={onChange}
              value={note.tag}
            />
          </div>
          <button disabled={note.title.length<5 || note.description.length<5 } type="submit" className="btn btn-primary" onClick={handleclick}>
            Add Note
          </button>
        </form>
      </div>
  )
}

export default AddNote