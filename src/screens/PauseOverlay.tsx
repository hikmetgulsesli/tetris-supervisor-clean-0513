// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pause Overlay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play, RefreshCw, Settings } from "lucide-react";


export type PauseOverlayActionId = "resume-1" | "restart-2" | "quit-to-menu-3";

export interface PauseOverlayProps {
  actions?: Partial<Record<PauseOverlayActionId, () => void>>;
}

export function PauseOverlay({ actions }: PauseOverlayProps) {
  return (
    <>
      {/* Top Navigation Placeholder (Blurred) */}
      <header className="bg-surface dark:bg-surface border-b border-outline-variant dark:border-outline-variant w-full px-gutter h-touch-target flex justify-between items-center fixed top-0 z-10 blur-sm opacity-50">
      <div className="font-display-lg text-headline-md font-bold text-primary dark:text-primary-fixed-dim tracking-widest uppercase">
                  TETRIS SUPERVISOR
              </div>
      <div className="flex gap-gutter">
      <Settings className="text-primary dark:text-primary-fixed-dim" aria-hidden={true} focusable="false" />
      <Circle className="text-primary dark:text-primary-fixed-dim" aria-hidden={true} focusable="false" />
      </div>
      </header>
      {/* Simulated Game Board Background (Blurred) */}
      <main className="flex-grow flex items-center justify-center p-gutter mt-touch-target mb-16 md:mb-0 blur-md opacity-40">
      <div className="w-full max-w-[320px] aspect-[1/2] bg-surface-container-lowest border border-outline-variant relative game-grid">
      {/* Simulated Active Pieces */}
      <div className="absolute bottom-0 left-[64px] w-[64px] h-[32px] bg-primary border-2 border-surface-container-lowest" style={{boxShadow: "0 0 4px #b9c7e0"}}></div>
      <div className="absolute bottom-[32px] left-[64px] w-[32px] h-[32px] bg-primary border-2 border-surface-container-lowest" style={{boxShadow: "0 0 4px #b9c7e0"}}></div>
      <div className="absolute top-[160px] left-[128px] w-[32px] h-[128px] bg-tertiary border-2 border-surface-container-lowest"></div>
      </div>
      </main>
      {/* Pause Overlay */}
      <div className="absolute inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm px-gutter">
      {/* Pause Menu Container */}
      <div className="w-full max-w-sm bg-surface-container border border-outline flex flex-col p-container-padding shadow-2xl relative">
      {/* Focus Ring Accent */}
      <div className="absolute inset-0 border border-primary pointer-events-none mix-blend-screen opacity-20"></div>
      {/* Header */}
      <div className="text-center mb-8 border-b border-outline-variant pb-4">
      <h1 className="font-display-lg text-display-lg text-on-surface uppercase tracking-widest text-shadow-glow">GAME PAUSED</h1>
      <p className="font-label-caps text-label-caps text-secondary mt-2">SYSTEM STANDBY</p>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col gap-unit">
      {/* Primary Action: Resume */}
      <button className="h-touch-target flex items-center justify-center border border-primary bg-primary text-on-primary font-label-caps text-label-caps tracking-widest uppercase transition-colors hover:bg-surface-tint hover:text-on-primary-fixed ring-2 ring-primary ring-offset-2 ring-offset-surface-container" type="button" data-action-id="resume-1" onClick={actions?.["resume-1"]}>
      <Play  style={{fontVariationSettings: "'FILL' 1"}} className="mr-2" aria-hidden={true} focusable="false" />
                          RESUME
                      </button>
      {/* Secondary Action: Restart */}
      <button className="h-touch-target flex items-center justify-center border border-outline-variant bg-transparent text-on-surface font-label-caps text-label-caps tracking-widest uppercase transition-colors hover:bg-surface-variant hover:text-on-surface mt-2" type="button" data-action-id="restart-2" onClick={actions?.["restart-2"]}>
      <RefreshCw className="mr-2" aria-hidden={true} focusable="false" />
                          RESTART
                      </button>
      {/* Destructive/Tertiary Action: Quit */}
      <button className="h-touch-target flex items-center justify-center border border-outline-variant bg-transparent text-error font-label-caps text-label-caps tracking-widest uppercase transition-colors hover:bg-error-container hover:text-on-error-container mt-2" type="button" data-action-id="quit-to-menu-3" onClick={actions?.["quit-to-menu-3"]}>
      <Circle className="mr-2" aria-hidden={true} focusable="false" />
                          QUIT TO MENU
                      </button>
      </div>
      {/* Match Stats Snapshot (Optional Context) */}
      <div className="mt-8 pt-4 border-t border-outline-variant flex justify-between opacity-70">
      <div className="flex flex-col">
      <span className="font-label-caps text-label-caps text-secondary">SCORE</span>
      <span className="font-value-numeric text-value-numeric text-on-surface">045,210</span>
      </div>
      <div className="flex flex-col text-right">
      <span className="font-label-caps text-label-caps text-secondary">TIME</span>
      <span className="font-value-numeric text-value-numeric text-on-surface">12:45</span>
      </div>
      </div>
      </div>
      </div>
      {/* Bottom Navigation Placeholder (Blurred) */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-16 px-container-padding bg-surface dark:bg-surface border-t border-outline-variant dark:border-outline-variant z-10 blur-sm opacity-50 md:hidden">
      <div className="flex flex-col items-center justify-center bg-primary-container dark:bg-primary-container text-primary dark:text-primary-fixed-dim p-unit w-1/3">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps mt-1">COMMAND</span>
      </div>
      <div className="flex flex-col items-center justify-center text-secondary dark:text-secondary-fixed-dim p-unit w-1/3">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps mt-1">ANALYTICS</span>
      </div>
      <div className="flex flex-col items-center justify-center text-secondary dark:text-secondary-fixed-dim p-unit w-1/3">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps mt-1">SYSTEM</span>
      </div>
      </nav>
    </>
  );
}
