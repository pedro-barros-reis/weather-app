import { CloudRain, Droplets, Eye, Gauge, Sun, Wind } from "lucide-react";
import Image from "next/image";

import { iWeather } from "@/interfaces/weather-interface";

import { Card, CardContent } from "./ui/card";

interface WeatherInfosProps {
  data: iWeather;
}

const WeatherInfos = ({ data }: WeatherInfosProps) => {
  const { location, current } = data;
  const date = new Date(location.localtime.replace(' ', 'T'));
  const currentDate = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(date);

  const detailCards = [
    {
      icon: Wind,
      label: "Vento",
      value: `${current.wind_kph} km/h`,
    },
    {
      icon: Droplets,
      label: "Umidade",
      value: `${current.humidity}%`,
    },
    {
      icon: Gauge,
      label: "Pressão",
      value: `${current.pressure_mb} mb`,
    },
    {
      icon: Eye,
      label: "Visibilidade",
      value: `${current.vis_km} km`,
    },
    {
      icon: Sun,
      label: "Índice UV",
      value: current.uv.toString(),
    },
    {
      icon: CloudRain,
      label: "Precipitação",
      value: `${current.precip_mm} mm`,
    },
  ];

  return (
    <section className="animate-fade-in mx-auto w-full max-w-6xl px-4 py-8">
      <div className="bg-card text-card-foreground mb-6 rounded-lg border shadow-sm">
        <div className="p-6 pt-6">
          <div className="text-center">
            <h2 className="mb-1 text-2xl font-semibold">
              {location.name}, {location.region}
            </h2>
            <p className="text-muted-foreground mb-6">{location.country}</p>
            <div className="mb-6 flex flex-col items-center gap-4">
              <Image
                src={`https:${current.condition.icon}`}
                alt={current.condition.text}
                width={96}
                height={96}
              />
              <div>
                <div className="mb-2 text-6xl font-bold">
                  {Math.round(current.temp_c)}°C
                </div>
                <p className="text-muted-foreground text-xl">
                  {current.condition.text}
                </p>
              </div>
            </div>
            <div className="text-muted-foreground flex flex-col justify-center gap-4 border-t pt-4 text-sm sm:flex-row">
              <p>Sensação térmica: {current.feelslike_c}°C</p>
              <p className="hidden sm:block">•</p>
              <p>{currentDate}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {/* CARDS */}
        {detailCards.map((detail) => {
          const Icon = detail.icon;
          return (
            <Card key={detail.label}>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center gap-2 text-center">
                  <Icon className="text-primary h-8 w-8" />
                  <p className="text-muted-foreground text-sm">
                    {detail.label}
                  </p>
                  <p className="text-xl font-semibold">{detail.value}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
        {/* FIM DOS CARDS */}
      </div>
    </section>
  );
};

export default WeatherInfos;
