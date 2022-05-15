import React from "react";
import './Notes.css'


const Notes = (props) => {
    return (
        <div >
            {props.store.state.homePage.notes.map(note => {
                return <li className="note">{note.title}
                <button className="noteButton">x</button>
                </li>
            })}
        </div>
    )
}

export default Notes