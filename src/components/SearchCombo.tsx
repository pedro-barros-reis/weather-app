/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Check, ChevronsUpDown, Loader2 } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CitySearchResult, searchCities } from "@/services/weather-service";

interface CitySearchComboboxProps {
  onCitySelect: (cityName: string) => void;
  className?: string;
}

export function SearchCombo({
  onCitySelect,
  className,
}: CitySearchComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");

  const [searchTerm, setSearchTerm] = React.useState("");
  const [results, setResults] = React.useState<CitySearchResult[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (searchTerm === selectedValue) {
      setResults([]);
      return;
    }
    setLoading(true);
    setError(null);
    const delayDebounceFn = setTimeout(async () => {
      if (searchTerm.length < 2) {
        setResults([]);
        setLoading(false);
        return;
      }
      try {
        const data = await searchCities(searchTerm);
        setResults(data);
      } catch (err: any) {
        setError(err.message || "Erro ao buscar cidades.");
      } finally {
        setLoading(false);
      }
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, selectedValue]);

  const handleSelect = (result: CitySearchResult) => {
    const cityName = result.name;
    setSelectedValue(cityName);
    setSearchTerm(cityName);
    setOpen(false);
    setResults([]);
    onCitySelect(cityName);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "h-11 w-full justify-between text-base font-normal",
            className,
          )}
        >
          {selectedValue || "Selecione uma cidade..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-full p-0"
        style={{ width: "var(--radix-popover-trigger-width)" }}
      >
        <Command>
          <CommandInput
            placeholder="Buscar cidade..."
            value={searchTerm}
            onValueChange={setSearchTerm}
          />

          <CommandList>
            {error && (
              <p className="p-2 text-center text-xs text-red-600">{error}</p>
            )}
            {loading && (
              <div className="flex justify-center p-2">
                <Loader2 className="h-4 w-4 animate-spin" />
              </div>
            )}
            {!loading &&
              !error &&
              results.length === 0 &&
              searchTerm.length > 1 && (
                <CommandEmpty>Nenhuma cidade encontrada.</CommandEmpty>
              )}
            {results.length > 0 && (
              <CommandGroup>
                {results.map((result) => (
                  <CommandItem
                    key={result.id}
                    value={`${result.name}, ${result.country}`}
                    onSelect={() => handleSelect(result)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedValue.toLowerCase() ===
                          result.name.toLowerCase()
                          ? "opacity-100"
                          : "opacity-0",
                      )}
                    />
                    {result.name}, {result.country}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
