import axios from "axios";

export default async function _(req, res) {
    const axiosRes = await axios.get(`${process.env.API_URL}/resources/active`);
    const resource = axiosRes.data;

    console.log('resource', resource);

    return res.send(resource);
}
