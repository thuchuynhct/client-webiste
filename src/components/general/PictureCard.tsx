import "../../style/general/PictureCard.scss"

import about1 from "../../assets/img/about-1.png"
import about3 from "../../assets/img/about-3.png"
import about4 from "../../assets/img/about-4.png"
import about5 from "../../assets/img/about-5.png"
import about6 from "../../assets/img/about-6.png"
import about7 from "../../assets/img/about-7.png"
import about8 from "../../assets/img/about-8.png"

export type ImageCardType = {
    id: number,
    name: string,
    title: string,
    desciption: string,
    img: string
}
export const pictureItem: ImageCardType[] = [
    {
        id: 0,
        name: "About us",
        title: "Our designs solve problems",
        desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        img: about1
    },
    {
        id: 1,
        name: "Our Mission ",
        title: "Inspire, Innovate, Share",
        desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        img: about3
    },
    {
        id: 2,
        name: "Our Vision",
        title: "Laser focus",
        desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        img: about4
    },
    {
        id: 3,
        name: "Use Client-first",
        title: "Top agencies and freelancers around the world use",
        desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        img: about5
    },
    {
        id: 4,
        name: "Free Revision Rounds",
        title: "Get free Revisions and one week of free maintenance",
        desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        img: about6
    },
    {
        id: 5,
        name: "24/7 Support",
        title: "Working with us, you will be getting 24/7 priority support",
        desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        img: about7
    },
    {
        id: 6,
        name: "Quick Delivery",
        title: "Guranteed 1 week delivery for standard five pager website",
        desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        img: about8
    }
]

function PictureCard({ pictureList, hero = false, className }: { pictureList: ImageCardType[], hero?: boolean, className?: string }) {
    return (
        <div className="picture__card">
            {
                pictureList.map(item => {
                    return (
                        <div key={item.id} className={`picture__card__item ${className ?? ""}`}>
                            <div className="picture__card__item__left">
                                <h6 style={
                                    { fontSize: hero ? "1.8rem" : "1.6rem" }
                                }>
                                    {item.name}
                                </h6>
                                {
                                    hero ? <h1>{item.title}</h1>
                                        : <h3>{item.title}</h3>
                                }
                                <p>{item.desciption}</p>
                            </div>
                            <div className="picture__card__item__right">
                                <img className={`${hero ? "" : "img__small"}`} src={item.img} alt="" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PictureCard