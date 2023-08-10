import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState =(props)=>{
    let host = "http://localhost:5000"
    const [notes, setNotes] = useState([])

    const getNotes = async ()=>{
        const response = await fetch(`${host}/api/notes/fetchallnotes`,{
            method:'GET',
            headers:{
                'Content-type':'application/json',
                'auth-token':localStorage.getItem('token')
            },
        });
        const json = await response.json();
        setNotes(json)
      }


      const addNote=async (title,description,tag)=>{
        const response = await fetch(`${host}/api/notes/addnote`,{
            method:'POST',
            headers:{
                'Content-type':'application/json',
                'auth-token':localStorage.getItem('token'),
            },
            body: JSON.stringify({title,description,tag})
        });
        const note = await response.json()
        setNotes(notes.concat(note))
      }

      const deleteNote=async (id)=>{
        const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
            method:'DELETE',
            headers:{
                'Content-type':'application/json',
                'auth-token':localStorage.getItem('token')
            }, 
        });
        console.log(response)
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
      }

      const editNote=async (id,title,description,tag)=>{
        const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
            method:'PUT',
            headers:{
                'Content-type':'application/json',
                'auth-token':localStorage.getItem('token')
            },
            body:JSON.stringify({title,description,tag})
        });
        console.log(response)
        const newNotes =  JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newNotes.length; index++) {
            let element = newNotes[index]
            if(element._id===id){
                newNotes[index].title = title;
                newNotes[index].tag = tag;
                newNotes[index].description = description;
                break;
            }
        }
        setNotes(newNotes)
      }
    return(
        <NoteContext.Provider value={{notes,setNotes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState