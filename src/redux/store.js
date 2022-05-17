import { rerenderTree } from ".."
import { notesReducer } from "./notes-reducer"



export let store = {
    _state: {
        homePage: {
            notes: [],
            newNoteText: "",
        },
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this.state.homePage = notesReducer(this.state.homePage, action)
        rerenderTree()
    }

}


