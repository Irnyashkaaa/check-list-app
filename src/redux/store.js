import { rerenderTree } from ".."

export let store = {
    state: {
        homePage: {
            notes: [
                { title: "name1", id:4},
                { title: 'name2', id:3 },
                { title: 'name3', id:2 },
                { title: 'name4', id:1 },
                { title: 'name5', id:0 }
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
    let id = store.state.homePage.notes[0].id
    let newNote = {
        title: noteText,
        id: ++id
    }
    store.state.homePage.notes.unshift(newNote)
    rerenderTree()
}

export let newNote = (noteText) => {
    store.state.homePage.newNoteText = noteText
    rerenderTree()
}

export let deleteNote = (noteId) => {
    
    for (let i = 0; i <=store.state.homePage.notes.length; i++) {
        if (store.state.homePage.notes[i].id == noteId) {
            store.state.homePage.notes.splice(i, 1)
            rerenderTree()
        }
    }

}

window.store = store;