import Movies from './Movies'
import UpperBar from './UpperBar'

const TvShows = () => {
  return (
    <div>
      <UpperBar />
      <Movies
        saga="The Lord of the Rings"
        movieTitle="the%20lord%20of%20the%20rings"
      />
      <Movies saga="Doctor Who" movieTitle="doctor%20who" />
      <Movies saga="Marvel Cinematic Universe" movieTitle="marvel" />
    </div>
  )
}

export default TvShows
