import { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
// import { useNavigate, useParams } from 'react-router-dom'

const MovieDetails = ({ movieTitle }) => {
  const [movieDetail, setMovieDetail] = useState(null)
  const [movieComment, setMovieComment] = useState(null)
  const params = useParams()
  const movieIndex = params.elementId

  const fetchMovieDetails = () => {
    fetch('https://www.omdbapi.com/?apikey=1e18e07&s=' + movieTitle.imdbId)
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
    fetch(
      'https://striveschool-api.herokuapp.com/api/comments/' + movieTitle.imdbId
    )
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
  }, [movieTitle])

  useEffect(() => {
    fetchMovieComments()
  }, [movieTitle])

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src={movieDetail[movieIndex].Poster} />
            <Card.Body>
              <Card.Title>Titolo : {movieDetail[movieIndex].Title}</Card.Title>
              <Card.Text>
                Anno di uscita: {movieDetail[movieIndex].Year}
              </Card.Text>
              <Card.Text>Tipo: {movieDetail[movieIndex].Type}</Card.Text>
              <Card.Text>"{movieComment[movieIndex].comment}"</Card.Text>
              <Card.Text>Rate: {movieComment[movieIndex].rate}</Card.Text>
              <Button variant="primary">Home</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
export default MovieDetails
