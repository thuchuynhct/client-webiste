import "../../style/features/FeaturesBenefits.scss"
import FeaturesCard, { featuresItem } from "../general/FeaturesCard"

function FeaturesBenefits() {
    return (
        <section className='features__benefit'>
            <div className="container">
                <div className="features__benefit__heading">
                    <h2> The benefits of working <br /> with our team</h2>
                </div>
                <FeaturesCard
                    className="mb-0"
                    featuresList={featuresItem.slice(0, -3)}
                    bgColor="#F4F6FC"
                />
            </div>
        </section>
    )
}

export default FeaturesBenefits
