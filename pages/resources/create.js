import axios from "axios";
import { useRouter } from "next/router";
import ResourceForm from "@/components/ResourceForm";
import BaseLayout from "@/components/layouts/BaseLayout";

const ResourceCreate = () => {
  const router = useRouter();

  const createResource = (formData) => {
    axios
      .post("/api/resources", formData)
      .then((res) => router.push("/"))
      .catch((error) => alert(error?.response?.data));
  };

  return (
    <BaseLayout>
      <h1>Create New Resource</h1>
      <ResourceForm onFormSubmit={createResource} />
    </BaseLayout>
  );
};

export default ResourceCreate;
