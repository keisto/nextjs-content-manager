import Header from "../Header"
import ActiveResource from "../ActiveResource"

const BaseLayout = (props) => {
  return (
    <>
      <Header />
      <ActiveResource />
      <div className="px-6 py-4 max-w-sm">{props.children}</div>
    </>
  )
}

export default BaseLayout
