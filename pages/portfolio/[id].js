import BaseLayout from "../../components/layouts/BaseLayout"
import { useRouter } from "next/router"
import axios from "axios"

const PortfolioDetail = ({ post }) => {
  const router = useRouter()

  return (
    <BaseLayout>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </BaseLayout>
  )
}

PortfolioDetail.getInitialProps = async ({ query }) => {
  let post = []

  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${query.id}`
    )
    post = res.data
  } catch (e) {
    console.error(e)
  }

  return { post }
}

export default PortfolioDetail
