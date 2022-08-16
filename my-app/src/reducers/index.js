const initialState = {
    films: [],
    filmsLoadingStatus: 'idle',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FILMS_FETCHING':
            return {
                ...state,
                filmsLoadingStatus: 'loading'
            }
        case 'FILMS_FETCHED':
            return {
                ...state,
                films: action.payload,
                filmsLoadingStatus: 'idle'
            }
        case 'FILMS_FETCHING_ERROR':
            return {
                ...state,
                filmsLoadingStatus: 'error'
            }
        default: return state
    }
}

export default reducer;