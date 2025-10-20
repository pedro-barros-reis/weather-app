"use client";

import {
  CloudRain,
  Droplets,
  Eye,
  Gauge,
  Search,
  Sun,
  Wind,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSearch = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <main className="bg-background min-h-[calc(100vh-443px)]">
      <section className="mx-auto mb-3 w-full max-w-2xl px-8 py-12 lg:px-4">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Consulte o Clima em Tempo Real
          </h1>
          <p className="text-muted-foreground text-lg">
            Digite o nome de uma cidade para obter a previsão do tempo detalhada
            instantaneamente.
          </p>
        </div>

        <form onSubmit={onSearch} noValidate className="flex gap-2">
          <div className="relative flex-1">
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
            <Input
              type="text"
              placeholder="Ex: São Paulo"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="h-11 pl-10 text-base"
              disabled={isLoading}
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading || !city.trim()}
            className={`h-11 px-8 ${!!isLoading || (city.trim() && "cursor-pointer")}`}
          >
            {isLoading ? "Buscando..." : "Buscar"}
          </Button>
        </form>
      </section>
      <section className="animate-fade-in mx-auto w-full max-w-6xl px-4 py-8">
        <div className="bg-card text-card-foreground mb-6 rounded-lg border shadow-sm">
          <div className="p-6 pt-6">
            <div className="text-center">
              <h2 className="mb-1 text-2xl font-semibold">Itabuna, Bahia</h2>
              <p className="text-muted-foreground mb-6">Brazil</p>
              <div className="mb-6 flex flex-col items-center gap-4">
                <Image
                  alt="Condition Image"
                  src="https://cdn.weatherapi.com/weather/64x64/day/122.png"
                  width={96}
                  height={96}
                />
                <div>
                  <div className="mb-2 text-6xl font-bold">22°C</div>
                  <p className="text-muted-foreground text-xl">Nublado</p>
                </div>
              </div>
              <div className="text-muted-foreground flex flex-col justify-center gap-4 border-t pt-4 text-sm sm:flex-row">
                <p>Sensação térmica: 24.7°C</p>
                <p className="hidden sm:block">•</p>
                <p>2025-10-20 15:00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {/* CARDS */}
          <div className="bg-card text-card-foreground rounded-lg border shadow-sm">
            <div className="p-6 pt-6">
              <div className="flex flex-col items-center gap-2 text-center">
                <Wind className="text-primary h-8 w-8" />
                <p className="text-muted-foreground text-sm">Vento</p>
                <p className="text-xl font-semibold">9 km/h</p>
              </div>
            </div>
          </div>

          <div className="bg-card text-card-foreground rounded-lg border shadow-sm">
            <div className="p-6 pt-6">
              <div className="flex flex-col items-center gap-2 text-center">
                <Droplets className="text-primary h-8 w-8" />
                <p className="text-muted-foreground text-sm">Umidade</p>
                <p className="text-xl font-semibold">73%</p>
              </div>
            </div>
          </div>

          <div className="bg-card text-card-foreground rounded-lg border shadow-sm">
            <div className="p-6 pt-6">
              <div className="flex flex-col items-center gap-2 text-center">
                <Gauge className="text-primary h-8 w-8" />
                <p className="text-muted-foreground text-sm">Pressão</p>
                <p className="text-xl font-semibold">1019 mb</p>
              </div>
            </div>
          </div>

          <div className="bg-card text-card-foreground rounded-lg border shadow-sm">
            <div className="p-6 pt-6">
              <div className="flex flex-col items-center gap-2 text-center">
                <Eye className="text-primary h-8 w-8" />
                <p className="text-muted-foreground text-sm">Visibilidade</p>
                <p className="text-xl font-semibold">10 km</p>
              </div>
            </div>
          </div>

          <div className="bg-card text-card-foreground rounded-lg border shadow-sm">
            <div className="p-6 pt-6">
              <div className="flex flex-col items-center gap-2 text-center">
                <Sun className="text-primary h-8 w-8" />
                <p className="text-muted-foreground text-sm">Índice UV</p>
                <p className="text-xl font-semibold">0.7</p>
              </div>
            </div>
          </div>

          <div className="bg-card text-card-foreground rounded-lg border shadow-sm">
            <div className="p-6 pt-6">
              <div className="flex flex-col items-center gap-2 text-center">
                <CloudRain className="text-primary h-8 w-8" />
                <p className="text-muted-foreground text-sm">Precipitação</p>
                <p className="text-xl font-semibold">0.06mm</p>
              </div>
            </div>
          </div>
          {/* FIM DOS CARDS */}
        </div>
      </section>
    </main>
  );
}
