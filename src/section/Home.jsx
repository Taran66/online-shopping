import Carousel from "../components/Carousel"
import Navbar from "../components/Navbar"
import NewArrival from "../components/NewArrival"

const Home = () => {
  return (
    <div>
        <div className="h-screen">
          <Navbar />
          <Carousel />
        </div>
        <div>
          <NewArrival />
        </div>
    </div>
  )
}

export default Home