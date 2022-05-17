import React from "react";
import { deleteNoteActionCreatore } from "../../../redux/notes-reducer";
import './Notes.css'

export const Notes = (props) => {

    let deleteNote = (noteId) => {
        if (!noteId) {
            noteId = 0
        }
        for (let i = 0; i <= props.state.homePage.notes.length; i++) {
            if (props.state.homePage.notes[i].id == noteId) {
                props.dispatch(deleteNoteActionCreatore(i))
            }
        }

    }

    return (
        <div >
            {props.state.homePage.notes.map(note => {
                return <li className="note">{note.title}
                <button onClick={() => {deleteNote(note.id)}} className="noteButton" >x</button>
                </li>
            })}
        </div>
    )
}
