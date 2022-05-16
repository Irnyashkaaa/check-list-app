import React from "react";
import {Form} from "./Form/Form";
import {Notes} from "./Notes/Notes";

export const HomePage = (props) => {
    return (
        <div>
            <Form store={props.store} dispatch={props.dispatch}/>
            <Notes store={props.store} dispatch={props.dispatch}/>
        </div>
    )
}
