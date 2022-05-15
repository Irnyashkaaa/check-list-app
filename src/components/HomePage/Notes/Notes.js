import React from "react";
import './Notes.css'



const Notes = (props) => {

    let deleteNote = (noteId) => {
        props.deleteNote(noteId)
    }

    return (
        <div >
            {props.store.state.homePage.notes.map(note => {
                return <li className="note">{note.title}
                <button onClick={() => {deleteNote(note.id)}} className="noteButton" >x</button>
                </li>
            })}
        </div>
    )
}

export default Notes