import React from "react";
import './Form.css'



const Form = (props) => {
    let newNoteElement = React.createRef()

    let onButtonClick = () => {
        props.addNote(newNoteElement.current.value)
    }

    let onChangeInput = () => {
        props.newNote(newNoteElement.current.value)
    }

    return (
        <div className="form" >
            <input ref={newNoteElement} className="form" placeholder="enter here your note" value={props.store.state.homePage.newNoteText} onChange={onChangeInput}></input>
            <button className='formButton' onClick={onButtonClick}>ADD</button>
        </div>
    )
}

export default Form