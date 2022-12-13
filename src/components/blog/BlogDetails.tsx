import "../../style/blog/BlogDetails.scss"
import { BlogType } from "../general/BlogCard";

function BlogDetails({ post }: { post: BlogType }) {
    return (
        <section className="blog__details">
            <div className="max__w__850">
                <div className="blog__details__content"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                >

                </div>
            </div>
        </section>
    )
}

export default BlogDetails