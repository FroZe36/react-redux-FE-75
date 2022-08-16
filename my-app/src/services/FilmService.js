import { useHttp } from "../hooks/http.hooks";


const useFilmService = () => {

    const { request } = useHttp()

    const _apiBase = 'https://kinopoiskapiunofficial.tech/api/v2.2/films'

    const getTopFilms = async () => {
        const res = await request(`${_apiBase}/top`)
        console.log(res.films.map(_transformFilms))
        return res.films.map(_transformFilms)
    }
    const getPremieresFilms = async () => {
        const res = await request(`${_apiBase}/premieres`)
        return res
    }
    const getFilters = async () => {
        const res = await request(`${_apiBase}/filters`)
        return res
    }

    const _transformFilms = (film) => {
        return {
            countries: film.countries.map(item => item.country),
            id: film.filmId,
            filmLength: film.filmLength,
            genres: film.genres.map(item => item.genre),
            nameEn: film.nameEn,
            nameRu: film.nameRu,
            posterUrl: film.posterUrl,
            posterUrlPreview: film.posterUrlPreview,
            rating: film.rating,
            year: film.year
        }
    }

    return { getTopFilms, getPremieresFilms, getFilters }
}


export default useFilmService

