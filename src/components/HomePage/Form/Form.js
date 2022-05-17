import React from "react";
import { addNoteActionCreatore, newNoteActionCreatore } from "../../../redux/notes-reducer";
import './Form.css'



export const Form = (props) => {
    let newNoteElement = React.createRef()


    let onButtonClick = () => {
        let lastId;
        (props.state.homePage.notes.length > 0) ? lastId = props.state.homePage.notes[0].id : lastId = 0

        if (newNoteElement.current.value.length) {
            props.dispatch(addNoteActionCreatore(newNoteElement.current.value, lastId))
        }

    }

    let onChangeInput = () => {
        props.dispatch(newNoteActionCreatore(newNoteElement.current.value))
    }
    return (
        <div className="form" >
            <input ref={newNoteElement} 
            className="form" 
            placeholder="Enter here your note" 
            value={props.state.homePage.newNoteText} 
            onChange={onChangeInput}></input>
            <button className='formButton' onClick={onButtonClick}>ADD</button>
        </div>
    )
}
