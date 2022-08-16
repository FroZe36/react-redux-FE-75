import useFilmService from '../../services/FilmService';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Spinner from '../Spinner/Spinner' 
import ErrorMessage from '../ErrorMessage/ErrorMessage'

import {filmsFetching, filmsFetched, filmsFetchingError} from '../../actions'




const FilmList = () => {

    const {getTopFilms} = useFilmService()
    const {films, filmsLoadingStatus} = useSelector(state => state)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(filmsFetching())
    //     getTopFilms()
    //         .then(dispatch(filmsFetched(films)))
    //         .catch(dispatch(filmsFetchingError))
    // })


    if (filmsLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (filmsLoadingStatus === "error") {
        return <ErrorMessage/>
    }

    return (

        

        <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 10 }).map((_, idx) => (
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default FilmList;