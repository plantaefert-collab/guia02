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
  Calendar,
  RotateCcw,
  ShieldCheck,
  Award,
  Leaf,
  Clock,
  ListTodo,
  Flower2,
  Droplets,
} from "lucide-react";

export type InicioViewMode = "first_time" | "active_user";

export function InicioFlowDemoComponent() {
  const [viewMode, setViewMode] = useState<InicioViewMode>("first_time");

  // State for First-Time User Interactive Checklist
  const [step1NameDone, setStep1NameDone] = useState<boolean>(false);
  const [step2DiagDone, setStep2DiagDone] = useState<boolean>(false);
  const [orchidNameInput, setOrchidNameInput] = useState<string>("Phalaenopsis da Sala");
  const [showNameModal, setShowNameModal] = useState<boolean>(false);

  // State for Active User Task
  const [day3TaskDone, setDay3TaskDone] = useState<boolean>(false);

  const resetDemo = () => {
    setStep1NameDone(false);
    setStep2DiagDone(false);
    setShowNameModal(false);
    setDay3TaskDone(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F5EE] text-[#173D32] font-sans selection:bg-[#155F4E]/10 pb-16">
      {/* Top Demo Bar */}
      <header className="sticky top-0 z-50 border-b border-[#155F4E]/15 bg-[#F8F5EE]/95 backdrop-blur-md px-4 py-3 shadow-sm">
        <div className="mx-auto flex max-w-md flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <PlantaefertLogo className="h-8 w-auto object-contain" />
              <span className="rounded-full bg-[#155F4E]/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#155F4E]">
                Demonstração da Tela /inicio
              </span>
            </div>
            <button
              onClick={resetDemo}
              className="flex items-center gap-1 text-[12px] font-bold text-[#D35400] hover:underline"
            >
              <RotateCcw size={14} /> Reiniciar
            </button>
          </div>

          {/* Mode Switcher */}
          <div className="grid grid-cols-2 gap-1.5 rounded-xl bg-[#155F4E]/10 p-1 text-[12px] font-bold">
            <button
              onClick={() => {
                setViewMode("first_time");
                resetDemo();
              }}
              className={`flex items-center justify-center gap-1.5 rounded-lg py-2 transition-all ${
                viewMode === "first_time"
                  ? "bg-[#155F4E] text-[#F8F5EE] shadow-sm font-extrabold"
                  : "text-[#173D32]/70 hover:text-[#173D32]"
              }`}
            >
              <Sparkles size={14} /> 1º Acesso (Novo Cliente)
            </button>
            <button
              onClick={() => {
                setViewMode("active_user");
              }}
              className={`flex items-center justify-center gap-1.5 rounded-lg py-2 transition-all ${
                viewMode === "active_user"
                  ? "bg-[#155F4E] text-[#F8F5EE] shadow-sm font-extrabold"
                  : "text-[#173D32]/70 hover:text-[#173D32]"
              }`}
            >
              <Sprout size={14} /> Cliente Ativo (Dia 3)
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area (Simulating Mobile Phone Screen) */}
      <main className="mx-auto min-h-[calc(100vh-140px)] max-w-[440px] px-4 py-6">
        <AnimatePresence mode="wait">
          {viewMode === "first_time" ? (
            <motion.div
              key="first_time_view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              {/* Welcome Badge & Title */}
              <div className="rounded-3xl border border-[#155F4E]/15 bg-gradient-to-br from-[#155F4E]/10 to-[#155F4E]/5 p-5 text-center shadow-sm">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#155F4E] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-sm">
                  <Sparkles size={13} /> Seja Bem-vindo(a) à PlantaeFert
                </span>
                <h1 className="mt-3 font-display text-2xl text-[#173D32] leading-snug">
                  Vamos fazer sua orquídea florir juntos!
                </h1>
                <p className="mt-1.5 text-xs text-[#173D32]/75 leading-relaxed">
                  Você adquiriu o <strong>Kit Método 2 Passos (500ml Pronto Uso)</strong>. Complete os 2 passos abaixo para liberar o plano de 21 dias.
                </p>
              </div>

              {/* FIRST-TIME USER HERO CARD (CHECKLIST 0/2) */}
              <div className="rounded-3xl border-2 border-[#155F4E] bg-white p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ListTodo size={18} className="text-[#155F4E]" />
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#155F4E]">
                      Seus Primeiros Passos
                    </span>
                  </div>
                  <span className="rounded-full bg-[#D35400]/10 px-2.5 py-0.5 text-[11px] font-extrabold text-[#D35400]">
                    {step1NameDone && step2DiagDone
                      ? "2 de 2 Concluídos!"
                      : step1NameDone || step2DiagDone
                      ? "1 de 2 Concluído"
                      : "0 de 2 Concluídos"}
                  </span>
                </div>

                {/* Step 1 Item */}
                <div
                  className={`flex items-center justify-between rounded-2xl border p-4 transition-all ${
                    step1NameDone
                      ? "border-emerald-500 bg-emerald-50 text-emerald-950"
                      : "border-[#155F4E]/20 bg-[#F8F5EE]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`grid h-7 w-7 place-items-center rounded-full border transition-all ${
                        step1NameDone
                          ? "bg-emerald-600 border-emerald-600 text-white"
                          : "border-[#173D32]/30 bg-white text-transparent"
                      }`}
                    >
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-[#173D32]">
                        1. Dar nome à sua Orquídea
                      </div>
                      <div className="text-[11px] opacity-75">
                        {step1NameDone ? `Cadastrada: "${orchidNameInput}"` : "Cria o vínculo com sua planta"}
                      </div>
                    </div>
                  </div>

                  {!step1NameDone && (
                    <button
                      onClick={() => setShowNameModal(true)}
                      className="rounded-xl bg-[#155F4E] px-3.5 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#10483b]"
                    >
                      Cadastrar
                    </button>
                  )}
                </div>

                {/* Step 2 Item */}
                <div
                  className={`flex items-center justify-between rounded-2xl border p-4 transition-all ${
                    step2DiagDone
                      ? "border-emerald-500 bg-emerald-50 text-emerald-950"
                      : "border-[#155F4E]/20 bg-[#F8F5EE]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`grid h-7 w-7 place-items-center rounded-full border transition-all ${
                        step2DiagDone
                          ? "bg-emerald-600 border-emerald-600 text-white"
                          : "border-[#173D32]/30 bg-white text-transparent"
                      }`}
                    >
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-[#173D32]">
                        2. Diagnóstico Rápido de Saúde
                      </div>
                      <div className="text-[11px] opacity-75">
                        {step2DiagDone ? "Exame de saúde realizado!" : "3 cliques rápidos para avaliar raízes"}
                      </div>
                    </div>
                  </div>

                  {!step2DiagDone && (
                    <button
                      onClick={() => setStep2DiagDone(true)}
                      className="rounded-xl bg-[#D35400] px-3.5 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#b84800]"
                    >
                      Fazer Teste
                    </button>
                  )}
                </div>

                {/* Main CTA Button */}
                {step1NameDone && step2DiagDone ? (
                  <button
                    onClick={() => setViewMode("active_user")}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#155F4E] py-4 text-xs font-extrabold uppercase tracking-wider text-white shadow-xl shadow-[#155F4E]/25 transition-all hover:bg-[#10483b] active:scale-[0.98]"
                  >
                    <span>Liberar Painel do Dia 1</span>
                    <ArrowRight size={16} />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      if (!step1NameDone) setShowNameModal(true);
                      else if (!step2DiagDone) setStep2DiagDone(true);
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#155F4E] py-4 text-xs font-extrabold uppercase tracking-wider text-white shadow-xl shadow-[#155F4E]/25 transition-all hover:bg-[#10483b] active:scale-[0.98]"
                  >
                    <span>
                      {!step1NameDone ? "Começar Cadastro da Minha Orquídea" : "Fazer Teste de Saúde"}
                    </span>
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>

              {/* Product Support Footer Card (Confidence Banner) */}
              <div className="rounded-2xl border border-[#155F4E]/15 bg-[#F8F5EE] p-4 text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#155F4E]">
                  <ShieldCheck size={16} className="text-[#D35400]" />
                  <span>Acompanhamento Oficial do Kit 500ml Pronto Uso</span>
                </div>
                <p className="text-[11px] text-[#173D32]/80 leading-relaxed">
                  Este aplicativo foi desenvolvido especialmente para guiar a aplicação do <strong>Enraizador Orgânico 500ml</strong> + <strong>Bokashi Líquido 500ml</strong> (sem necessidade de diluição, 1x por semana nas horas frescas).
                </p>
              </div>

              {/* Name Modal Simulation */}
              {showNameModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
                  <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#155F4E]/10 text-[#155F4E]">
                        <Flower2 size={20} />
                      </div>
                      <div>
                        <h3 className="font-display text-lg text-[#173D32]">Nome da Orquídea</h3>
                        <p className="text-[11px] text-[#173D32]/70">Dê um nome para sua planta</p>
                      </div>
                    </div>

                    <input
                      type="text"
                      value={orchidNameInput}
                      onChange={(e) => setOrchidNameInput(e.target.value)}
                      placeholder="Ex: Phalaenopsis da Sala..."
                      className="w-full rounded-2xl border border-[#155F4E]/20 bg-[#F8F5EE] px-4 py-3 text-sm font-semibold text-[#173D32]"
                    />

                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={() => setShowNameModal(false)}
                        className="flex-1 rounded-2xl border border-[#155F4E]/20 py-3 text-xs font-bold text-[#173D32]/70"
                      >
                        Cancelar
                      </button>
                      <button
                        onClick={() => {
                          setStep1NameDone(true);
                          setShowNameModal(false);
                        }}
                        className="flex-1 rounded-2xl bg-[#155F4E] py-3 text-xs font-bold text-white shadow-md"
                      >
                        Salvar Nome
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ) : (
            /* ACTIVE USER DASHBOARD (RETURNING CLIENT) */
            <motion.div
              key="active_user_view"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {/* Active Plant Hero Card */}
              <div className="rounded-3xl border border-[#155F4E]/20 bg-gradient-to-br from-[#155F4E] to-[#0D3B30] p-5 text-[#F8F5EE] shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    <Sparkles size={12} className="text-[#F2994A]" /> Em Acompanhamento • Dia 3 de 21
                  </span>
                  <button
                    onClick={() => setViewMode("first_time")}
                    className="text-[11px] text-white/75 underline hover:text-white font-semibold"
                  >
                    Ver 1º Acesso
                  </button>
                </div>

                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <h2 className="font-display text-2xl font-normal leading-tight text-white">
                      {orchidNameInput || "Phalaenopsis da Sala"}
                    </h2>
                    <p className="mt-1 text-xs opacity-80">
                      Phalaenopsis • Varanda / Janela (Luz Indireta)
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-3 text-center backdrop-blur-sm">
                    <div className="text-[10px] font-bold uppercase opacity-75">Vigor</div>
                    <div className="text-xl font-extrabold text-[#F2994A]">92%</div>
                  </div>
                </div>
              </div>

              {/* TODAY'S MISSION CARD (DAY 3 - OFFICIAL APPLICATION RULE) */}
              <div className="rounded-3xl border border-[#155F4E]/15 bg-white p-6 shadow-xl space-y-3">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#D35400]">
                  <span>Fase I: Enraizar • Hoje (Dia 3)</span>
                  <span className="flex h-2 w-2 rounded-full bg-[#D35400] animate-ping" />
                </div>

                <h3 className="font-display text-xl text-[#173D32]">
                  Aplicação Semanal do Kit Método 2 Passos (Pronto Uso)
                </h3>

                <div className="rounded-2xl bg-[#F8F5EE] p-3.5 text-xs text-[#173D32]/85 space-y-2 border border-[#155F4E]/10">
                  <div className="font-bold text-[#155F4E] flex items-center gap-1.5">
                    <ShieldCheck size={14} /> Instruções de Aplicação Prática:
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
                  onClick={() => setDay3TaskDone(!day3TaskDone)}
                  className={`flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-xs font-extrabold uppercase tracking-wider transition-all ${
                    day3TaskDone
                      ? "bg-[#155F4E]/15 text-[#155F4E] border border-[#155F4E]/30"
                      : "bg-[#155F4E] text-[#F8F5EE] shadow-lg shadow-[#155F4E]/20 hover:bg-[#10483b]"
                  }`}
                >
                  {day3TaskDone ? (
                    <>
                      <CheckCircle2 size={18} className="text-[#155F4E]" /> Tarefa do Dia 3 Concluída!
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
        </AnimatePresence>
      </main>
    </div>
  );
}
