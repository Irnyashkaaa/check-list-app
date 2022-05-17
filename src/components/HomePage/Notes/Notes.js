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
                debugger
                return <li className="note">
                    <div className="noteInfo">
                        <div>
                            {note.title}
                        </div>
                        <div className="noteDate">
                            {`${note.data.toLocaleDateString()} ${note.data.getHours()}:${note.data.getMinutes()}:${note.data.getSeconds()}`}
                        </div>
                    </div>
                    <button onClick={() => { deleteNote(note.id) }} className="noteButton" >x</button>
                </li>
            })}
        </div>
    )
}
