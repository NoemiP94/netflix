import { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
// import { useNavigate, useParams } from 'react-router-dom'

const MovieDetails = ({ movie }) => {
  const [movieDetail, setMovieDetail] = useState(null)
  const [movieComment, setMovieComment] = useState(null)

  const fetchMovieDetails = () => {
    fetch('https://www.omdbapi.com/?apikey=1e18e07&s=' + movie.imdbId)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Problema nel recupero dei dati')
        }
      })
      .then((data) => {
        console.log('dettagli film', data.Search[0])
        setTimeout(() => {
          setMovieDetail(data.Search[0])
        }, 500)
      })
      .catch((err) => {
        console.log('Errore', err)
      })
  }

  const fetchMovieComments = () => {
    fetch('https://striveschool-api.herokuapp.com/api/comments/elementId')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Problema nel recupero dei dati')
        }
      })
      .then((dataComment) => {
        setMovieComment(dataComment)
      })
      .catch((err) => {
        console.log('Errore', err)
      })
  }

  useEffect(() => {
    fetchMovieDetails()
  }, [movie])

  useEffect(() => {
    fetchMovieComments()
  }, [movie])

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src={movieDetail.Poster} />
            <Card.Body>
              <Card.Title>Titolo : {movieDetail.Title}</Card.Title>
              <Card.Text>Anno di uscita: {movieDetail.Year}</Card.Text>
              <Card.Text>Tipo: {movieDetail.Type}</Card.Text>
              <Card.Text>"{movieDetail.comment}"</Card.Text>
              <Card.Text>Rate: {movieDetail.rate}</Card.Text>
              <Button variant="primary">Home</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
export default MovieDetails
