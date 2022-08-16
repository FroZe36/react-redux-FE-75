import Dropdown from 'react-bootstrap/Dropdown';

const GenreFilmList = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3" active />
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default GenreFilmList;