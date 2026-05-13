// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Controls Help
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowLeft, Circle, MousePointerClick } from "lucide-react";


export type ControlsHelpActionId = "back-to-system-1";

export interface ControlsHelpProps {
  actions?: Partial<Record<ControlsHelpActionId, () => void>>;
}

export function ControlsHelp({ actions }: ControlsHelpProps) {
  return (
    <>
      {/* TopAppBar (Rendered but contextually adapted for a sub-page, though rules say suppress if linear task. Given this is a controls help, it's a sub-page. Wait, rule: "Automatic Suppression: You MUST exclude the navigation shell if the page intent is: Linear/Transactional or Task-Focused (Close/Back action)". So TopAppBar/BottomNav should be suppressed. I will build a custom back-header for the canvas) */}
      <header className="w-full flex justify-between items-center px-gutter h-touch-target border-b border-outline-variant bg-surface">
      <button className="flex items-center gap-unit text-primary hover:text-primary-fixed-dim transition-colors duration-200" type="button" data-action-id="back-to-system-1" onClick={actions?.["back-to-system-1"]}>
      <ArrowLeft aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">BACK TO SYSTEM</span>
      </button>
      <div className="font-display-lg text-headline-md font-bold text-primary">CONTROLS PROTOCOL</div>
      <div className="w-6"></div> {/* Spacer for centering */}
      </header>
      <main className="flex-grow p-container-padding flex flex-col gap-6 max-w-4xl mx-auto w-full">
      <div className="mb-4">
      <h1 className="font-display-lg text-display-lg text-primary mb-2">OPERATOR MANUAL</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Review the interaction protocols for system operation. Mastery of these inputs is required for optimal performance metrics.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Keyboard Controls */}
      <section className="bg-surface-container rounded border border-outline-variant p-6 flex flex-col gap-4">
      <div className="border-b border-outline-variant pb-2 flex items-center gap-2">
      <Circle className="text-primary" aria-hidden={true} focusable="false" />
      <h2 className="font-label-caps text-label-caps text-primary">KEYBOARD INTERFACE</h2>
      </div>
      <div className="grid grid-cols-[1fr_auto] gap-y-4 gap-x-4 items-center">
      <div className="font-body-sm text-body-sm text-on-surface">Movement (Left / Right / Soft Drop)</div>
      <div className="flex gap-2">
      <kbd className="font-value-numeric text-value-numeric bg-surface-variant border border-outline-variant rounded px-2 py-1 text-on-surface">←/A</kbd>
      <kbd className="font-value-numeric text-value-numeric bg-surface-variant border border-outline-variant rounded px-2 py-1 text-on-surface">↓/S</kbd>
      <kbd className="font-value-numeric text-value-numeric bg-surface-variant border border-outline-variant rounded px-2 py-1 text-on-surface">→/D</kbd>
      </div>
      <div className="font-body-sm text-body-sm text-on-surface">Hard Drop (Instant Placement)</div>
      <div className="flex justify-end">
      <kbd className="font-value-numeric text-value-numeric bg-surface-variant border border-outline-variant rounded px-4 py-1 text-on-surface w-full text-center">SPACE</kbd>
      </div>
      <div className="font-body-sm text-body-sm text-on-surface">Rotate Clockwise</div>
      <div className="flex justify-end">
      <kbd className="font-value-numeric text-value-numeric bg-surface-variant border border-outline-variant rounded px-2 py-1 text-on-surface">↑ / W</kbd>
      </div>
      <div className="font-body-sm text-body-sm text-on-surface">Hold Piece</div>
      <div className="flex gap-2 justify-end">
      <kbd className="font-value-numeric text-value-numeric bg-surface-variant border border-outline-variant rounded px-2 py-1 text-on-surface">SHIFT</kbd>
      <kbd className="font-value-numeric text-value-numeric bg-surface-variant border border-outline-variant rounded px-2 py-1 text-on-surface">C</kbd>
      </div>
      <div className="font-body-sm text-body-sm text-on-surface">Pause System</div>
      <div className="flex justify-end">
      <kbd className="font-value-numeric text-value-numeric bg-surface-variant border border-outline-variant rounded px-2 py-1 text-on-surface">P</kbd>
      </div>
      </div>
      </section>
      {/* Touch Controls */}
      <section className="bg-surface-container rounded border border-outline-variant p-6 flex flex-col gap-4">
      <div className="border-b border-outline-variant pb-2 flex items-center gap-2">
      <MousePointerClick className="text-primary" aria-hidden={true} focusable="false" />
      <h2 className="font-label-caps text-label-caps text-primary">TACTILE INTERFACE</h2>
      </div>
      <div className="grid grid-cols-[1fr_auto] gap-y-6 gap-x-4 items-center">
      <div className="font-body-sm text-body-sm text-on-surface flex flex-col">
      <span className="mb-1">Swipe Left / Right</span>
      <span className="text-on-surface-variant opacity-80">Shift active piece horizontally.</span>
      </div>
      <div className="flex justify-end text-primary">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </div>
      <div className="font-body-sm text-body-sm text-on-surface flex flex-col">
      <span className="mb-1">Swipe Down</span>
      <span className="text-on-surface-variant opacity-80">Soft drop piece to bottom.</span>
      </div>
      <div className="flex justify-end text-primary">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </div>
      <div className="font-body-sm text-body-sm text-on-surface flex flex-col">
      <span className="mb-1">Tap Screen</span>
      <span className="text-on-surface-variant opacity-80">Rotate piece clockwise 90°.</span>
      </div>
      <div className="flex justify-end text-primary">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </div>
      <div className="font-body-sm text-body-sm text-on-surface flex flex-col">
      <span className="mb-1">Swipe Up</span>
      <span className="text-on-surface-variant opacity-80">Hold current piece for later.</span>
      </div>
      <div className="flex justify-end text-primary">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </div>
      </div>
      </section>
      </div>
      </main>
    </>
  );
}
