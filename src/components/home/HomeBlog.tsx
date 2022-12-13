import "../../style/home/HomeBlog.scss"
import BlogCard, { blogItem } from "../general/BlogCard"

function HomeBlog() {
    return (
        <section className="home__blog">
            <div className="container">
                <div className="home__blog__heading">
                    <h2>Our blog</h2>
                </div>
                <BlogCard blogList={blogItem.slice(0, 3)} />
            </div>
        </section>
    )
}

export default HomeBlog