import axios from "axios";

import type { iWeather } from "@/interfaces/weather-interface";

const API_BASE_URL = "https://api.weatherapi.com/v1";

export interface CitySearchResult {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
}

export const getWeatherByCity = async (city: string): Promise<iWeather> => {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  if (!apiKey) {
    throw new Error(
      "A chave da API do clima não está configurada no .env.local",
    );
  }

  if (!city || typeof city !== "string") {
    throw new Error("Nome da cidade é inválido.");
  }

  try {
    const response = await axios.get<iWeather>(`${API_BASE_URL}/current.json`, {
      params: {
        key: apiKey,
        q: city,
        lang: "pt",
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      `Erro ao buscar dados do clima para a cidade: ${city}`,
      error,
    );
    throw new Error(
      "Não foi possível obter os dados do clima. Tente novamente.",
    );
  }
};

export const searchCities = async (
  query: string,
): Promise<CitySearchResult[]> => {
  if (query.length < 2) {
    return [];
  }

  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  if (!apiKey) {
    throw new Error(
      "A chave da API do clima não está configurada no .env.local",
    );
  }

  try {
    const response = await axios.get<CitySearchResult[]>(
      `${API_BASE_URL}/search.json`,
      {
        params: {
          key: apiKey,
          q: query,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar cidades para o termo: ${query}`, error);
    throw new Error("Não foi possível buscar as cidades. Tente novamente.");
  }
};
