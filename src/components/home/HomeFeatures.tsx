import "../../style/home/HomeFeatures.scss";
import FeaturesCard, { featuresItem } from "../general/FeaturesCard";

function HomeFeatures() {
    return (
        <section className='home__features'>
            <div className='container'>
                <div className='home__features__heading'>
                    <label>Features</label>
                    <h2>Design that solves problems, one product at a time</h2>
                </div>
                <FeaturesCard featuresList={featuresItem.slice(0, 6)} />
            </div>
        </section>
    )
}

export default HomeFeatures
