"use client";

import { useState } from "react";
import { Play, Pause } from "lucide-react";

export function SongPlayButton() {
  const [playing, setPlaying] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setPlaying((v) => !v)}
      className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity hover:opacity-100"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
        {playing ? (
          <Pause className="h-6 w-6 fill-ink text-ink" />
        ) : (
          <Play className="h-6 w-6 fill-ink text-ink" />
        )}
      </span>
    </button>
  );
}
