import { createFileRoute } from "@tanstack/react-router";
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
  Camera,
  RotateCcw,
  Sun,
  Droplets,
  Heart,
  ShieldCheck,
  Award,
  Layers,
  Leaf,
} from "lucide-react";

export const Route = createFileRoute("/teste-onboarding")({
  head: () => ({
    meta: [
      { title: "Teste de Onboarding & Usabilidade — PlantaeFert" },
      { name: "description", content: "Demonstração visual do novo fluxo de boas-vindas e primeiro acesso." },
    ],
  }),
  component: TesteOnboardingPage,
});

type UserMode = "first_time" | "returning";
type FlowOption = "option_a" | "option_c"; // A: Cadastro -> Diagnostico; C: Diagnostico -> Cadastro
type Step = 1 | 2 | 3;

export function TesteOnboardingPage() {
  const [userMode, setUserMode] = useState<UserMode>("first_time");
  const [flowOption, setFlowOption] = useState<FlowOption>("option_a");
  const [step, setStep] = useState<Step>(1);

  // Form State
  const [orchidName, setOrchidName] = useState("Minha Phalaenopsis");
  const [orchidSpecies, setOrchidSpecies] = useState("Phalaenopsis");
  const [environment, setEnvironment] = useState("Varanda Iluminada");
  const [leafStatus, setLeafStatus] = useState("amarela");
  const [rootStatus, setRootStatus] = useState("seca");
  const [bloomStatus, setBloomStatus] = useState("sem_flores");
  const [taskCompleted, setTaskCompleted] = useState(false);

  const resetFlow = () => {
    setStep(1);
    setTaskCompleted(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F5EE] text-[#173D32] font-sans selection:bg-[#155F4E]/10">
      {/* Top Demo Controller Bar */}
      <header className="sticky top-0 z-50 border-b border-[#155F4E]/15 bg-[#F8F5EE]/95 backdrop-blur-md px-4 py-3">
        <div className="mx-auto flex max-w-xl flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <PlantaefertLogo className="h-8 w-auto object-contain" />
              <span className="rounded-full bg-[#155F4E]/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#155F4E]">
                Modo Demonstração Visual
              </span>
            </div>
            <button
              onClick={resetFlow}
              className="flex items-center gap-1 text-[12px] font-medium text-[#155F4E] hover:underline"
            >
              <RotateCcw size={14} /> Reiniciar
            </button>
          </div>

          {/* Mode Switcher */}
          <div className="grid grid-cols-2 gap-1.5 rounded-xl bg-[#155F4E]/10 p-1 text-[12px] font-semibold">
            <button
              onClick={() => {
                setUserMode("first_time");
                setStep(1);
              }}
              className={`flex items-center justify-center gap-1.5 rounded-lg py-2 transition-all ${
                userMode === "first_time"
                  ? "bg-[#155F4E] text-[#F8F5EE] shadow-sm"
                  : "text-[#173D32]/70 hover:text-[#173D32]"
              }`}
            >
              <Sparkles size={14} /> 1º Acesso (Novo Cliente)
            </button>
            <button
              onClick={() => {
                setUserMode("returning");
              }}
              className={`flex items-center justify-center gap-1.5 rounded-lg py-2 transition-all ${
                userMode === "returning"
                  ? "bg-[#155F4E] text-[#F8F5EE] shadow-sm"
                  : "text-[#173D32]/70 hover:text-[#173D32]"
              }`}
            >
              <Sprout size={14} /> Cliente Ativo (Dia 3)
            </button>
          </div>

          {/* Sub-option for First Time */}
          {userMode === "first_time" && (
            <div className="flex items-center justify-between rounded-lg border border-[#155F4E]/15 bg-white/60 px-3 py-1.5 text-[11px]">
              <span className="font-semibold text-[#173D32]">Sequência do Funil:</span>
              <div className="flex gap-2 font-medium">
                <button
                  onClick={() => {
                    setFlowOption("option_a");
                    setStep(1);
                  }}
                  className={`rounded px-2 py-0.5 transition-colors ${
                    flowOption === "option_a" ? "bg-[#D35400] text-white font-bold" : "text-[#173D32]/70 hover:bg-[#155F4E]/10"
                  }`}
                >
                  Opção A (Orquídea ➔ Diagnóstico)
                </button>
                <button
                  onClick={() => {
                    setFlowOption("option_c");
                    setStep(1);
                  }}
                  className={`rounded px-2 py-0.5 transition-colors ${
                    flowOption === "option_c" ? "bg-[#D35400] text-white font-bold" : "text-[#173D32]/70 hover:bg-[#155F4E]/10"
                  }`}
                >
                  Opção C (Diagnóstico ➔ Orquídea)
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto min-h-[calc(100vh-120px)] max-w-[440px] px-4 py-6">
        <AnimatePresence mode="wait">
          {userMode === "first_time" ? (
            <motion.div
              key={`first-time-${flowOption}-${step}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              {/* Stepper Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-[12px] font-bold text-[#155F4E]">
                  <span>
                    Passo {step} de 3:{" "}
                    {flowOption === "option_a"
                      ? step === 1
                        ? "Cadastro da Orquídea"
                        : step === 2
                        ? "Diagnóstico de Saúde"
                        : "Plano Liberado"
                      : step === 1
                      ? "Diagnóstico de Saúde"
                      : step === 2
                      ? "Cadastro da Orquídea"
                      : "Plano Liberado"}
                  </span>
                  <span>{step === 1 ? "33%" : step === 2 ? "66%" : "100%"}</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#155F4E]/15">
                  <div
                    className="h-full bg-gradient-to-r from-[#155F4E] to-[#D35400] transition-all duration-500"
                    style={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
                  />
                </div>
              </div>

              {/* STEP CONTENT SWITCHER FOR FIRST TIME USER */}
              {flowOption === "option_a" ? (
                // OPTION A: Step 1 = Orquidea -> Step 2 = Diagnostico -> Step 3 = Resultado/Plano
                step === 1 ? (
                  <StepOrchidRegistration
                    orchidName={orchidName}
                    setOrchidName={setOrchidName}
                    orchidSpecies={orchidSpecies}
                    setOrchidSpecies={setOrchidSpecies}
                    environment={environment}
                    setEnvironment={setEnvironment}
                    onNext={() => setStep(2)}
                  />
                ) : step === 2 ? (
                  <StepHealthCheck
                    leafStatus={leafStatus}
                    setLeafStatus={setLeafStatus}
                    rootStatus={rootStatus}
                    setRootStatus={setRootStatus}
                    bloomStatus={bloomStatus}
                    setBloomStatus={setBloomStatus}
                    onNext={() => setStep(3)}
                    onBack={() => setStep(1)}
                  />
                ) : (
                  <StepPlanUnlocked
                    orchidName={orchidName}
                    onGoToProtocol={() => setUserMode("returning")}
                  />
                )
              ) : (
                // OPTION C: Step 1 = Diagnostico -> Step 2 = Orquidea -> Step 3 = Resultado/Plano
                step === 1 ? (
                  <StepHealthCheck
                    leafStatus={leafStatus}
                    setLeafStatus={setLeafStatus}
                    rootStatus={rootStatus}
                    setRootStatus={setRootStatus}
                    bloomStatus={bloomStatus}
                    setBloomStatus={setBloomStatus}
                    onNext={() => setStep(2)}
                    onBack={undefined}
                  />
                ) : step === 2 ? (
                  <StepOrchidRegistration
                    orchidName={orchidName}
                    setOrchidName={setOrchidName}
                    orchidSpecies={orchidSpecies}
                    setOrchidSpecies={setOrchidSpecies}
                    environment={environment}
                    setEnvironment={setEnvironment}
                    onNext={() => setStep(3)}
                  />
                ) : (
                  <StepPlanUnlocked
                    orchidName={orchidName}
                    onGoToProtocol={() => setUserMode("returning")}
                  />
                )
              )}
            </motion.div>
          ) : (
            // RETURNING / ACTIVE CLIENT DASHBOARD
            <motion.div
              key="returning-dashboard"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3 }}
            >
              <ActiveClientDashboard
                orchidName={orchidName}
                species={orchidSpecies}
                environment={environment}
                taskCompleted={taskCompleted}
                setTaskCompleted={setTaskCompleted}
                onResetOnboarding={() => {
                  setUserMode("first_time");
                  setStep(1);
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

/* ---------------- STEP 1: ORCHID REGISTRATION COMPONENT ---------------- */
function StepOrchidRegistration({
  orchidName,
  setOrchidName,
  orchidSpecies,
  setOrchidSpecies,
  environment,
  setEnvironment,
  onNext,
}: {
  orchidName: string;
  setOrchidName: (v: string) => void;
  orchidSpecies: string;
  setOrchidSpecies: (v: string) => void;
  environment: string;
  setEnvironment: (v: string) => void;
  onNext: () => void;
}) {
  return (
    <div className="rounded-3xl border border-[#155F4E]/15 bg-white p-6 shadow-xl shadow-[#173D32]/5">
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#155F4E]/10 text-[#155F4E]">
          <Sprout size={24} />
        </div>
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#D35400]">Passo 1 de 3</span>
          <h2 className="font-display text-2xl text-[#173D32]">Identifique sua Orquídea</h2>
        </div>
      </div>

      <p className="mt-3 text-sm text-[#173D32]/70 leading-relaxed">
        Dar um nome e identificar o ambiente nos ajuda a personalizar o cálculo de fertilização e os lembretes diários.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onNext();
        }}
        className="mt-6 space-y-4"
      >
        {/* Name Input */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#173D32]">
            Nome da sua Orquídea *
          </label>
          <input
            type="text"
            required
            value={orchidName}
            onChange={(e) => setOrchidName(e.target.value)}
            placeholder="Ex: Phalaenopsis da Sala, Mimosa..."
            className="mt-1.5 w-full rounded-2xl border border-[#155F4E]/20 bg-[#F8F5EE]/50 px-4 py-3 text-sm font-semibold text-[#173D32] outline-none transition-all focus:border-[#155F4E] focus:bg-white focus:ring-2 focus:ring-[#155F4E]/20"
          />
        </div>

        {/* Species Selection */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#173D32]">
            Espécie ou Tipo
          </label>
          <div className="mt-2 grid grid-cols-2 gap-2 text-xs font-semibold">
            {["Phalaenopsis", "Cattleya", "Dendrobium", "Outra / Não sei"].map((sp) => (
              <button
                type="button"
                key={sp}
                onClick={() => setOrchidSpecies(sp)}
                className={`rounded-xl border p-3 text-left transition-all ${
                  orchidSpecies === sp
                    ? "border-[#155F4E] bg-[#155F4E]/10 font-bold text-[#155F4E]"
                    : "border-[#155F4E]/15 bg-white text-[#173D32]/70 hover:border-[#155F4E]/40"
                }`}
              >
                {sp}
              </button>
            ))}
          </div>
        </div>

        {/* Environment */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#173D32]">
            Onde ela fica instalada?
          </label>
          <div className="mt-2 grid grid-cols-2 gap-2 text-xs font-semibold">
            {[
              { label: "Varanda / Janela", icon: <Sun size={14} /> },
              { label: "Dentro de Casa", icon: <Heart size={14} /> },
            ].map((item) => (
              <button
                type="button"
                key={item.label}
                onClick={() => setEnvironment(item.label)}
                className={`flex items-center gap-2 rounded-xl border p-3 transition-all ${
                  environment === item.label
                    ? "border-[#155F4E] bg-[#155F4E]/10 font-bold text-[#155F4E]"
                    : "border-[#155F4E]/15 bg-white text-[#173D32]/70 hover:border-[#155F4E]/40"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <button
          type="submit"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#155F4E] py-4 text-sm font-bold uppercase tracking-wider text-[#F8F5EE] shadow-lg shadow-[#155F4E]/25 transition-all hover:bg-[#10483b] active:scale-[0.98]"
        >
          Avançar para o Diagnóstico <ArrowRight size={18} />
        </button>
      </form>
    </div>
  );
}

/* ---------------- STEP 2: HEALTH CHECK DIAGNOSIS COMPONENT ---------------- */
function StepHealthCheck({
  leafStatus,
  setLeafStatus,
  rootStatus,
  setRootStatus,
  bloomStatus,
  setBloomStatus,
  onNext,
  onBack,
}: {
  leafStatus: string;
  setLeafStatus: (v: string) => void;
  rootStatus: string;
  setRootStatus: (v: string) => void;
  bloomStatus: string;
  setBloomStatus: (v: string) => void;
  onNext: () => void;
  onBack?: () => void;
}) {
  return (
    <div className="rounded-3xl border border-[#155F4E]/15 bg-white p-6 shadow-xl shadow-[#173D32]/5">
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#D35400]/10 text-[#D35400]">
          <Stethoscope size={24} />
        </div>
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#D35400]">Passo 2 de 3</span>
          <h2 className="font-display text-2xl text-[#173D32]">Diagnóstico Rápido</h2>
        </div>
      </div>

      <p className="mt-3 text-sm text-[#173D32]/70 leading-relaxed">
        Selecione como sua orquídea está se comportando hoje para gerarmos o plano ideal de nutrição e resgate.
      </p>

      <div className="mt-6 space-y-5">
        {/* Leaf Status */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#173D32]">
            1. Qual o estado das Folhas?
          </label>
          <div className="mt-2 space-y-2 text-xs font-semibold">
            {[
              { id: "amarela", title: "Amareladas, moles ou murchas", desc: "Sinal de estresse ou desidratação" },
              { id: "manchas", title: "Com manchas pretas ou marrons", desc: "Possível fungo ou excesso de umidade" },
              { id: "saudavel", title: "Verdes e firmes", desc: "Ótima absorção nutricional" },
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setLeafStatus(opt.id)}
                className={`flex w-full items-start gap-3 rounded-2xl border p-3.5 text-left transition-all ${
                  leafStatus === opt.id
                    ? "border-[#155F4E] bg-[#155F4E]/10 text-[#155F4E]"
                    : "border-[#155F4E]/15 bg-white text-[#173D32]/70 hover:border-[#155F4E]/30"
                }`}
              >
                <div
                  className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full border ${
                    leafStatus === opt.id ? "border-[#155F4E] bg-[#155F4E]" : "border-[#173D32]/30"
                  }`}
                >
                  {leafStatus === opt.id && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                </div>
                <div>
                  <div className="font-bold text-[#173D32]">{opt.title}</div>
                  <div className="text-[11px] opacity-75">{opt.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Root Status */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#173D32]">
            2. Como estão as Raízes?
          </label>
          <div className="mt-2 grid grid-cols-2 gap-2 text-xs font-semibold">
            {[
              { id: "seca", title: "Secas e cinzentas" },
              { id: "podre", title: "Moles ou escuras" },
              { id: "saudavel", title: "Verdes e ativas" },
              { id: "pouca", title: "Pouquíssimas raízes" },
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setRootStatus(opt.id)}
                className={`rounded-xl border p-3 text-left transition-all ${
                  rootStatus === opt.id
                    ? "border-[#155F4E] bg-[#155F4E]/10 font-bold text-[#155F4E]"
                    : "border-[#155F4E]/15 bg-white text-[#173D32]/70 hover:border-[#155F4E]/30"
                }`}
              >
                {opt.title}
              </button>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex items-center gap-3 pt-2">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="rounded-2xl border border-[#155F4E]/20 px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-[#173D32]/70 hover:bg-[#155F4E]/10"
            >
              Voltar
            </button>
          )}
          <button
            type="button"
            onClick={onNext}
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#D35400] py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-[#D35400]/25 transition-all hover:bg-[#b84800] active:scale-[0.98]"
          >
            Gerar Diagnóstico <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- STEP 3: PLAN UNLOCKED RESULT COMPONENT ---------------- */
function StepPlanUnlocked({
  orchidName,
  onGoToProtocol,
}: {
  orchidName: string;
  onGoToProtocol: () => void;
}) {
  return (
    <div className="rounded-3xl border border-[#155F4E]/15 bg-white p-6 shadow-xl shadow-[#173D32]/5 text-center">
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-[#155F4E] text-[#F8F5EE] shadow-lg shadow-[#155F4E]/30">
        <CheckCircle2 size={36} />
      </div>

      <span className="mt-4 inline-flex items-center gap-1 rounded-full bg-[#D35400]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#D35400]">
        <Sparkles size={12} /> Diagnóstico Concluído
      </span>

      <h2 className="mt-2 font-display text-2xl text-[#173D32]">
        Plano de Resgate Personalizado para "{orchidName}"
      </h2>

      <p className="mt-2 text-sm text-[#173D32]/75 leading-relaxed">
        Detectamos necessidade imediata de fortalecimento de raízes e reposição de nutrientes orgânicos.
      </p>

      {/* Prescription Card */}
      <div className="mt-6 rounded-2xl border border-[#155F4E]/15 bg-[#F8F5EE] p-4 text-left">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#155F4E]">
          <ShieldCheck size={16} /> Prescrição Inicial de 21 Dias
        </div>
        <div className="mt-3 space-y-2.5 text-xs text-[#173D32]">
          <div className="flex items-center justify-between rounded-xl bg-white p-2.5 font-semibold shadow-sm">
            <span className="flex items-center gap-2">
              <Sprout size={16} className="text-[#155F4E]" /> Passo I: Enraizador Orgânico (500ml)
            </span>
            <span className="text-[10px] uppercase font-bold text-[#D35400]">Dose Resgate</span>
          </div>
          <div className="flex items-center justify-between rounded-xl bg-white p-2.5 font-semibold shadow-sm">
            <span className="flex items-center gap-2">
              <Leaf size={16} className="text-[#155F4E]" /> Passo II: Fertilizante Bokashi (500ml)
            </span>
            <span className="text-[10px] uppercase font-bold text-[#155F4E]">Manutenção</span>
          </div>
        </div>
      </div>

      <button
        onClick={onGoToProtocol}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#155F4E] py-4 text-sm font-bold uppercase tracking-wider text-[#F8F5EE] shadow-xl shadow-[#155F4E]/25 transition-all hover:bg-[#10483b] active:scale-[0.98]"
      >
        Entrar no Painel do Dia 1 <ChevronRight size={20} />
      </button>
    </div>
  );
}

/* ---------------- ACTIVE CLIENT DASHBOARD (RETURNING USER) ---------------- */
function ActiveClientDashboard({
  orchidName,
  species,
  environment,
  taskCompleted,
  setTaskCompleted,
  onResetOnboarding,
}: {
  orchidName: string;
  species: string;
  environment: string;
  taskCompleted: boolean;
  setTaskCompleted: (v: boolean) => void;
  onResetOnboarding: () => void;
}) {
  return (
    <div className="space-y-5">
      {/* Active Plant Banner Card */}
      <div className="rounded-3xl border border-[#155F4E]/20 bg-gradient-to-br from-[#155F4E] to-[#0D3B30] p-5 text-[#F8F5EE] shadow-xl">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
            <Sparkles size={12} className="text-[#F2994A]" /> Em Acompanhamento • Dia 3 de 21
          </span>
          <button
            onClick={onResetOnboarding}
            className="text-[11px] text-white/75 underline hover:text-white"
          >
            Refazer Diagnóstico
          </button>
        </div>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-normal leading-tight text-white">
              {orchidName}
            </h2>
            <p className="mt-1 text-xs opacity-80">
              {species} • {environment}
            </p>
          </div>
          <div className="rounded-2xl bg-white/10 p-3 text-center backdrop-blur-sm">
            <div className="text-[10px] font-bold uppercase opacity-75">Vigor</div>
            <div className="text-xl font-bold text-[#F2994A]">94%</div>
          </div>
        </div>
      </div>

      {/* TODAY'S MAIN TASK CARD (DAY 3) */}
      <div className="rounded-3xl border border-[#155F4E]/15 bg-white p-6 shadow-xl shadow-[#173D32]/5">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#D35400]">
            Fase I: Enraizar • Hoje (Dia 3)
          </span>
          <span className="flex h-2 w-2 rounded-full bg-[#D35400] animate-ping" />
        </div>

        <h3 className="mt-2 font-display text-xl text-[#173D32]">
          Aplicação do Enraizador Orgânico 500ml
        </h3>

        <p className="mt-2 text-xs text-[#173D32]/75 leading-relaxed">
          Borrifar a diluição de 5ml por litro diretamente no substrato e nas raízes aéreas. Evitar aplicar com sol forte.
        </p>

        {/* Task completion toggle */}
        <div className="mt-5 pt-3 border-t border-[#155F4E]/10">
          <button
            onClick={() => setTaskCompleted(!taskCompleted)}
            className={`flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-xs font-bold uppercase tracking-wider transition-all ${
              taskCompleted
                ? "bg-[#155F4E]/15 text-[#155F4E] border border-[#155F4E]/30"
                : "bg-[#155F4E] text-[#F8F5EE] shadow-md shadow-[#155F4E]/20 hover:bg-[#10483b]"
            }`}
          >
            {taskCompleted ? (
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
      </div>

      {/* Quick Shortcuts */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-[#155F4E]/15 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold text-[#173D32]">
            <Camera size={16} className="text-[#155F4E]" /> Foto de Hoje
          </div>
          <p className="mt-1 text-[11px] text-[#173D32]/70">Registre o progresso das raízes</p>
        </div>
        <div className="rounded-2xl border border-[#155F4E]/15 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold text-[#173D32]">
            <Calendar size={16} className="text-[#155F4E]" /> Próximo Passo
          </div>
          <p className="mt-1 text-[11px] text-[#173D32]/70">Dia 4: Avaliar Hidratação</p>
        </div>
      </div>
    </div>
  );
}
