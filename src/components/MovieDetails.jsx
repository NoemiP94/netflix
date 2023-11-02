import { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
// import { useNavigate, useParams } from 'react-router-dom'

const MovieDetails = ({ movieTitle }) => {
  const [movieDetail, setMovieDetail] = useState(null)
  const [movieComment, setMovieComment] = useState([])
  const params = useParams()
  const movieIndex = params.elementId

  const fetchMovieDetails = () => {
    fetch('https://www.omdbapi.com/?apikey=1e18e07&i=' + movieIndex)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Problema nel recupero dei dati')
        }
      })
      .then((data) => {
        console.log('dettagli film', data)

        setMovieDetail(data)
      })
      .catch((err) => {
        console.log('Errore', err)
      })
  }

  const fetchMovieComments = () => {
    fetch('https://striveschool-api.herokuapp.com/api/comments/' + movieIndex, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQzZDRjZGI0MDZiZTAwMTRiN2I3NmQiLCJpYXQiOjE2OTg5NDQyMDYsImV4cCI6MTcwMDE1MzgwNn0.6LjEzlDXCd4892Vp7XpsKZ5bTr_8VYOmG9S_Y2uGT0Q',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Problema nel recupero dei dati')
        }
      })
      .then((movieComments) => {
        setMovieComment(movieComments)
      })
      .catch((err) => {
        console.log('Errore', err)
      })
  }

  useEffect(() => {
    fetchMovieDetails()
    fetchMovieComments()
  }, [movieTitle])

  return (
    <div
      data-bs-theme="dark"
      className="d-flex justify content-center m-5 text-light"
    >
      {movieDetail && (
        <>
          <div>
            <img
              fluid
              variant="top"
              src={movieDetail.Poster}
              alt="movie"
              className="w-75"
            />
          </div>
          <div className="ms-3 w-50">
            <div>
              <h3>Title : {movieDetail.Title}</h3>
            </div>
            <div>
              <p>Released: {movieDetail.Released}</p>
              <p>Runtime: {movieDetail.Runtime}</p>
              <p>Genre: {movieDetail.Genre}</p>
              <p>Director: {movieDetail.Director}</p>
              <p>Writer: {movieDetail.Writer}</p>
              <p>Actors: {movieDetail.Actors}</p>
              <p>Language: {movieDetail.Language}</p>
              <p>Country: {movieDetail.Country}</p>
              <p>Awards: {movieDetail.Awards}</p>
              <p>Plot: {movieDetail.Plot}</p>
            </div>
          </div>
          {movieComment && (
            <ListGroup>
              {movieComment.map((comment) => (
                <ListGroup.Item key={comment._id}>
                  {comment.rate} - {comment.comment}
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </>
      )}
    </div>
  )
}
export default MovieDetails
