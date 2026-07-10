"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("storyline-theme");
    const isLight = saved === "light";
    document.documentElement.dataset.theme = isLight ? "light" : "dark";
    setLight(isLight);
  }, []);

  function toggle() {
    const next = !light;
    setLight(next);
    document.documentElement.dataset.theme = next ? "light" : "dark";
    localStorage.setItem("storyline-theme", next ? "light" : "dark");
  }

  return (
    <button className="icon-button" onClick={toggle} aria-label={light ? "Use dark theme" : "Use light theme"} title={light ? "Dark theme" : "Light theme"}>
      {light ? <Moon size={19} /> : <Sun size={19} />}
    </button>
  );
}
