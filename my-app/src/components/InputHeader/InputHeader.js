import './InputHeader.scss'
import Loop from "../../img/Loop"

const InputHeader = () => {

    return (
        <div className="d-flex justify-content-between mb-3">
            <form className="d-flex w-50" role="search">
                <input className="form-control me-2" type="search" placeholder="Поиск фильмов" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit"><Loop /></button>
            </form>
                <button className="btn btn-outline-danger px-5">TOP</button>
                <button className="btn btn-outline-warning px-5">PREMIER</button>
        </div>
    )
}


export default InputHeader