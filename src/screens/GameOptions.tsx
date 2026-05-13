// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Options
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowLeft, Circle, Settings, Trash2 } from "lucide-react";


export type GameOptionsActionId = "button-1-1" | "button-2-2" | "button-3-3" | "easy-4" | "normal-5" | "pro-6" | "clear-score-7" | "save-and-back-8";

export interface GameOptionsProps {
  actions?: Partial<Record<GameOptionsActionId, () => void>>;
}

export function GameOptions({ actions }: GameOptionsProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-surface border-b border-outline-variant dark:border-outline-variant flex justify-between items-center w-full px-gutter h-touch-target docked full-width top-0 z-50">
      <div className="flex items-center gap-4">
      <button aria-label="Back" className="text-on-surface-variant hover:bg-surface-bright p-2 rounded-full transition-colors duration-200" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <ArrowLeft aria-hidden={true} focusable="false" />
      </button>
      <h1 className="font-display-lg text-headline-md uppercase tracking-widest text-primary dark:text-primary-fixed-dim font-bold">TETRIS SUPERVISOR</h1>
      </div>
      <div className="flex items-center gap-2">
      <button aria-label="settings" className="text-primary dark:text-primary-fixed-dim border-b-2 border-primary hover:bg-surface-bright p-2 transition-colors duration-200" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="leaderboard" className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-bright p-2 transition-colors duration-200" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-grow p-container-padding flex justify-center items-start overflow-y-auto">
      <div className="w-full max-w-2xl flex flex-col gap-8 pb-32">
      <div className="flex flex-col gap-2">
      <h2 className="font-headline-md text-headline-md text-primary">GAME OPTIONS</h2>
      <p className="font-body-sm text-body-sm text-secondary">Configure system parameters for optimal performance.</p>
      </div>
      {/* Settings Form Bento */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Difficulty Presets */}
      <div className="bg-surface-container border border-outline-variant p-6 rounded col-span-1 md:col-span-2">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-4 border-b border-outline-variant pb-2">DIFFICULTY PRESETS</h3>
      <div className="grid grid-cols-3 gap-2">
      <button className="bg-surface border border-outline-variant text-on-surface hover:bg-surface-bright hover:text-on-surface py-3 rounded font-label-caps text-label-caps transition-colors" type="button" data-action-id="easy-4" onClick={actions?.["easy-4"]}>EASY</button>
      <button className="bg-primary-container border-2 border-primary text-primary-fixed py-3 rounded font-label-caps text-label-caps font-bold" type="button" data-action-id="normal-5" onClick={actions?.["normal-5"]}>NORMAL</button>
      <button className="bg-surface border border-outline-variant text-on-surface hover:bg-surface-bright hover:text-on-surface py-3 rounded font-label-caps text-label-caps transition-colors" type="button" data-action-id="pro-6" onClick={actions?.["pro-6"]}>PRO</button>
      </div>
      </div>
      {/* Speed Settings */}
      <div className="bg-surface-container border border-outline-variant p-6 rounded">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-4 border-b border-outline-variant pb-2">SPEED MULTIPLIER</h3>
      <div className="flex items-center gap-4">
      <Circle className="text-secondary" aria-hidden={true} focusable="false" />
      <input className="w-full h-2 bg-surface-variant rounded-lg appearance-none cursor-pointer accent-primary" max="10" min="1" type="range" value="5" />
      <span className="font-value-numeric text-value-numeric text-primary">5x</span>
      </div>
      </div>
      {/* Toggles */}
      <div className="bg-surface-container border border-outline-variant p-6 rounded flex flex-col gap-6">
      <div className="flex justify-between items-center">
      <div className="flex flex-col">
      <span className="font-label-caps text-label-caps text-on-surface">GHOST PIECE</span>
      <span className="font-body-sm text-body-sm text-secondary text-xs">Show landing preview</span>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
      <input checked={true} className="sr-only peer" type="checkbox" value="" />
      <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
      </label>
      </div>
      <div className="flex justify-between items-center">
      <div className="flex flex-col">
      <span className="font-label-caps text-label-caps text-on-surface">SOUND FX</span>
      <span className="font-body-sm text-body-sm text-secondary text-xs">Audio feedback</span>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
      <input checked={true} className="sr-only peer" type="checkbox" value="" />
      <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
      </label>
      </div>
      </div>
      {/* Danger Zone */}
      <div className="bg-surface-container border border-error-container p-6 rounded col-span-1 md:col-span-2 mt-4">
      <h3 className="font-label-caps text-label-caps text-error mb-4 border-b border-error-container pb-2">DANGER ZONE</h3>
      <div className="flex justify-between items-center">
      <span className="font-body-sm text-body-sm text-on-surface">Permanently delete local high score data.</span>
      <button className="bg-error-container text-on-error-container border border-error hover:bg-error hover:text-on-error px-4 py-2 rounded font-label-caps text-label-caps transition-colors flex items-center gap-2" type="button" data-action-id="clear-score-7" onClick={actions?.["clear-score-7"]}>
      <Trash2 className="text-[18px]" aria-hidden={true} focusable="false" />
                                  CLEAR SCORE
                              </button>
      </div>
      </div>
      </div>
      {/* Action Area */}
      <div className="flex justify-end pt-4 border-t border-outline-variant">
      <button className="bg-primary text-on-primary hover:bg-primary-fixed border border-primary-fixed-dim px-8 py-3 rounded font-label-caps text-label-caps transition-colors shadow-[0_0_8px_rgba(185,199,224,0.3)] hover:shadow-[0_0_12px_rgba(185,199,224,0.5)]" type="button" data-action-id="save-and-back-8" onClick={actions?.["save-and-back-8"]}>
                          SAVE &amp; BACK
                      </button>
      </div>
      </div>
      </main>
      {/* BottomNavBar (Hidden on desktop, logic dictates settings is not a main nav destination, so it's omitted as per shell relevance rules, but included in JSON so rendered based on strict adherence to JSON execution if not overruled by semantic logic. Since this is a settings screen, the nav is suppressed as per: "Automatic Suppression: You MUST exclude the navigation shell if the page intent is: ... Task-Focused: Any sub-page featuring a 'Close' or 'Back' action". The top bar has a back button.) */}
    </>
  );
}
