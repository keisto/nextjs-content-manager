import axios from "axios";
import moment from "moment"
import Link from "next/link";
import BaseLayout from "@/components/layouts/BaseLayout";

// import {useRouter} from "next/router"
//
// const ResourceDetail = ({ resource }) => {
//   const router = useRouter();
//
//   if (router.isFallback) {
//     return <div>Loading Data...</div>;
//   }

const ResourceDetail = ({ resource }) => {
  const activateResource = () => {
    axios.patch("/api/resources", {...resource, status: "active"})
      .then(() => {location.reload()})
      .catch(() => alert("Failed to activate!"));
  }

  return (
    <BaseLayout>
      <div key={resource.id} className="p-6 border rounded hover:bg-gray-100">
      <p className="flex justify-between items-center w-full"><span className="text-gray-600 text-sm leading-3">{moment(resource.createdAt).format("LLL")}</span><span className="bg-gray-200 px-2 py-1 rounded text-xs">{resource.status}</span></p>
        <h2 className="font-bold">{resource.title}</h2>
        <p className="text-gray-600">{resource.description}</p>
        <p>Time to Finish: <strong>{resource.timeToFinish}</strong> minutes</p>
        <div className="flex space-x-4">
          <Link href={`/resources/${resource.id}/edit`}>
            <a className="border px-2 py-1 text-amber-600 text-sm rounded inline-block mt-2">
              Update
            </a>
          </Link>
          <button onClick={activateResource} className="border px-2 py-1 text-green-600 text-sm rounded inline-block mt-2">
            Activate
          </button>
        </div>
      </div>
    </BaseLayout>
  );
};

{
  /*
  // CORS setup required
  ResourceDetail.getInitialProps = async ({query}) => {
  const dataRes = await fetch(
    `${process.env.API_URL}/resources/${query.id}`
  );
  const data = await dataRes.json();
  return {
      resource: data,
  };
} */
}

export async function getStaticPaths() {
  const resData = await fetch(`${process.env.API_URL}/resources`);
  const data = await resData.json();
  const paths = data.map((resource) => {
    return {
      params: { id: resource.id },
    };
  });

  return {
    paths,
    // if 'false' means that other routes should resolve into 404 page
    // if 'true' refetch and give it a try
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const dataRes = await fetch(
    `${process.env.API_URL}/resources/${params.id}`
  );
  const data = await dataRes.json();
  return {
    props: {
      resource: data,
    },
    revalidate: 60 * 60 * 24, // Seconds until it should refetch (everyday)
  };
}

{
  /*
  // getInitialProps is preferred
  export async function getServerSideProps({ params }) {
  const dataRes = await fetch(
    `${process.env.API_URL}/resources/${params.id}`
  );
  const data = await dataRes.json();
  return {
    props: {
      resource: data,
    },
  };
} */
}

export default ResourceDetail;
