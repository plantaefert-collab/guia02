import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { TesteOnboardingPage } from "./teste-onboarding";
import { ProtocoloShell } from "./protocolo-21-dias";
import { Sparkles, Layout } from "lucide-react";

export const Route = createFileRoute("/inicio")({
  head: () => ({
    meta: [
      { title: "Início — Guia Prático Orquídeas Floridas" },
      { name: "description", content: "Foco do dia, próximo passo e progresso do seu plano de 21 dias." },
      { property: "og:title", content: "Início — Guia Prático Orquídeas Floridas" },
      { property: "og:description", content: "Foco do dia, próximo passo e progresso do seu plano de 21 dias." },
    ],
  }),
  component: InicioPageWrapper,
});

function InicioPageWrapper() {
  const [viewMode, setViewMode] = useState<"demo_onboarding" | "original">("demo_onboarding");

  return (
    <div>
      {/* Top Selector Banner */}
      <div className="bg-[#155F4E] text-[#F8F5EE] px-4 py-2 text-center text-xs font-semibold flex items-center justify-between border-b border-[#F8F5EE]/20 sticky top-0 z-[60]">
        <div className="flex items-center gap-1.5">
          <Sparkles size={14} className="text-[#F2994A]" />
          <span>Modo de Teste de Usabilidade Ativo</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode("demo_onboarding")}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              viewMode === "demo_onboarding"
                ? "bg-[#D35400] text-white font-bold"
                : "bg-white/15 text-white/80 hover:bg-white/25"
            }`}
          >
            <Sparkles size={12} className="inline mr-1" /> Novo Fluxo (Demo)
          </button>
          <button
            onClick={() => setViewMode("original")}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              viewMode === "original"
                ? "bg-[#D35400] text-white font-bold"
                : "bg-white/15 text-white/80 hover:bg-white/25"
            }`}
          >
            <Layout size={12} className="inline mr-1" /> Painel Atual
          </button>
        </div>
      </div>

      {viewMode === "demo_onboarding" ? (
        <TesteOnboardingPage />
      ) : (
        <ProtocoloShell initialTab="inicio" />
      )}
    </div>
  );
}
