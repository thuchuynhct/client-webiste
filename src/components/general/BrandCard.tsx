import "../../style/general/BrandCard.scss"

import { IconType } from "react-icons/lib";
import { GrAmazon } from "react-icons/gr"
import { FaAirbnb, FaEbay } from "react-icons/fa"
import { BsPaypal, BsSkype } from "react-icons/bs"
import { SiNike } from "react-icons/si"

export type BrandType = {
    id: number,
    name: string,
    logo: IconType
}
export const brand: BrandType[] = [
    {
        id: 0,
        name: "Amazon",
        logo: GrAmazon
    },
    {
        id: 1,
        name: "Airbnb",
        logo: FaAirbnb
    },
    {
        id: 2,
        name: "Nike",
        logo: SiNike
    },
    {
        id: 3,
        name: "Paypal",
        logo: BsPaypal
    },
    {
        id: 4,
        name: "Skype",
        logo: BsSkype
    },
]


function BrandCard({ className }: { className?: string }) {
    return (
        <div className={`brand__card ${className ?? ""}`}>
            <div className="brand__card__user">
                <h3>100.000+</h3>
                <p>Finsweet Users</p>
            </div>
            <div className="brand__card__logo">
                {
                    brand.map(item => {
                        return (
                            <div key={item.id} className="brand__card__logo__item">
                                <item.logo size={30} />
                                <h6>{item.name}</h6>
                            </div>
                        )
                    })

                }
            </div>

        </div>
    )
}

export default BrandCard