import BaseLayout from "@/components/layouts/BaseLayout";

import { ResourceHightlight } from "@/components/ResourceHighlight";
import { ResourceList } from "@/components/ResourceList";

const Home = ({ resources }) => {
  return (
    <BaseLayout>
      <h1>Index</h1>
      <ResourceHightlight resources={resources.slice(0, 2)} />
      <div className="my-6 h-2 bg-indigo-500 rounded-full"></div>
      <ResourceList resources={resources.slice(2)} />
    </BaseLayout>
  );
};

// Is called every time you visit the page
export async function getServerSideProps() {
  const response = await fetch(`${process.env.API_URL}/resources`);
  const data = await response.json();
  return {
    props: {
      resources: data,
    },
  };
}

// Is called only at build time
// export async function getStaticProps() {
//   const response = await fetch("http://localhost:3000/api/resources")
//   const data = await response.json()
//   return {
//     props: {
//       resources: data,
//     },
//   }
// }

export default Home;
