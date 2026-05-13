// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Pause, Settings } from "lucide-react";


export type GameBoardActionId = "button-1-1" | "button-2-2" | "button-3-3";

export interface GameBoardProps {
  actions?: Partial<Record<GameBoardActionId, () => void>>;
}

export function GameBoard({ actions }: GameBoardProps) {
  return (
    <>
      {/* TopAppBar from JSON */}
      <header className="bg-surface dark:bg-surface border-b border-outline-variant dark:border-outline-variant docked full-width top-0 flex justify-between items-center w-full px-gutter h-touch-target">
      <div className="font-display-lg text-headline-md font-bold text-primary dark:text-primary-fixed-dim uppercase tracking-widest">
                  TETRIS SUPERVISOR
              </div>
      <div className="flex items-center gap-unit">
      <button className="p-unit text-on-surface-variant hover:bg-surface-bright dark:hover:bg-surface-variant transition-colors duration-200" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      <button className="p-unit text-on-surface-variant hover:bg-surface-bright dark:hover:bg-surface-variant transition-colors duration-200" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Game Area */}
      <main className="flex-grow flex flex-col md:flex-row justify-center items-center gap-container-padding p-container-padding pb-24 md:pb-container-padding">
      {/* Left HUD: HOLD */}
      <aside className="flex flex-col gap-gutter w-full max-w-[120px] order-2 md:order-1 items-end md:items-start">
      <div className="bg-surface-container-low border border-outline-variant rounded-DEFAULT p-unit w-full">
      <div className="font-label-caps text-label-caps text-secondary-fixed-dim border-b border-outline-variant pb-unit mb-unit text-center">HOLD</div>
      <div className="mini-grid w-full bg-surface-container-lowest p-grid-gap">
      {/* Placeholder for held piece */}
      <div className="col-start-2 col-span-2 row-start-2 row-span-1 bg-tertiary shadow-[0_0_4px_rgba(223,194,153,0.5)]"></div>
      <div className="col-start-2 col-span-1 row-start-3 row-span-1 bg-tertiary shadow-[0_0_4px_rgba(223,194,153,0.5)]"></div>
      <div className="col-start-3 col-span-1 row-start-3 row-span-1 bg-tertiary shadow-[0_0_4px_rgba(223,194,153,0.5)]"></div>
      </div>
      </div>
      </aside>
      {/* Center: Game Board */}
      <section className="bg-surface-container-lowest border-2 border-outline-variant p-grid-gap order-1 md:order-2 w-full max-w-[300px] h-full max-h-[600px] shadow-[0_0_15px_rgba(0,0,0,0.5)]">
      <div className="tetris-grid w-full h-full bg-surface-dim">
      {/* Example active piece (T-Block) */}
      <div className="col-start-5 row-start-1 bg-primary shadow-[0_0_4px_rgba(185,199,224,0.8)]"></div>
      <div className="col-start-4 row-start-2 bg-primary shadow-[0_0_4px_rgba(185,199,224,0.8)]"></div>
      <div className="col-start-5 row-start-2 bg-primary shadow-[0_0_4px_rgba(185,199,224,0.8)]"></div>
      <div className="col-start-6 row-start-2 bg-primary shadow-[0_0_4px_rgba(185,199,224,0.8)]"></div>
      {/* Example landed blocks */}
      <div className="col-start-1 row-start-20 bg-error shadow-[0_0_4px_rgba(255,180,171,0.5)]"></div>
      <div className="col-start-2 row-start-20 bg-error shadow-[0_0_4px_rgba(255,180,171,0.5)]"></div>
      <div className="col-start-3 row-start-20 bg-error shadow-[0_0_4px_rgba(255,180,171,0.5)]"></div>
      <div className="col-start-4 row-start-20 bg-error shadow-[0_0_4px_rgba(255,180,171,0.5)]"></div>
      </div>
      </section>
      {/* Right HUD: NEXT, SCORE, LEVEL, LINES */}
      <aside className="flex flex-col gap-gutter w-full max-w-[120px] order-3 items-start md:items-end">
      {/* NEXT */}
      <div className="bg-surface-container-low border border-outline-variant rounded-DEFAULT p-unit w-full">
      <div className="font-label-caps text-label-caps text-secondary-fixed-dim border-b border-outline-variant pb-unit mb-unit text-center">NEXT</div>
      <div className="mini-grid w-full bg-surface-container-lowest p-grid-gap mb-grid-gap">
      <div className="col-start-2 col-span-1 row-start-2 row-span-3 bg-[#38bdf8] shadow-[0_0_4px_rgba(56,189,248,0.5)]"></div>
      </div>
      <div className="mini-grid w-full bg-surface-container-lowest p-grid-gap opacity-50">
      <div className="col-start-2 col-span-2 row-start-2 row-span-2 bg-[#facc15] shadow-[0_0_4px_rgba(250,204,21,0.5)]"></div>
      </div>
      </div>
      {/* SCORE */}
      <div className="bg-surface-container-low border border-outline-variant rounded-DEFAULT p-unit w-full text-right">
      <div className="font-label-caps text-label-caps text-secondary-fixed-dim border-b border-outline-variant pb-unit mb-unit">SCORE</div>
      <div className="font-value-numeric text-value-numeric text-on-surface">014520</div>
      </div>
      {/* LEVEL */}
      <div className="bg-surface-container-low border border-outline-variant rounded-DEFAULT p-unit w-full text-right">
      <div className="font-label-caps text-label-caps text-secondary-fixed-dim border-b border-outline-variant pb-unit mb-unit">LEVEL</div>
      <div className="font-value-numeric text-value-numeric text-on-surface">05</div>
      </div>
      {/* LINES */}
      <div className="bg-surface-container-low border border-outline-variant rounded-DEFAULT p-unit w-full text-right">
      <div className="font-label-caps text-label-caps text-secondary-fixed-dim border-b border-outline-variant pb-unit mb-unit">LINES</div>
      <div className="font-value-numeric text-value-numeric text-on-surface">042</div>
      </div>
      <button className="mt-auto md:mt-gutter w-12 h-12 flex justify-center items-center rounded-full border border-outline-variant text-on-surface-variant hover:bg-surface-bright hover:text-on-surface transition-colors" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Pause  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      </aside>
      </main>
      {/* BottomNavBar from JSON (Visible on Mobile, Hidden on md+) */}
      <nav className="md:hidden bg-surface dark:bg-surface fixed bottom-0 left-0 w-full flex justify-around items-center h-16 px-container-padding border-t border-outline-variant dark:border-outline-variant z-50">
      <a className="flex flex-col items-center justify-center bg-primary-container dark:bg-primary-container text-primary dark:text-primary-fixed-dim p-unit w-full h-full scale-90 transition-transform duration-150" href="#">
      <Circle  style={{fontVariationSettings: "'FILL' 0"}} className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">COMMAND</span>
      </a>
      <a className="flex flex-col items-center justify-center text-secondary dark:text-secondary-fixed-dim p-unit hover:text-on-surface dark:hover:text-on-surface transition-colors w-full h-full" href="#">
      <Circle  style={{fontVariationSettings: "'FILL' 0"}} className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">ANALYTICS</span>
      </a>
      <a className="flex flex-col items-center justify-center text-secondary dark:text-secondary-fixed-dim p-unit hover:text-on-surface dark:hover:text-on-surface transition-colors w-full h-full" href="#">
      <Circle  style={{fontVariationSettings: "'FILL' 0"}} className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">SYSTEM</span>
      </a>
      </nav>
      
    </>
  );
}
