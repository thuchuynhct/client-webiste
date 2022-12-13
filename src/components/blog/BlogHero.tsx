import "../../style/blog/BlogHero.scss"
import heroImg from "../../assets/img/blog-hero.png"
import { Link } from "react-router-dom"

function BlogHero({ hero = true }: { hero?: boolean }) {
    return (
        <section className="blog__hero">
            <div className="container">
                <h2>A UX Case Study on Creating a Studious Environment for Students</h2>
                <p className="blog__hero__info">Andrew Jonson Posted on 27th January 2021</p>
                <img src={heroImg} alt="" />
                {
                    hero && (
                        <>
                            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
                            <Link onClick={() => window.scrollTo(0, 0)} to="/read/1">Read more</Link>
                        </>
                    )
                }
            </div>
        </section>
    )
}

export default BlogHero