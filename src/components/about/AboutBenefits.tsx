import "../../style/about/AboutBenefits.scss"
import FeaturesCard, { featuresItem } from "../general/FeaturesCard"
import BrandCard from "../general/BrandCard"

function AboutBenefits() {
    return (
        <section className="about__benefits">
            <div className="container">
                <div className="about__benefits__heading">
                    <h2>The benefits of working with us</h2>
                </div>
                <FeaturesCard
                    featuresList={featuresItem.slice(-3)}
                    bgColor="#F4F6FC"
                />
                <BrandCard />
            </div>
        </section>
    )
}

export default AboutBenefits