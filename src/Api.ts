import axios from "axios";
import type { RecipeType } from "./types";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
});

const fetchAll = async (searchTerm: string = ""): Promise<RecipeType[]> => {
  const url = `recipes?title_like=${searchTerm}`;
  const { data } = await axiosInstance.get<RecipeType[]>(url);

  return data ?? [];
};

const fetchById = async (id: RecipeType["id"]): Promise<RecipeType> => {
  const url = `recipes/${id}`;

  const { data } = await axiosInstance.get<RecipeType>(url);

  return data;
};

//Filtro por tipo de comida (Não tenho tempo de acabar)

/*const fetchByType = async (
  foodType: RecipeType["foodType"]
): Promise<RecipeType[]> => {
  const url = `recipes/${foodType}`;
  const { data } = await axiosInstance.get<RecipeType[]>(url);

  return data ?? [];
};*/

export { fetchAll, fetchById };
