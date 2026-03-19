import { useState } from "react";

export default function AddToCart({ product, onAdd }) {
  const [state, setState] = useState("idle"); // idle | adding | added
  const [qty, setQty] = useState(1);

  const handleAdd = () => {
    if (state !== "idle") return;
    setState("adding");
    setTimeout(() => {
      setState("added");
      if (onAdd) onAdd({ ...product, quantity: qty });
      setTimeout(() => setState("idle"), 2000);
    }, 700);
  };

  const btnClass = {
    idle: "bg-yellow-500 text-blue-950 hover:bg-yellow-400 hover:-translate-y-px",
    adding: "bg-yellow-500/20 text-yellow-500 cursor-not-allowed",
    added: "bg-green-900 text-green-400 cursor-default",
  }[state];

  return (
    <div className="flex items-center gap-3">
      {/* Qty Stepper */}
      <div className="flex items-center h-11 border border-yellow-600/30 rounded bg-yellow-600/5">
        <button
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="w-9 h-full text-yellow-500 text-lg hover:bg-yellow-600/10 transition-colors"
        >
          −
        </button>
        <span className="w-8 text-center text-sm font-bold text-stone-100 border-x border-yellow-600/20">
          {qty}
        </span>
        <button
          onClick={() => setQty((q) => q + 1)}
          className="w-9 h-full text-yellow-500 text-lg hover:bg-yellow-600/10 transition-colors"
        >
          +
        </button>
      </div>

      {/* Button */}
      <button
        onClick={handleAdd}
        disabled={state !== "idle"}
        className={`flex-1 h-11 flex items-center justify-center gap-2 rounded text-xs font-bold tracking-widest uppercase transition-all duration-300 ${btnClass}`}
      >
        {state === "idle" && <>Add to Cart</>}
        {state === "adding" && <Spinner />}
        {state === "added" && <>Added!</>}
      </button>
    </div>
  );
}
