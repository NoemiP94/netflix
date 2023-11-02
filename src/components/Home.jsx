import MovieDetails from './MovieDetails'
import Movies from './Movies'
import UpperBar from './UpperBar'

const Home = () => {
  return (
    <div>
      <UpperBar />
      <Movies
        saga="The Lord of the Rings"
        movieTitle="the%20lord%20of%20the%20rings"
      />
      <Movies saga="Doctor Who" movieTitle="doctor%20who" />
      <Movies saga="Marvel Cinematic Universe" movieTitle="marvel" />
      {/* <MovieDetails /> */}
    </div>
  )
}

export default Home
