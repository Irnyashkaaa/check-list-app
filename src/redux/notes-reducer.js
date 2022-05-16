export let deleteNoteActionCreatore = (noteId) => ({ type: 'DELETE-NOTE', noteId: noteId })

export let notesReducer = (state, action) => {
    switch(action.type) {
        case 'DELETE-NOTE':
                if (!action.noteId) {
                    action.noteId = 0
                }
                for (let i = 0; i <= state.length; i++) {
                    if (state[i].id == action.noteId) {
                        state.splice(i, 1)
                        return state
                    }
                }
        default: return state
    }
}