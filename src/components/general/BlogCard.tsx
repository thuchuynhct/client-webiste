import "../../style/general/BlogCard.scss"
import ArrowButton from "./ArrowButton"

import blog1 from "../../assets/img/blog-1.png"
import blog2 from "../../assets/img/blog-2.png"
import blog3 from "../../assets/img/blog-3.png"
import blog4 from "../../assets/img/blog-4.png"
import blog5 from "../../assets/img/blog-5.png"
import blog6 from "../../assets/img/blog-6.png"

const content = (img: string) => "<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>" +
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>" +
    "<h3>Ut enim ad minim veniam, quis nostrud. </h3>" +
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>" +
    "<ul>" +
    "<li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p></li>" +
    "<li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p></li>" +
    "<li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p></li>" +
    "</ul>" +
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>" +
    `<img src=${img} alt="" />` +
    "<h3>Ut enim ad minim veniam, quis nostrud.</h3>" +
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>";

export type BlogType = {
    id: number,
    time: string,
    title: string,
    desciption: string,
    img: string,
    content: string
}
export const blogItem: BlogType[] = [
    {
        id: 0,
        time: "19 Jan 2022",
        title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
        desciption: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
        img: blog1,
        content: content(blog1)
    },
    {
        id: 1,
        time: "19 Jan 2022",
        title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
        desciption: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
        img: blog2,
        content: content(blog2)
    },
    {
        id: 2,
        time: "19 Jan 2022",
        title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
        desciption: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
        img: blog3,
        content: content(blog3)
    },
    {
        id: 3,
        time: "19 Jan 2022",
        title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
        desciption: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
        img: blog4,
        content: content(blog4)
    },
    {
        id: 4,
        time: "19 Jan 2022",
        title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
        desciption: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
        img: blog5,
        content: content(blog5)
    },
    {
        id: 5,
        time: "19 Jan 2022",
        title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
        desciption: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
        img: blog6,
        content: content(blog6)
    }
]

function BlogCard({ blogList, className }: { blogList: BlogType[], className?: string }) {
    return (
        <div className={`blog__card ${className ?? ""}`}>
            {
                blogList.map(item => {
                    return (
                        <div key={item.id} className="blog__card__item">
                            <div className="blog__card__item__img">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="blog__card__item__content">
                                <p>{item.time}</p>
                                <h6>{item.title}</h6>
                                <p>{item.desciption}</p>
                            </div>
                            <ArrowButton to={`/read/${item.id}`} text="Read More" color="#333" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BlogCard