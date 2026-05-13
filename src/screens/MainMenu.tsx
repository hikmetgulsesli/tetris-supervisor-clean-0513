// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play, Settings } from "lucide-react";


export type MainMenuActionId = "start-game-1" | "options-2" | "controls-3";

export interface MainMenuProps {
  actions?: Partial<Record<MainMenuActionId, () => void>>;
}

export function MainMenu({ actions }: MainMenuProps) {
  return (
    <>
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tertiary opacity-5 rounded-full blur-3xl pointer-events-none"></div>
      {/* Main Content Container */}
      <main className="flex-grow flex flex-col items-center justify-center relative z-10 px-container-padding w-full max-w-2xl mx-auto">
      {/* Branding Header */}
      <header className="mb-16 text-center">
      <h1 className="font-display-lg text-display-lg text-primary tracking-widest uppercase mb-unit">
                      TETRIS
                  </h1>
      <h2 className="font-headline-md text-headline-md text-secondary uppercase tracking-widest">
                      SUPERVISOR
                  </h2>
      <div className="h-px w-32 bg-outline-variant mx-auto mt-8"></div>
      </header>
      {/* Menu Navigation */}
      <nav aria-label="Main Menu" className="w-full flex flex-col gap-6">
      {/* Start Game Button */}
      <button className="group relative w-full h-16 border border-primary bg-surface-container-low hover:bg-surface-tint text-primary hover:text-surface-dim transition-colors duration-200 button-glow flex items-center justify-center font-value-numeric text-value-numeric uppercase tracking-widest" type="button" data-action-id="start-game-1" onClick={actions?.["start-game-1"]}>
      <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity"></span>
      <span className="z-10 flex items-center gap-4">
      <Play  data-icon="play_arrow" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} className="text-headline-md" aria-hidden={true} focusable="false" />
                          START GAME
                      </span>
      </button>
      {/* Options Button */}
      <button className="group relative w-full h-16 border border-outline-variant bg-surface-container-low hover:bg-surface-tint text-secondary hover:text-surface-dim transition-colors duration-200 button-glow flex items-center justify-center font-value-numeric text-value-numeric uppercase tracking-widest" type="button" data-action-id="options-2" onClick={actions?.["options-2"]}>
      <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity"></span>
      <span className="z-10 flex items-center gap-4">
      <Settings  data-icon="settings" className="text-headline-md" aria-hidden={true} focusable="false" />
                          OPTIONS
                      </span>
      </button>
      {/* Controls Button */}
      <button className="group relative w-full h-16 border border-outline-variant bg-surface-container-low hover:bg-surface-tint text-secondary hover:text-surface-dim transition-colors duration-200 button-glow flex items-center justify-center font-value-numeric text-value-numeric uppercase tracking-widest" type="button" data-action-id="controls-3" onClick={actions?.["controls-3"]}>
      <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity"></span>
      <span className="z-10 flex items-center gap-4">
      <Circle  data-icon="gamepad" className="text-headline-md" aria-hidden={true} focusable="false" />
                          CONTROLS
                      </span>
      </button>
      </nav>
      </main>
      {/* Footer */}
      <footer className="w-full p-container-padding flex justify-between items-center z-10 font-label-caps text-label-caps text-on-surface-variant uppercase border-t border-surface-container-high bg-surface-dim/80 backdrop-blur-sm">
      <div className="flex items-center gap-2">
      <span className="w-2 h-2 bg-primary animate-pulse"></span>
                  SYS.v1.0.42
              </div>
      <div>
                  CLEAN™ PROTOCOL ACTIVE
              </div>
      </footer>
    </>
  );
}
