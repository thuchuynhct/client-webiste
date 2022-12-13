import "../../style/blog/BlogPost.scss"
import BlogCard, { blogItem } from "../general/BlogCard"

function BlogPost() {
    return (
        <section className="blog__post">
            <div className="container">
                <div className="blog__post__heading">
                    <h2>Our Blog</h2>
                </div>
                <BlogCard blogList={blogItem.slice(-6)} />
            </div>
        </section>
    )
}

export default BlogPost