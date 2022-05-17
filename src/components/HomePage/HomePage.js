import React from "react";
import {Form} from "./Form/Form";
import {Notes} from "./Notes/Notes";

export const HomePage = (props) => {
    return (
        <div>
            <Form state={props.state} dispatch={props.dispatch}/>
            <Notes state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}
