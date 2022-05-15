import React from "react";
import { addNote } from "../../redux/store";
import Form from "./Form/Form";
import Notes from "./Notes/Notes";

const HomePage = (props) => {
    return (
        <div>
            <Form store={props.store} addNote={props.addNote} newNote={props.newNote}/>
            <Notes store={props.store} addNote={addNote}/>
        </div>
    )
}

export default HomePage