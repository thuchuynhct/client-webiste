import "../../style/general/FeaturesCard.scss"
import { HiUserGroup } from "react-icons/hi"
import { BsFillCheckCircleFill, BsQuestionCircleFill } from "react-icons/bs"
import { RiPencilRuler2Fill } from "react-icons/ri"
import { FaStopwatch } from "react-icons/fa"
import { MdNoteAlt } from "react-icons/md"
import { IconType } from "react-icons/lib"


export type FeatureItemType = {
    id: number,
    icon: IconType,
    title: string,
    content: string
}

export const featuresItem: FeatureItemType[] = [
    {
        id: 0,
        icon: HiUserGroup,
        title: "Uses Client First",
        content: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
    },
    {
        id: 1,
        icon: BsFillCheckCircleFill,
        title: "Two Free Revision Round",
        content: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
    },
    {
        id: 2,
        icon: RiPencilRuler2Fill,
        title: "Template Customization",
        content: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
    },
    {
        id: 3,
        icon: BsQuestionCircleFill,
        title: "24/7 Support",
        content: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
    },
    {
        id: 4,
        icon: FaStopwatch,
        title: "Quick Delivery",
        content: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
    },
    {
        id: 5, icon: MdNoteAlt,
        title: "Hands-on approach",
        content: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
    },
]

function FeaturesCard({ featuresList, className, bgColor = "#fff" }: { featuresList: FeatureItemType[], className?: string, bgColor?: string }) {
    return (
        <div className={`features__card ${className ?? ""}`}>
            {
                featuresList.map(item => {
                    return (
                        <div key={item.id} className='features__card__item' style={{ background: bgColor }}>
                            <item.icon size={32} />
                            <h6>{item.title}</h6>
                            <p>{item.content}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FeaturesCard