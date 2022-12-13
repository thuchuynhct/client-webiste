import "../../style/about/AboutWhoWeAre.scss"
import aboutImg from "../../assets/img/about-2.png"

function AboutWhoWeAre() {
    return (
        <section className='about__us'>
            <div className='container'>
                <div className="about__us__heading">
                    <h6>Who we are</h6>
                </div>
                <div className="about__us__content">
                    <div className="about__us__content__item">
                        <h3>Goal focussed</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="about__us__content__item">
                        <h3>Continuous improvement</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div className="about__us__img">
                    <img src={aboutImg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default AboutWhoWeAre