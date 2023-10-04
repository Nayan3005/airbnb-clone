 import Card from "./components/Card"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import data from "./data"
import './index.css'

export default function App(){
  const heroData = data.map(hero => {
    return <Card
      key={hero.id}
      title={hero.title}
      description={hero.description}
      price={hero.price}
      img = {hero.coverImg}
      rating = {hero.stats.rating}
      reviewcount = {hero.stats.reviewCount}
      location ={hero.location}
      openspots = {hero.openSpots}
    />
  })
  return(
    <div>
      <Navbar/>
      <Hero/>
      <section className="cards-list">
                {heroData}
            </section>
    </div>
  )
}