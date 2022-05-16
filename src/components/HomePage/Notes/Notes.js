import React from "react";
import { deleteNoteActionCreatore } from "../../../redux/notes-reducer";
import './Notes.css'



export const Notes = (props) => {

    let deleteNote = (noteId) => {
        props.dispatch(deleteNoteActionCreatore(noteId))
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
