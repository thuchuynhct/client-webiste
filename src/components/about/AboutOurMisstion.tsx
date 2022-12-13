import "../../style/about/AboutOurMisstion.scss"
import PictureCard, { pictureItem } from "../general/PictureCard"
function AboutOurMisstion() {
    return (
        <section className="about__mission">
            <div className="container">
                <PictureCard pictureList={pictureItem.slice(-2)} />
            </div>
        </section>
    )
}

export default AboutOurMisstion