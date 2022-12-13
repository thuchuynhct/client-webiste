import { FaPlay } from "react-icons/fa"
import { Link } from "react-router-dom"
import "../../style/pricing/PricingPurchase.scss"


export const pricingItem = [
    {
        id: 0,
        type: "Per Design",
        price: 299,
        packName: "Landing Page",
        desciption: "When you’re ready to go beyond prototyping in Figma,",
        features: [
            { name: "All limited links", active: true },
            { name: "Own analytics platform", active: true },
            { name: "Chat support", active: true },
            { name: "Optimize hashtags", active: false },
            { name: "Unlimited users", active: false },
        ],
        button: { name: "Get Started", link: "/contact" }
    },
    {
        id: 1,
        type: "Multi Design",
        price: 399,
        packName: "Website Page",
        desciption: "When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.",
        features: [
            { name: "All limited links", active: true },
            { name: "Own analytics platform", active: true },
            { name: "Chat support", active: true },
            { name: "Optimize hashtags", active: true },
            { name: "Unlimited users", active: true },
        ],
        button: { name: "Get Started", link: "/contact" }
    },
    {
        id: 2,
        type: "Per Design",
        price: 499,
        packName: "Complex Project",
        desciption: "When you’re ready to go beyond prototyping in Figma,",
        features: [
            { name: "All limited links", active: true },
            { name: "Own analytics platform", active: true },
            { name: "Chat support", active: true },
            { name: "Optimize hashtags", active: true },
            { name: "Unlimited users", active: true },
            { name: "Assist and Help", active: true },
        ],
        button: { name: "Contact us", link: "/contact" }
    }
]

export default function PricingPurchase(): JSX.Element {
    return (
        <section className="pricing">
            <div className="container">
                <div className="pricing__heading">
                    <h2>Our Pricing Plans</h2>
                    <p>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
                </div>
                <div className="pricing__card">
                    {
                        pricingItem.map(item => {
                            return (
                                <div key={item.id} className="pricing__card__item">
                                    <div>
                                        <div className="pricing__card__item__price">
                                            <h3>${item.price}</h3>
                                            <p>{item.type}</p>
                                        </div>
                                        <div className="pricing__card__item__desciption">
                                            <h6>{item.packName}</h6>
                                            <p>{item.desciption}</p>
                                        </div>
                                    </div>
                                    <ul className="pricing__card__item__features">
                                        {
                                            item.features.map((feature, index) => {
                                                return (
                                                    <li key={index} className={`${feature.active ? "icon__active" : "icon__inactive"}`}>
                                                        <FaPlay size={20} />
                                                        <p>{feature.name}</p>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <div className="pricing__card__item__button">
                                        <Link onClick={() => window.scrollTo(0, 0)} className="btn btn-black" to={item.button.link}>{item.button.name}</Link>
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

// export default function PricingPurchase(){
//     return<></>
// }