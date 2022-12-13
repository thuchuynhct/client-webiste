import "../../style/home/HomeContact.scss"
import ArrowButton from "../general/ArrowButton"

function HomeContact() {
    return (
        <section className="home__contact">
            <div className="home__contact__container container">
                <div className="home__contact__left">
                    <h2>Building stellar websites for early startups</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                </div>
                <form className="home__contact__right">
                    <h5>Send inquiry</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <input placeholder="Your Name" required type="text" />
                    <input placeholder="Email" required type="text" />
                    <input placeholder="Paste your Figma design URL" required type="text" />
                    <div>
                        <button type="submit" className="btn-yellow">Send an Inquiry</button>
                    </div>
                    <ArrowButton className="text__center" to="/contact" text="Get in touch with us" color="#fff" />
                </form>
            </div>
        </section>
    )
}

export default HomeContact