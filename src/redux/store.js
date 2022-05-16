import { rerenderTree } from ".."
import { formReducer } from "./form-reducer"
import { notesReducer } from "./notes-reducer"



export let store = {
    state: {
        homePage: {
            notes: [
                { title: "name1", id: 4 },
                { title: 'name2', id: 3 },
                { title: 'name3', id: 2 },
                { title: 'name4', id: 1 },
                { title: 'name5', id: 0 }
            ],
            newNoteText: "",
        },
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this.store.state.homePage = formReducer(this.store.state.homePage, action)
        this.store.state.homePage.notes = notesReducer(this.store.state.homePage.notes, action)
        rerenderTree()
    }

}




window.store = store;