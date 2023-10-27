import { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

class Movies extends Component {
  showMovies = () => {
    fetch('https://www.omdbapi.com/?apikey=1e18e07&s=starwars')
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
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.showMovies()
  }

  render() {
    return (
      <Container fluid className="bg-dark text-light">
        <h4>Trending Now</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {/* {this.data.search.map((movie) => {
            return (
              <Col key={movie.imdbId} className="mb-2 text-center px-1">
                <div>
                  <img src={movie.poster} alt={movie.title} className="grow" />
                </div>
              </Col>
            )
          })} */}
        </Row>
      </Container>
    )
  }
}
export default Movies
