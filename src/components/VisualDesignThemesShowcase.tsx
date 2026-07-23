import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlantaefertLogo } from "@/components/PlantaefertLogo";
import {
  Sprout,
  Stethoscope,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Sparkles,
  RotateCcw,
  ShieldCheck,
  Award,
  Leaf,
  Clock,
  Flower2,
  Droplets,
  Zap,
  Activity,
  Layers,
  Heart,
} from "lucide-react";

export type VisualTheme = "theme_1_botanical" | "theme_2_modern_glass" | "theme_3_bioclinic";

export function VisualDesignThemesShowcaseComponent() {
  const [activeTheme, setActiveTheme] = useState<VisualTheme>("theme_2_modern_glass");
  const [taskDone, setTaskDone] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#F4F7F5] text-[#173D32] font-sans selection:bg-[#155F4E]/10 pb-16">
      {/* Top Controls Header */}
      <header className="sticky top-0 z-50 border-b border-[#155F4E]/15 bg-white/90 backdrop-blur-md px-4 py-3.5 shadow-sm">
        <div className="mx-auto flex max-w-xl flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <PlantaefertLogo className="h-8 w-auto object-contain" />
              <span className="rounded-full bg-[#155F4E]/10 px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-[#155F4E]">
                Comparador dos 3 Estilos Visuais
              </span>
            </div>
            <button
              onClick={() => setTaskDone(false)}
              className="flex items-center gap-1 text-[12px] font-bold text-[#D35400] hover:underline"
            >
              <RotateCcw size={14} /> Reiniciar Estado
            </button>
          </div>

          {/* Theme Switcher Bar */}
          <div className="grid grid-cols-3 gap-1.5 rounded-2xl bg-gray-100 p-1.5 text-[11px] font-bold">
            <button
              onClick={() => setActiveTheme("theme_1_botanical")}
              className={`rounded-xl py-2 px-1 text-center transition-all ${
                activeTheme === "theme_1_botanical"
                  ? "bg-[#155F4E] text-white shadow-md font-extrabold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              🟢 Opção 1: Botanical
            </button>
            <button
              onClick={() => setActiveTheme("theme_2_modern_glass")}
              className={`rounded-xl py-2 px-1 text-center transition-all ${
                activeTheme === "theme_2_modern_glass"
                  ? "bg-gradient-to-r from-[#0D5C46] to-[#FF6B4A] text-white shadow-md font-extrabold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              🌿 Opção 2: Glass (Favorita)
            </button>
            <button
              onClick={() => setActiveTheme("theme_3_bioclinic")}
              className={`rounded-xl py-2 px-1 text-center transition-all ${
                activeTheme === "theme_3_bioclinic"
                  ? "bg-[#0E4A3B] text-white shadow-md font-extrabold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              🔬 Opção 3: Bio-Tech
            </button>
          </div>
        </div>
      </header>

      {/* Main Preview Container */}
      <main className="mx-auto max-w-[440px] px-4 py-6">
        <AnimatePresence mode="wait">
          {/* =========================================================================
             OPÇÃO 1: BOTANICAL PREMIUM (ELEGANTE & PAPEL AREIA GUIA DE LUXO)
             ========================================================================= */}
          {activeTheme === "theme_1_botanical" && (
            <motion.div
              key="theme_1_botanical"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-4 font-serif bg-[#F8F5EE] p-5 rounded-3xl border border-[#155F4E]/20 shadow-xl"
            >
              <div className="text-center font-sans">
                <span className="rounded-full bg-[#155F4E]/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#155F4E]">
                  Estilo 1: Botanical Premium Editorial
                </span>
              </div>

              {/* Plant Card */}
              <div className="rounded-3xl border border-[#155F4E]/20 bg-gradient-to-br from-[#155F4E] to-[#0D3B30] p-6 text-[#F8F5EE] shadow-lg">
                <div className="flex items-center justify-between font-sans">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider text-white backdrop-blur-xs">
                    <Sparkles size={12} className="text-[#F2994A]" /> Guia Botânico • Dia 3 de 21
                  </span>
                  <span className="text-[11px] text-white/80 italic font-serif">Phalaenopsis</span>
                </div>

                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <h2 className="font-serif text-3xl font-bold leading-tight text-white">
                      Phalaenopsis da Sala
                    </h2>
                    <p className="mt-1 font-sans text-xs opacity-80">
                      Varanda / Janela (Luz Indireta Filtrada)
                    </p>
                  </div>
                  <div className="font-sans rounded-2xl bg-white/10 p-3 text-center backdrop-blur-xs border border-white/10">
                    <div className="text-[10px] font-bold uppercase opacity-75">Vigor</div>
                    <div className="text-xl font-extrabold text-[#F2994A]">92%</div>
                  </div>
                </div>
              </div>

              {/* Mission Card */}
              <div className="rounded-3xl border border-[#155F4E]/20 bg-white p-6 shadow-md space-y-3 font-sans">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#D35400]">
                  <span>Fase I: Enraizar • Hoje (Dia 3)</span>
                  <span className="flex h-2 w-2 rounded-full bg-[#D35400] animate-ping" />
                </div>

                <h3 className="font-serif text-2xl text-[#173D32] font-bold leading-tight">
                  Aplicação Semanal do Kit Método 2 Passos (Pronto Uso)
                </h3>

                <div className="rounded-2xl bg-[#F8F5EE] p-4 text-xs text-[#173D32] space-y-2 border border-[#155F4E]/15">
                  <div className="font-bold text-[#155F4E] flex items-center gap-1.5">
                    <ShieldCheck size={16} className="text-[#D35400]" /> Instruções Oficiais de Cultivo:
                  </div>
                  <ol className="list-decimal list-inside space-y-1 text-[11.5px] leading-relaxed">
                    <li>
                      Borrifar primeiro o <strong>Enraizador Orgânico 500ml Pronto Uso</strong> nas raízes e substrato (sem diluir).
                    </li>
                    <li>
                      Em seguida, borrifar o <strong>Bokashi Líquido 500ml Pronto Uso</strong> nas raízes, folhas e substrato (sem diluir).
                    </li>
                    <li>
                      Aplicar nas horas frescas (antes das 9h ou após 16h), evitando as flores.
                    </li>
                  </ol>
                </div>

                <button
                  onClick={() => setTaskDone(!taskDone)}
                  className={`flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-xs font-extrabold uppercase tracking-wider transition-all ${
                    taskDone
                      ? "bg-[#155F4E]/15 text-[#155F4E] border border-[#155F4E]/30"
                      : "bg-[#155F4E] text-[#F8F5EE] shadow-lg shadow-[#155F4E]/20 hover:bg-[#10483b]"
                  }`}
                >
                  {taskDone ? (
                    <>
                      <CheckCircle2 size={18} className="text-[#155F4E]" /> Dia 3 Concluído!
                    </>
                  ) : (
                    <>
                      <CheckCircle2 size={18} /> Marcar Dia 3 como Concluído
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}

          {/* =========================================================================
             OPÇÃO 2: MODERN GLASS CLEAN (ULTRA-MODERNO iOS / HEALTH - SUA PREFERIDA!)
             ========================================================================= */}
          {activeTheme === "theme_2_modern_glass" && (
            <motion.div
              key="theme_2_modern_glass"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="space-y-4 font-sans bg-gradient-to-br from-[#E6F4F0] via-[#F4F9F7] to-[#FFF8F6] p-5 rounded-3xl border border-white/80 shadow-2xl backdrop-blur-xl"
            >
              <div className="text-center">
                <span className="rounded-full bg-gradient-to-r from-[#0D5C46] to-[#FF6B4A] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-md">
                  ★ Estilo 2: Modern Glass Clean (Sua Preferida!)
                </span>
              </div>

              {/* Floating Glass Plant Card */}
              <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur-md">
                <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-gradient-to-br from-[#0D5C46]/20 to-[#FF6B4A]/20 blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0D5C46]/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0D5C46]">
                    <Zap size={13} className="text-[#FF6B4A]" /> App Guiado • Dia 3 de 21
                  </span>
                  <span className="h-3 w-3 rounded-full bg-[#FF6B4A] animate-pulse" />
                </div>

                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <h2 className="text-2xl font-black tracking-tight text-[#0D5C46]">
                      Phalaenopsis da Sala
                    </h2>
                    <p className="mt-1 text-xs font-semibold text-gray-500">
                      Varanda • Luz Indireta
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/60 bg-white/80 p-3 text-center shadow-sm backdrop-blur-md">
                    <div className="text-[10px] font-black uppercase text-gray-400">Vigor</div>
                    <div className="text-2xl font-black text-[#FF6B4A]">92%</div>
                  </div>
                </div>
              </div>

              {/* Glass Mission Card */}
              <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-xl backdrop-blur-md space-y-4">
                <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-[#FF6B4A]">
                  <span className="flex items-center gap-1.5">
                    <Activity size={16} /> Fase I: Enraizar
                  </span>
                  <span className="rounded-full bg-[#FF6B4A]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#FF6B4A]">
                    Hoje (Dia 3)
                  </span>
                </div>

                <h3 className="text-xl font-black text-gray-900 leading-tight">
                  Aplicação Semanal do Kit Método 2 Passos (Pronto Uso)
                </h3>

                <div className="rounded-2xl bg-gradient-to-br from-[#0D5C46]/5 to-[#FF6B4A]/5 p-4 text-xs space-y-2 border border-[#0D5C46]/10">
                  <div className="font-extrabold text-[#0D5C46] flex items-center gap-1.5">
                    <ShieldCheck size={16} className="text-[#FF6B4A]" /> Passo a Passo Prático:
                  </div>
                  <ol className="list-decimal list-inside space-y-1.5 text-gray-700 text-[11.5px] font-semibold leading-relaxed">
                    <li>
                      Borrifar primeiro o <strong>Enraizador Orgânico 500ml Pronto Uso</strong> nas raízes (sem diluição).
                    </li>
                    <li>
                      Em seguida, borrifar o <strong>Bokashi Líquido 500ml Pronto Uso</strong> nas raízes, folhas e substrato.
                    </li>
                    <li>
                      Aplicar nas horas frescas (antes das 9h ou após 16h).
                    </li>
                  </ol>
                </div>

                <button
                  onClick={() => setTaskDone(!taskDone)}
                  className={`flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-xs font-black uppercase tracking-wider transition-all shadow-lg active:scale-[0.98] ${
                    taskDone
                      ? "bg-[#0D5C46]/15 text-[#0D5C46] border border-[#0D5C46]/30 shadow-none"
                      : "bg-gradient-to-r from-[#0D5C46] to-[#0A4736] text-white shadow-[#0D5C46]/30 hover:from-[#0A4736] hover:to-[#08382b]"
                  }`}
                >
                  {taskDone ? (
                    <>
                      <CheckCircle2 size={18} className="text-[#0D5C46]" /> Tarefa do Dia 3 Concluída!
                    </>
                  ) : (
                    <>
                      <CheckCircle2 size={18} /> Concluir Tarefa do Dia 3
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}

          {/* =========================================================================
             OPÇÃO 3: BIO-CLINIC TECH (DIAGNÓSTICO TÉCNICO DE LABORATÓRIO E PRECISÃO)
             ========================================================================= */}
          {activeTheme === "theme_3_bioclinic" && (
            <motion.div
              key="theme_3_bioclinic"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.25 }}
              className="space-y-4 font-sans bg-[#F4F7F5] p-5 rounded-3xl border border-[#0E4A3B]/20 shadow-lg"
            >
              <div className="text-center">
                <span className="rounded-full bg-[#0E4A3B] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-xs">
                  Estilo 3: Bio-Clinic Tech (Laboratorial & Precisão)
                </span>
              </div>

              {/* Bio-Tech Card */}
              <div className="rounded-2xl border-2 border-[#0E4A3B] bg-white p-5 space-y-3 shadow-sm">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <div className="flex items-center gap-2">
                    <Activity size={16} className="text-[#E65100]" />
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0E4A3B]">
                      Monitoramento Radicular · Dia 3 / 21
                    </span>
                  </div>
                  <span className="rounded-md bg-[#E65100]/10 px-2 py-0.5 text-[10px] font-black text-[#E65100]">
                    STABLE
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold uppercase text-gray-400">Especímen</div>
                    <h2 className="text-xl font-bold text-gray-900">Phalaenopsis da Sala</h2>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-bold uppercase text-gray-400">Vigor Médio</div>
                    <div className="text-2xl font-black text-[#0E4A3B]">92.4%</div>
                  </div>
                </div>
              </div>

              {/* Clinic Mission Card */}
              <div className="rounded-2xl border border-[#0E4A3B]/20 bg-white p-5 shadow-sm space-y-3">
                <div className="flex items-center justify-between text-xs font-bold uppercase text-[#E65100]">
                  <span>Fase I: Bioestimulação de Raízes</span>
                  <span className="font-mono text-[11px]">DIA 03</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900">
                  Protocolo de Aplicação do Kit 500ml Pronto Uso
                </h3>

                <div className="rounded-xl bg-gray-50 p-3.5 text-xs text-gray-800 space-y-1.5 border border-gray-200 font-mono">
                  <div className="font-bold text-[#0E4A3B] flex items-center gap-1.5 font-sans">
                    <ShieldCheck size={16} className="text-[#E65100]" /> REGRAS TÉCNICAS:
                  </div>
                  <div>1. ENRAIZADOR 500ML: Borrifar nas raízes (sem diluir).</div>
                  <div>2. BOKASHI 500ML: Borrifar nas raízes e folhas (sem diluir).</div>
                  <div>3. HORÁRIO: Manhã (antes 9h) ou Tarde (após 16h).</div>
                </div>

                <button
                  onClick={() => setTaskDone(!taskDone)}
                  className={`flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-extrabold uppercase tracking-wider transition-all ${
                    taskDone
                      ? "bg-emerald-100 text-emerald-900 border border-emerald-300"
                      : "bg-[#0E4A3B] text-white shadow-md hover:bg-[#09352a]"
                  }`}
                >
                  {taskDone ? (
                    <>
                      <CheckCircle2 size={18} className="text-emerald-700" /> Registro Efetuado com Sucesso!
                    </>
                  ) : (
                    <>
                      <CheckCircle2 size={18} /> Registrar Aplicação do Dia 3
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
