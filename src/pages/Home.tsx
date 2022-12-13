import HomeBlog from '../components/home/HomeBlog'
import HomeContact from '../components/home/HomeContact'
import HomeFAQ from '../components/home/HomeFAQ'
import HomeFeatures from '../components/home/HomeFeatures'
import HomeHero from '../components/home/HomeHero'
import HomeHowItWork from '../components/home/HomeHowItWork'
import HomeOurWork from '../components/home/HomeOurWork'
import HomeTestimonials from "../components/home/HomeTestimonials"

function Home() {
  return (
    <main>
      <HomeHero />
      <HomeHowItWork />
      <HomeOurWork />
      <HomeFeatures />
      <HomeTestimonials />
      <HomeFAQ />
      <HomeContact />
      <HomeBlog />
    </main>
  )
}

export default Home
