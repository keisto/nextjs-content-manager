import BaseLayout from "../../components/layouts/BaseLayout"
import Link from "next/link"
import axios from "axios"

const Portfolio = ({ posts }) => {
  const renderPosts = () => {
    return posts.map((post) => (
      <li key={post.id}>
        <Link href={`/portfolio/${post.id}`}>{post.title}</Link>
      </li>
    ))
  }

  return (
    <BaseLayout>
      <h1>Portfolio</h1>
      <ul>{renderPosts()}</ul>
    </BaseLayout>
  )
}

Portfolio.getInitialProps = async () => {
  let posts = []

  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    posts = res.data
  } catch (e) {
    console.error(e)
  }

  return { posts: posts.slice(0, 10) }
}

export default Portfolio
