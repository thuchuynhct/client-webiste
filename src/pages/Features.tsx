import FeaturesBenefits from '../components/features/FeaturesBenefits'
import FeaturesBrand from '../components/features/FeaturesBrand'
import FeaturesHero from '../components/features/FeaturesHero'
import FeaturesService from '../components/features/FeaturesService'

function Features() {
  return (
    <main>
      <FeaturesHero />
      <FeaturesBrand />
      <FeaturesBenefits />
      <FeaturesService />
    </main>
  )
}

export default Features
