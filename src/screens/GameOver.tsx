// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Over
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle } from "lucide-react";


export type GameOverActionId = "play-again-1" | "main-menu-2";

export interface GameOverProps {
  actions?: Partial<Record<GameOverActionId, () => void>>;
}

export function GameOver({ actions }: GameOverProps) {
  return (
    <>
      {/* Top Navigation (Suppressed per shell relevance filter for transactional/dead-end screens) */}
      {/* Main Content Canvas */}
      <main className="flex-grow flex items-center justify-center p-container-padding relative">
      {/* Background decorative grid (clinical arcade aesthetic) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: "radial-gradient(circle at 2px 2px, var(--tw-colors-outline-variant) 1px, transparent 0)", backgroundSize: "32px 32px"}}></div>
      {/* Modal Style Center Card */}
      <div className="relative z-10 w-full max-w-md bg-surface-container border border-primary-fixed-dim rounded shadow-[0_0_24px_rgba(185,199,224,0.1)] overflow-hidden">
      {/* High Score Toast/Alert (If applicable) */}
      <div className="bg-tertiary-fixed text-on-tertiary-fixed px-container-padding py-unit text-center border-b border-tertiary-fixed-dim">
      <p className="font-label-caps text-label-caps flex items-center justify-center gap-2">
      <Circle  data-icon="trophy" style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                          NEW HIGH SCORE ESTABLISHED
                      </p>
      </div>
      <div className="p-container-padding flex flex-col gap-6">
      {/* Header */}
      <div className="text-center mt-4">
      <h1 className="font-display-lg text-display-lg text-error tracking-widest uppercase" style={{textShadow: "0 0 12px rgba(255, 180, 171, 0.4)"}}>
                              GAME OVER
                          </h1>
      <p className="font-label-caps text-label-caps text-outline mt-2 uppercase tracking-widest">
                              OPERATION TERMINATED
                          </p>
      </div>
      {/* Stats Grid (HUD Modules) */}
      <div className="grid grid-cols-2 gap-4 mt-4">
      {/* Final Score */}
      <div className="col-span-2 bg-surface border border-outline-variant rounded p-4 relative group">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-outline-variant"></div>
      <p className="font-label-caps text-label-caps text-secondary mb-2 uppercase">FINAL SCORE</p>
      <p className="font-value-numeric text-value-numeric text-on-surface text-3xl">485,290</p>
      </div>
      {/* Level Reached */}
      <div className="bg-surface border border-outline-variant rounded p-4">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-outline-variant"></div>
      <p className="font-label-caps text-label-caps text-secondary mb-2 uppercase">LEVEL</p>
      <p className="font-value-numeric text-value-numeric text-on-surface text-2xl">14</p>
      </div>
      {/* Lines Cleared */}
      <div className="bg-surface border border-outline-variant rounded p-4">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-outline-variant"></div>
      <p className="font-label-caps text-label-caps text-secondary mb-2 uppercase">LINES</p>
      <p className="font-value-numeric text-value-numeric text-on-surface text-2xl">142</p>
      </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col gap-3 mt-6">
      <button className="w-full h-touch-target bg-primary-container hover:bg-surface-tint hover:text-on-primary-fixed border border-primary-fixed-dim rounded font-headline-md text-headline-md text-primary flex items-center justify-center transition-colors duration-200 uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-on-surface focus:ring-offset-2 focus:ring-offset-background" type="button" data-action-id="play-again-1" onClick={actions?.["play-again-1"]}>
                              PLAY AGAIN
                          </button>
      <button className="w-full h-touch-target bg-transparent hover:bg-surface-bright border border-outline-variant hover:border-outline rounded font-label-caps text-label-caps text-on-surface-variant flex items-center justify-center transition-colors duration-200 uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-on-surface focus:ring-offset-2 focus:ring-offset-background" type="button" data-action-id="main-menu-2" onClick={actions?.["main-menu-2"]}>
                              MAIN MENU
                          </button>
      </div>
      </div>
      </div>
      </main>
      {/* Bottom Navigation (Suppressed per shell relevance filter for transactional/dead-end screens) */}
    </>
  );
}
