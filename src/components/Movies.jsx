import { Component } from 'react'
import { Container, Row, Col, Spinner, Alert, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Movies extends Component {
  state = {
    Search: [],
    isLoading: true,
    isError: false,
  }

  showMovies = () => {
    fetch('https://www.omdbapi.com/?apikey=1e18e07&s=' + this.props.movieTitle)
      .then((res) => {
        if (res.ok) {
          console.log(res)
          return res.json()
        } else {
          throw new Error('ERRORE NEL RECUPERO DEI DATI')
        }
      })
      .then((data) => {
        console.log('dati recuperati', data)
        this.setState((first) => ({
          Search: [
            ...first.Search,
            ...data.Search.map((movie) => ({
              Title: movie.Title,
              Year: movie.Year,
              imdbId: movie.imdbID,
              Type: movie.Type,
              Poster: movie.Poster,
            })),
          ],
          isLoading: false,
        }))
      })
      .catch((err) => {
        console.log(err)
        this.setState({
          isLoading: false,
          isError: true,
        })
      })
  }

  componentDidMount() {
    this.showMovies()
  }

  render() {
    return (
      <Container fluid className="bg-dark text-light p-3">
        <h4>{this.props.saga}</h4>
        {this.state.isLoading && (
          <div className="text-center my-2">
            <Spinner animation="border" variant="danger" />
          </div>
        )}
        {this.state.isError && (
          <Alert variant="danger" className="text-center">
            Errore!
          </Alert>
        )}
        <Carousel>
          <Carousel.Item>
            <Row className="justify-content-center row-cols-2 row-cols-md-6 mb-4 pt-3">
              {this.state.Search.slice(0, 5).map((movie) => {
                return (
                  <Col
                    key={movie.imdbId}
                    className="col-md-4 col-lg-4 col-xl-2 mb-2 text-center"
                  >
                    <Link to={'/movie-detail/' + movie.imdbId}>
                      <img
                        src={movie.Poster}
                        alt={movie.Title}
                        className="grow"
                        width="250"
                        height="300"
                      />
                    </Link>
                  </Col>
                )
              })}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="justify-content-center row-cols-2 row-cols-md-6 mb-4 pt-3">
              {this.state.Search.slice(5, 10).map((movie) => {
                return (
                  <Col
                    key={movie.imdbId}
                    className="col-md-4 col-lg-4 col-xl-2 mb-2 text-center px-1"
                  >
                    <Link to={'/movie-detail/' + movie.imdbId}>
                      <img
                        src={movie.Poster}
                        alt={movie.Title}
                        className="grow"
                        width="250"
                        height="300"
                      />
                    </Link>
                  </Col>
                )
              })}
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    )
  }
}
export default Movies
// export default RouterWrapper(Movies)
