import { productsItem } from "../../data/products"
import "../../style/home/HomeOurWork.scss"
import ArrowButton from "../general/ArrowButton"

function HomeOurWork() {
    return (
        <section className='home__project'>
            <div className='container'>
                <div className="home__project__heading">
                    <h2>View our projects</h2>
                    <ArrowButton
                        to="/work"
                        text="View More"
                        color="#282938"
                    />
                </div>
                <div className="home__project__cards">
                    {
                        productsItem.slice(0, 3).map(item => {
                            return (
                                <div key={item.id}
                                    className="home__project__cards__item"
                                    style={{ background: `url(${item.img})` }}
                                >
                                    <div className="home__project__cards__item__sidebar">
                                        <h6>{item.title}</h6>
                                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                                        <ArrowButton
                                            to={"/products/" + item.id}
                                            text="View project"
                                            color="#FCD980"
                                        />
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

export default HomeOurWork