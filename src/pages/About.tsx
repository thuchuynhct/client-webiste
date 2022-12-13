import React from 'react'
import AboutBenefits from '../components/about/AboutBenefits'
import AboutHero from '../components/about/AboutHero'
import AboutOurMisstion from '../components/about/AboutOurMisstion'
import AboutOurTeam from '../components/about/AboutOurTeam'
import AboutProcess from '../components/about/AboutProcess'
import AboutWhoWeAre from '../components/about/AboutWhoWeAre'

function About() {
  return (
    <main>
      <AboutHero />
      <AboutWhoWeAre />
      <AboutProcess />
      <AboutOurMisstion />
      <AboutBenefits />
      <AboutOurTeam />
    </main>
  )
}

export default About
