import PictureCard, { pictureItem } from "../general/PictureCard"
import "../../style/features/FeaturesService.scss"
import HomeFAQ from "../home/HomeFAQ"

function FeaturesService() {
    return (
        <section className="features__service">
            <PictureCard
                className="features__service__card container"
                pictureList={pictureItem.slice(-4)}
            />
            <HomeFAQ />

        </section>
    )
}

export default FeaturesService
