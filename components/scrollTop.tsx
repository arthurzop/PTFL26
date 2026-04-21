import * as L from "lucide-react";
export default function ScrollTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-black/60 transition-all
    "
    >
      <L.ArrowUp size={20} />
    </button>
  );
}
