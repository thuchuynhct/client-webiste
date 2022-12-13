import { useState } from "react"
import { productsItem, productsType } from "../../data/products"
import "../../style/work/WorkProducts.scss"
import ArrowButton from "../general/ArrowButton"

function WorkProducts() {
    const [menuType, setmenuType] = useState<string>(productsType[0]);
    return (
        <section className="work__products">
            <div className="container">
                <ul className="work__products__menu">
                    {
                        productsType.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className={`${menuType === item ? "active" : ""}`}
                                    onClick={() => setmenuType(item)}
                                >
                                    <label>{item}</label>
                                </li>
                            )
                        })
                    }
                </ul>

                <div className="work__products__card">
                    {
                        productsItem.filter(s => menuType === productsType[0] || s.type === menuType).slice(-6).map(item => {
                            return (
                                <div key={item.id} className="work__products__card__item">
                                    <div className="work__products__card__item__img">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="work__products__card__item__content">
                                        <h3>{item.title}</h3>
                                        {item.desciption && <p>{item.desciption}</p>}
                                        <ArrowButton
                                            to=""
                                            text="View Portfolio"
                                            color="#282938"
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

export default WorkProducts    