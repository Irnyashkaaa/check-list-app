import { rerenderTree } from ".."

export let store = {
    state: {
        homePage: {
            notes: [
                { title: "name1", id:1},
                { title: 'name2', id:2 },
                { title: 'name3', id:3 },
                { title: 'name4', id:4 },
                { title: 'name5', id:5 }
            ],
            newNoteText: "Enter here your note text",
        },
    },
    getState() {
        return this._state
    },
    _rerenderDomTree() {
        console.log("state changed")
    },
    subscribe(observer) {
        this._rerenderDomTree = observer
    },

    // dispatch(action) {
    //     this._state.profilePage = (ProfileReducer(this._state.profilePage, action))
    //     this._state.dispatch = (DialogsReducer(this._state.dialogs, action))
    //     this._rerenderDomTree(this._state)
    // },

}

 export let addNote = (noteText) => {
    let newNote = {
        title: noteText
    }
    store.state.homePage.notes.unshift(newNote)
    rerenderTree()
}

export let newNote = (noteText) => {
    store.state.homePage.newNoteText = noteText
    rerenderTree()
}

window.store = store;