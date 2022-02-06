import axios from "axios";
import { useRouter } from "next/router";
import ResourceForm from "@/components/ResourceForm";
import BaseLayout from "@/components/layouts/BaseLayout";

const ResourceEdit = ({ resource }) => {
  const router = useRouter();

  const updateResource = (formData) => {
      axios
        .patch("/api/resources", formData)
        .then((res) => router.push(`/resources/${resource.id}`))
        .catch((error) => alert(error, error?.response?.data));
  };

  return (
    <BaseLayout>
      <h1>Edit Resource</h1>
      <ResourceForm onFormSubmit={updateResource} initialData={resource} />
    </BaseLayout>
  );
};

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
}

export default ResourceEdit;
