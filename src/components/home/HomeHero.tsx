import "../../style/home/HomeHero.scss"
import logo from "../../assets/img/home-hero.png"
import { Link } from "react-router-dom"
import Hero, { HeroType } from "../general/Hero"


const homeHero: HeroType = {
    title: "Building stellar websites for early startups",
    desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    img: logo,
    button: { name: "View our work", link: "work" },
    arrow: { name: "View Pricing", link: "pricing" }
}

function HomeHero() {
    return (
        <section className='home__hero'>
            <div className="container">
                <Hero hero={homeHero} />
            </div>
        </section>
    )
}

export default HomeHero