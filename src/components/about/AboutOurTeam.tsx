import "../../style/about/AboutOurTeam.scss"
import person1 from "../../assets/img/person-1.png"
import person2 from "../../assets/img/person-2.png"
import person3 from "../../assets/img/person-3.png"
import person4 from "../../assets/img/person-4.png"

const ourTeam = [
    {
        id: 0,
        name: "John Smith",
        position: "CEO",
        avatar: person1
    },
    {
        id: 1,
        name: "Simon Adams",
        position: "CTO",
        avatar: person2
    },
    {
        id: 2,
        name: "Paul Jones",
        position: "Design Lead",
        avatar: person3
    },
    {
        id: 3,
        name: "Sara Hardin",
        position: "Project Manager",
        avatar: person4
    },
]
function AboutOurTeam() {
    return (
        <section className="about__team">
            <div className="container">
                <div className="about__team__heading">
                    <h2>Meet our team</h2>
                </div>
                <div className="about__team__card">
                    {
                        ourTeam.map(item => {
                            return (
                                <div key={item.id} className="about__team__card__item">
                                    <img src={item.avatar} alt="" />
                                    <div>
                                        <h6>{item.name}</h6>
                                        <p>{item.position}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default AboutOurTeam