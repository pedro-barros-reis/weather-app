"use client";

import { Cloud, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useTheme } from "../app/contexts/ThemeContexts";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="bg-secondary w-full border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4 lg:px-4">
        <a href="" className="flex items-center gap-2">
          <Cloud size={26} />
          <h1 className="text-2xl font-bold">Weather</h1>
        </a>

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="cursor-pointer transition-all"
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>
      </div>
    </header>
  );
};

export default Header;
