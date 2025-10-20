"use client";

import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

import { SearchCombo } from "@/components/SearchCombo";
import { Alert, AlertDescription } from "@/components/ui/alert";
import WeatherInfos from "@/components/WeatherInfos";
import { iWeather } from "@/interfaces/weather-interface";
import { getWeatherByCity } from "@/services/weather-service";

export default function Home() {
  const [selectedCity, setSelectedCity] = useState("");
  const [weatherData, setWeatherData] = useState<iWeather | null>(null);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCitySelect = (cityName: string) => {
    setSelectedCity(cityName);
  };

  useEffect(() => {
    if (!selectedCity) {
      return;
    }

    const fetchWeather = async () => {
      setIsLoading(true);
      setError("");
      setWeatherData(null);

      try {
        const data = await getWeatherByCity(selectedCity);
        setWeatherData(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Erro ao buscar dados do clima",
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
  }, [selectedCity]);

  return (
    <main className="bg-background flex flex-1 flex-col">
      <div className="mx-auto my-auto w-full max-w-2xl space-y-8 px-8 py-12 lg:px-4">
        <section>
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Consulte o Clima em Tempo Real
            </h1>
            <p className="text-muted-foreground text-lg">
              Digite o nome de uma cidade para obter a previsão do tempo
              detalhada instantaneamente.
            </p>
          </div>
          <div className="relative flex flex-1 flex-col gap-4">
            <SearchCombo onCitySelect={handleCitySelect} />

            {isLoading && (
              <div className="text-muted-foreground flex items-center justify-center space-x-2 text-sm">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Buscando dados para {selectedCity}...</span>
              </div>
            )}
          </div>
        </section>

        {error && (
          <div className="mx-auto mb-8 w-full max-w-2xl px-4">
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          </div>
        )}
      </div>

      {weatherData && <WeatherInfos data={weatherData} />}
    </main>
  );
}
