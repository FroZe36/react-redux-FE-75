export const filmsFetching = () => {
    return {
        type: 'FILMS_FETCHING'
    }
}

export const filmsFetched = (films) => {
    return {
        type: 'FILMS_FETCHED',
        payload: films
    }
}

export const filmsFetchingError = () => {
    return {
        type: 'FILMS_FETCHING_ERROR'
    }
}