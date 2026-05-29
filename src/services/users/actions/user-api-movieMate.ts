import axios from "axios";
import type { User } from "../../../interfaces/user.interface";
import { movieMate } from "../api/api-movieMate";

export const registerUser = async (data: User) => {
  try {
    const response = await movieMate.post("auth/register", data);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Error en registro");
    }
    throw new Error(`Problem with registration ${error}`);
  }
};

export const loginUser = async (data: User) => {
  try {
    const response = await movieMate.post("auth/login", data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Error en login");
    }
    throw new Error(`Problem with registration ${error}`);
  }
};

export const getOnebyId = async (id: string, token: string) => {
  try {
    const response = await movieMate.get(`auth/user/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Error buscando user");
    }
    throw new Error(`Problem buscando usuario con ${id}`);
  }
};

export const getUsersList = async (token: string) => {
  try {
    const response = await movieMate.get("auth/users", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Error buscando usuarios",
      );
    }
    throw new Error(`Problem buscando usuarios`);
  }
};

export const deletetUser = async (token: string) => {
  try {
    const response = await movieMate.delete("auth/user", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Error borrando usuarios",
      );
    }
    throw new Error(`Problem buscando usuarios`);
  }
};

export const getListFavoriteMovies = async (
  id: string,
  token: string,
  limit: number = 50,
  offset: number = 0,
) => {
  try {
    const response = await movieMate.get(`/movies/user/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
      params: { limit: limit, offset: offset },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Error en registro");
    }
    throw new Error(`Problem with registration ${error}`);
  }
};


export const createFavoriteMovie = async (
  moviedbID: number,
  title: string,
  token: string,
) => {
  try {
    const response = await movieMate.post(
      `movies`,
      { title, moviedbID },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Error creando película favorita",
      );
    }
    throw new Error(`Problem creando película favorita`);
  }
};
