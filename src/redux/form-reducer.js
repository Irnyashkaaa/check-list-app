

export let formReducer = (state, action) => {
    switch (action.type) {


        case 'ADD-NOTE':
            let id;
            (state.notes.length > 0) ? id = state.notes[0].id : id = 0

            if (action.noteText.length === 0) return
            let newNote = {
                title: action.noteText,
                id: ++id
            }
            state.newNoteText = ''
            state.notes.unshift(newNote)
            return state
        case 'NEW-NOTE':
            state.newNoteText = action.noteText
        default: return state
    }
}




export const newNoteActionCreatore = (noteText) => ({ type: 'NEW-NOTE', noteText: noteText })
export const addNoteActionCreatore = (noteText) => ({ type: 'ADD-NOTE', noteText: noteText })