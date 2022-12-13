import project1 from "../assets/img/project-1.png"
import project2 from "../assets/img/project-2.png"
import project3 from "../assets/img/project-3.png"
import project4 from "../assets/img/project-4.png"
import project5 from "../assets/img/project-5.png"
import project6 from "../assets/img/project-6.png"
import project7 from "../assets/img/project-7.png"
import project8 from "../assets/img/project-8.png"
import project9 from "../assets/img/project-9.png"


export type ProductType = {
    id: number,
    type: string,
    title: string,
    desciption?: string,
    img: string
}

enum eType {
    All,
    UIDesign,
    WebflowDesign,
    FigmaDesign
}
export const productsType = [
    "All",
    "UI Design",
    "Webflow Design",
    "Figma Design"
]

export const productsItem: ProductType[] = [
    {
        id: 0,
        type: productsType[eType.All],
        img: project1,
        title: "Workhub office Webflow Webflow Design",
        desciption: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam "
    },
    {
        id: 1,
        type: productsType[eType.All],
        img: project2,
        title: "Unisaas Website Design",
        desciption: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam "
    },
    {
        id: 2,
        type: productsType[eType.All],
        img: project3,
        title: "Inspire, Innovate, Share",
        desciption: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam "
    },
    {
        id: 3,
        type: productsType[eType.UIDesign],
        img: project4,
        title: "Template 1",
        desciption: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
    },
    {
        id: 4,
        type: productsType[eType.FigmaDesign],
        img: project5,
        title: "Template 2",
        desciption: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
    },
    {
        id: 5,
        type: productsType[eType.UIDesign],
        img: project6,
        title: "Template 3",
        desciption: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
    },
    {
        id: 6,
        type: productsType[eType.WebflowDesign],
        img: project7,
        title: "Template 4",
        desciption: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
    },
    {
        id: 7,
        type: productsType[eType.FigmaDesign],
        img: project8,
        title: "Template 5",
        desciption: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
    },
    {
        id: 8,
        type: productsType[eType.WebflowDesign],
        img: project9,
        title: "Template 6",
        desciption: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam "
    },
]