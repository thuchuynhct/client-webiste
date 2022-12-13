import { Link } from "react-router-dom"
import ArrowButton from "./ArrowButton"
import "../../style/general/Hero.scss"

export type HeroType = {
    title: string,
    desciption: string,
    img: string,
    button: { name: string, link: string },
    arrow?: { name: string, link: string }
}

function Hero({ hero }: { hero: HeroType }) {
    return (
        <div className='hero'>
            <div className="hero__content">
                <h1>{hero.title}</h1>
                <p>{hero.desciption}</p>
                <div className="hero__content__link">
                    <Link className="btn btn-yellow"
                        to={hero.button.link}>
                        {hero.button.name}
                    </Link>
                    {
                        hero.arrow && <ArrowButton
                            to={hero.arrow.link}
                            text={hero.arrow.name}
                            color="#fff"
                        />
                    }
                </div>
            </div>
            <div className="hero__img">
                <img src={hero.img} />
            </div>
        </div>
    )
}

export default Hero