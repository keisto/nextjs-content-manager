import Link from "next/link"

const Header = () => {
  return (
    <div className="flex space-x-4 h-12 items-center bg-gray-100 px-6 border-b">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/portfolio">
        <a>Portfolio</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/cv">
        <a>CV</a>
      </Link>
      <Link href="/resources/create">
        <a className="text-indigo-600 border px-2 py-px rounded-md border-indigo-500">
          Add
        </a>
      </Link>
    </div>
  )
}

export default Header
