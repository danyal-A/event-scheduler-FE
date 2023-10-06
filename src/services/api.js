import axios from "axios";

export const createEvent = async (data) =>
  await axios.post("http://localhost:8080", data);

export const getEvent = async (data) =>
  await axios.get("http://localhost:8080");
