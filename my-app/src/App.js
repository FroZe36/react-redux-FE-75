import InputHeader from "./components/InputHeader/InputHeader";
import GenreFilmList from "./components/GenreFilmList/GenreFilmList";
import FilmList from "./components/FilmList/FilmList";
import useFilmService from "./services/FilmService";

function App() {

  // const {getTopFilms} = useFilmService()

  // getTopFilms().then(res => console.log(res))
  return (
    <div className="App">
        <InputHeader/>
        <GenreFilmList/>
      <main>
        <FilmList/>
      </main>
    </div>
  );
}

export default App;
