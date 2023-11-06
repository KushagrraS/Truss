import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const response = await axios.get(
        `${process.env.BASE_URL}collections/featuredcollections`
      );
      res.status(200).json(response.data);
    } catch (error) {
      console.log('error', error);
      res
        .status(error.response?.status || 500)
        .json(error.response?.data || "Internal Server Error");
    }
  } else {
    res.status(400).json("Bad Request");
  }
}
