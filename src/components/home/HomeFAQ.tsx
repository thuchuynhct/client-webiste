import { Link } from "react-router-dom"
import "../../style/home/HomeFAQ.scss"
import { FiPlus } from "react-icons/fi";
import { useState } from "react";

const faqItem = [
    {
        id: 0,
        title: "How much time does it take?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 1,
        title: "What is your class naming convention?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 2,
        title: "How do you communicate?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 3,
        title: "I have a bigger project. Can you handle it?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 4,
        title: "What is your class naming convention?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },

]
function HomeFAQ() {
    return (
        <section className="home__faq">
            <div className="home__faq__container container">
                <div className="home__faq__heading">
                    <h3>Frequently asked questions</h3>
                    <Link onClick={() => window.scrollTo(0, 0)} to="/contact">
                        Contact us for more info
                    </Link>
                </div>
                <div className="home__faq__question">
                    {
                        faqItem.map(item => <HomeFAQItem key={item.id} order={item.id + 1} title={item.title} content={item.content} />)
                    }
                </div>
            </div>
        </section>
    )
}

function HomeFAQItem({ order, title, content }: { order: number, title: string, content: string }) {
    const [isToogle, setIsToggle] = useState<boolean>(false);
    return (
        <div className="home__faq__question__item">
            <div className="home__faq__question__item__order">
                <h6>0{order}</h6>
            </div>
            <div className="home__faq__question__item__content">
                <h6>{title}</h6>
                <p className={`${isToogle ? "active" : ""}`}>{content}</p>
            </div>
            <button onClick={() => setIsToggle(!isToogle)} className={`home__faq__question__item__toogle${isToogle ? " rotate" : ""}`}>
                <FiPlus size={30} />
            </button>
        </div>
    )
}

export default HomeFAQ