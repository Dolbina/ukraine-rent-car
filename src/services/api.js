import axios from "axios";

export const fetchCars = async () => {
  const { data } = await axios.get(
    `https://647798c89233e82dd53be788.mockapi.io/adverts`
  );
  return data;
}











