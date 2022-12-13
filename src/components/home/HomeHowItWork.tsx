import "../../style/home/HomeHowItWork.scss"
import ArrowButton from "../general/ArrowButton"
import workIcon from "../../assets/icon/work-icon.svg"

const workItem = [
    {
        id: 0,
        title: "Strategy",
        content: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
    },
    {
        id: 1,
        title: "Wireframing",
        content: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
    },
    {
        id: 2,
        title: "Design",
        content: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
    },
    {
        id: 3,
        title: "Development",
        content: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
    },
]
function HomeHowItWork() {
    return (
        <section className="home__work">
            <div className="home__work__container container">
                <div className="home__work__heading">
                    <h2>How we work</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <ArrowButton
                        className="home__work__heading__btn"
                        to={"/contact"}
                        text="Get in touch with us"
                        color="#2405F2"
                    />
                </div>

                <div className="home__work__cards">
                    {
                        workItem.map(item => {
                            return (
                                <div key={item.id} className="home__work__cards__item">
                                    <img src={workIcon} alt="" />
                                    <label>0{item.id + 1}</label>
                                    <div>
                                        <h5>{item.title}</h5>
                                        <p>{item.content}</p>
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

export default HomeHowItWork