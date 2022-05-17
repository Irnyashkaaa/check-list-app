export const deleteNoteActionCreatore = (deleteNoteId) => ({ type: 'DELETE-NOTE', deleteNoteId: deleteNoteId })
export const newNoteActionCreatore = (noteText) => ({ type: 'NEW-NOTE', noteText: noteText })
export const addNoteActionCreatore = (noteText, lastId) => ({ type: 'ADD-NOTE', noteText: noteText, lastId: lastId })


export let notesReducer = (state, action) => {
    switch (action.type) {

        case 'DELETE-NOTE':
            state.notes.splice(action.deleteNoteId, 1)
            return state
        case 'ADD-NOTE':
                let newNote = {
                    title: action.noteText,
                    id: ++action.lastId
                }
                state.newNoteText = ''
                state.notes.unshift(newNote)

                return state
        case 'NEW-NOTE':
            state.newNoteText = action.noteText
        default: return state
    }
}