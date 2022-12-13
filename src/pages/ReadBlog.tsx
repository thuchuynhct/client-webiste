import { useParams } from 'react-router-dom'
import BlogDetails from '../components/blog/BlogDetails'
import BlogHero from '../components/blog/BlogHero'
import { blogItem } from '../components/general/BlogCard'

function ReadBlog() {
  const { id } = useParams();
  const post = blogItem.filter(s => s.id === Number(id))[0];
  return (
    <main>
      <BlogHero hero={false} />
      {post && <BlogDetails post={post} />}
    </main>
  )
}

export default ReadBlog