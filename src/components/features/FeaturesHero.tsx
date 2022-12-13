import Hero, { HeroType } from "../general/Hero"
import logo from "../../assets/img/features-hero.png"
import "../../style/features/FeaturesHero.scss"

const featuresHero: HeroType = {
    title: "All the features you need",
    desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: logo,
    button: { name: "View Pricing", link: "" }
}

function FeaturesHero() {
    return (
        <section className='features__hero'>
            <div className="container">
                <Hero hero={featuresHero} />
            </div>
        </section>
    )
}

export default FeaturesHero
