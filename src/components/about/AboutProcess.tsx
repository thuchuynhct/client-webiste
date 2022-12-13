import "../../style/about/AboutProcess.scss"
const processItem = [
    {
        id: 0,
        title: "Planning",
        desciption: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
    },
    {
        id: 1,
        title: "Conception",
        desciption: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
    },
    {
        id: 2,
        title: "Design",
        desciption: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
    },
    {
        id: 3,
        title: "Development",
        desciption: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
    },
]
function AboutProcess() {
    return (
        <section className="about__process">
            <div className="container">
                <div className="about__process__heading">
                    <h2>The process we follow</h2>
                </div>
                <div className="about__process__card">
                    {
                        processItem.map(item => {
                            return (
                                <div key={item.id} className="about__process__card__item">
                                    <div className="about__process__card__item__top">
                                        <div className="circle"></div>
                                        <div className="line"></div>
                                    </div>
                                    <div className="about__process__card__item__bottom">
                                        <h6>{item.title}</h6>
                                        <p>{item.desciption}</p>
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

export default AboutProcess