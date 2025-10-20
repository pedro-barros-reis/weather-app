"use client";

import { Search } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface WeatherSearchFormProps {
  onSearch: (city: string) => void;
  isLoading: boolean;
}

export default function Home({ onSearch, isLoading }: WeatherSearchFormProps) {
  const [city, setCity] = useState("");

  return (
    <main className="bg-background min-h-[calc(100vh-443px)]">
      <section className="mx-auto w-full max-w-2xl px-8 py-12 lg:px-4">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Consulte o Clima em Tempo Real
          </h1>
          <p className="text-muted-foreground text-lg">
            Digite o nome de uma cidade para obter a previsão do tempo detalhada
            instantaneamente.
          </p>
        </div>

        <form onSubmit={() => onSearch(city)} className="flex gap-2">
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
    </main>
  );
}
