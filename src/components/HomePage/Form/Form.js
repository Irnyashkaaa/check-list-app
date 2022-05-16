import React from "react";
import { addNoteActionCreatore, newNoteActionCreatore } from "../../../redux/form-reducer";
import './Form.css'



export const Form = (props) => {
    let newNoteElement = React.createRef()


    let onButtonClick = () => {
        props.dispatch(addNoteActionCreatore(newNoteElement.current.value))
    }

    let onChangeInput = () => {
        props.dispatch(newNoteActionCreatore(newNoteElement.current.value))
    }
    debugger
    return (
        <div className="form" >
            <input ref={newNoteElement} 
            className="form" 
            placeholder="enter here your note" 
            value={props.store.state.homePage.newNoteText} 
            onChange={onChangeInput}></input>
            <button className='formButton' onClick={onButtonClick}>ADD</button>
        </div>
    )
}
