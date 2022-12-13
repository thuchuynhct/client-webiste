import "../../style/work/WorkHero.scss"
import {
    BsFacebook,
    BsTwitter,
    BsInstagram,
    BsYoutube
} from 'react-icons/bs'

function WorkHero() {
    return (
        <section className="work__hero">
            <div className="container">
                <div className="work__hero__heading">
                    <label> What we created</label>
                    <h2>Our Work Portfolio</h2>
                    <p>We help teams create great digital products by providing them with tools and technology <br /> to make the design-to-code process universally accessible.</p>
                </div>
                <div className="work__hero__social">
                    <BsFacebook size={25} />
                    <BsTwitter size={25} />
                    <BsInstagram size={25} />
                    <BsYoutube size={25} />
                </div>
            </div>
        </section>
    )
}

export default WorkHero
