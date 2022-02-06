import axios from "axios";

export default async function _(req, res) {
  if (req.method === "GET") {
    const dataRes = await fetch(`${process.env.API_URL}/resources`);
    const data = await dataRes.json();

    res.send(data);
  }

  if (req.method === "POST" || req.method === "PATCH") {
    const { id, title, description, link, timeToFinish, priority } = req.body;
    let url = `${process.env.API_URL}/resources`;
    if (!title || !description || !link || !timeToFinish || !priority) {
      return res.status(422).send("Some data is missing!");
    }

    if (req.method === "PATCH") {
      url += `/${id}`
    }

    try {
      const axiosRes = await axios[req.method.toLowerCase()](url, req.body);
    } catch {
      return res.status(422).send("Data could not be stored!");
    }

    return res.send("Data received!");
  }
}
