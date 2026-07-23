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
  AlertTriangle,
  Info,
  Clock,
  HelpCircle,
} from "lucide-react";
import {
  CATEGORY_LABEL,
  DIAGNOSIS_OPTIONS,
  type DiagnosisCategory,
} from "@/lib/diagnosis-matrix";

export const Route = createFileRoute("/teste-onboarding")({
  head: () => ({
    meta: [
      { title: "Demonstração Interativa das 3 Opções de Onboarding — PlantaeFert" },
      { name: "description", content: "Teste visual interativo dos 3 modelos de onboarding e diagnóstico integrado." },
    ],
  }),
  component: TesteOnboardingPage,
});

export type UserMode = "first_time" | "returning";
export type OnboardingOption = "option_1" | "option_2" | "option_3";

export function TesteOnboardingPage() {
  const [userMode, setUserMode] = useState<UserMode>("first_time");
  const [option, setOption] = useState<OnboardingOption>("option_1");

  // Form & Orchid State
  const [orchidName, setOrchidName] = useState("Minha Phalaenopsis");
  const [orchidSpecies, setOrchidSpecies] = useState("Phalaenopsis");
  const [environment, setEnvironment] = useState("Varanda / Janela (Luz Indireta)");

  // Option 1 State (Wizard in 5 Categories)
  const [wizardStep, setWizardStep] = useState<number>(0); // 0 = Registration, 1..5 = Categories, 6 = Result
  const [selectedAnswers, setSelectedAnswers] = useState<Record<DiagnosisCategory, string[]>>({
    roots: ["Raízes secas ou ocas"],
    leaves: ["Folhas amareladas"],
    environment: ["Boa luminosidade indireta"],
    potAndSubstrate: ["Vaso com furos suficientes"],
    wateringAndRoutine: ["Rego sempre em dias fixos"],
  });

  // Option 2 State (Sintoma Principal / Urgência)
  const [opt2Step, setOpt2Step] = useState<number>(0); // 0 = Registration, 1 = Urgent Symptom, 2 = Focused Questions, 3 = Result
  const [primarySymptom, setPrimarySymptom] = useState<string>("roots");

  // Option 3 State (Expresso 3 Perguntas + Aprofundamento)
  const [opt3Step, setOpt3Step] = useState<number>(0); // 0 = Reg, 1 = Express 3 Questions, 2 = Express Result, 3 = Deepening
  const [isDeepened, setIsDeepened] = useState<boolean>(false);

  // Active User State
  const [taskCompleted, setTaskCompleted] = useState<boolean>(false);

  const resetAll = () => {
    setWizardStep(0);
    setOpt2Step(0);
    setOpt3Step(0);
    setIsDeepened(false);
    setTaskCompleted(false);
  };

  const categoriesOrder: DiagnosisCategory[] = [
    "roots",
    "leaves",
    "environment",
    "potAndSubstrate",
    "wateringAndRoutine",
  ];

  return (
    <div className="min-h-screen bg-[#F8F5EE] text-[#173D32] font-sans selection:bg-[#155F4E]/10">
      {/* Top Demo Control Header */}
      <header className="sticky top-0 z-50 border-b border-[#155F4E]/15 bg-[#F8F5EE]/95 backdrop-blur-md px-4 py-3">
        <div className="mx-auto flex max-w-xl flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <PlantaefertLogo className="h-8 w-auto object-contain" />
              <span className="rounded-full bg-[#155F4E]/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#155F4E]">
                Simulador de Usabilidade
              </span>
            </div>
            <button
              onClick={resetAll}
              className="flex items-center gap-1 text-[12px] font-bold text-[#D35400] hover:underline"
            >
              <RotateCcw size={14} /> Reiniciar Fluxo
            </button>
          </div>

          {/* Mode Switcher */}
          <div className="grid grid-cols-2 gap-1.5 rounded-xl bg-[#155F4E]/10 p-1 text-[12px] font-bold">
            <button
              onClick={() => {
                setUserMode("first_time");
                resetAll();
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

          {/* Option Selector for First-Time Users */}
          {userMode === "first_time" && (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[11px] font-bold text-[#173D32]">
                <span>Escolha o Modelo de Onboarding:</span>
                <span className="text-[#D35400] uppercase font-extrabold">
                  {option === "option_1" ? "Opção 1" : option === "option_2" ? "Opção 2" : "Opção 3"}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1 rounded-xl bg-white p-1 border border-[#155F4E]/15 text-[10.5px] font-bold">
                <button
                  onClick={() => {
                    setOption("option_1");
                    resetAll();
                  }}
                  className={`rounded-lg py-1.5 px-1 text-center transition-all ${
                    option === "option_1"
                      ? "bg-[#D35400] text-white shadow-sm font-extrabold"
                      : "text-[#173D32]/70 hover:bg-[#155F4E]/10"
                  }`}
                >
                  1. Wizard 5 Categ.
                </button>
                <button
                  onClick={() => {
                    setOption("option_2");
                    resetAll();
                  }}
                  className={`rounded-lg py-1.5 px-1 text-center transition-all ${
                    option === "option_2"
                      ? "bg-[#D35400] text-white shadow-sm font-extrabold"
                      : "text-[#173D32]/70 hover:bg-[#155F4E]/10"
                  }`}
                >
                  2. Triagem Sintoma
                </button>
                <button
                  onClick={() => {
                    setOption("option_3");
                    resetAll();
                  }}
                  className={`rounded-lg py-1.5 px-1 text-center transition-all ${
                    option === "option_3"
                      ? "bg-[#D35400] text-white shadow-sm font-extrabold"
                      : "text-[#173D32]/70 hover:bg-[#155F4E]/10"
                  }`}
                >
                  3. Expresso + Opção
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto min-h-[calc(100vh-140px)] max-w-[440px] px-4 py-5">
        <AnimatePresence mode="wait">
          {userMode === "first_time" ? (
            <motion.div
              key={`first-time-${option}-${wizardStep}-${opt2Step}-${opt3Step}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {/* RENDER SELECTED OPTION */}
              {option === "option_1" && (
                <RenderOption1
                  step={wizardStep}
                  setStep={setWizardStep}
                  orchidName={orchidName}
                  setOrchidName={setOrchidName}
                  orchidSpecies={orchidSpecies}
                  setOrchidSpecies={setOrchidSpecies}
                  environment={environment}
                  setEnvironment={setEnvironment}
                  categoriesOrder={categoriesOrder}
                  selectedAnswers={selectedAnswers}
                  setSelectedAnswers={setSelectedAnswers}
                  onFinish={() => setUserMode("returning")}
                />
              )}

              {option === "option_2" && (
                <RenderOption2
                  step={opt2Step}
                  setStep={setOpt2Step}
                  orchidName={orchidName}
                  setOrchidName={setOrchidName}
                  orchidSpecies={orchidSpecies}
                  setOrchidSpecies={setOrchidSpecies}
                  primarySymptom={primarySymptom}
                  setPrimarySymptom={setPrimarySymptom}
                  selectedAnswers={selectedAnswers}
                  setSelectedAnswers={setSelectedAnswers}
                  onFinish={() => setUserMode("returning")}
                />
              )}

              {option === "option_3" && (
                <RenderOption3
                  step={opt3Step}
                  setStep={setOpt3Step}
                  orchidName={orchidName}
                  setOrchidName={setOrchidName}
                  orchidSpecies={orchidSpecies}
                  setOrchidSpecies={setOrchidSpecies}
                  isDeepened={isDeepened}
                  setIsDeepened={setIsDeepened}
                  selectedAnswers={selectedAnswers}
                  setSelectedAnswers={setSelectedAnswers}
                  onFinish={() => setUserMode("returning")}
                />
              )}
            </motion.div>
          ) : (
            /* ACTIVE CLIENT DASHBOARD */
            <motion.div
              key="active-dashboard"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <ActiveClientDashboard
                orchidName={orchidName}
                species={orchidSpecies}
                environment={environment}
                taskCompleted={taskCompleted}
                setTaskCompleted={setTaskCompleted}
                onReset={() => {
                  setUserMode("first_time");
                  resetAll();
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

/* =========================================================================
   OPTION 1: WIZARD EM 5 CATEGORIAS (REAL MATRIX INTEGRATED)
   ========================================================================= */
function RenderOption1({
  step,
  setStep,
  orchidName,
  setOrchidName,
  orchidSpecies,
  setOrchidSpecies,
  environment,
  setEnvironment,
  categoriesOrder,
  selectedAnswers,
  setSelectedAnswers,
  onFinish,
}: {
  step: number;
  setStep: (s: number) => void;
  orchidName: string;
  setOrchidName: (v: string) => void;
  orchidSpecies: string;
  setOrchidSpecies: (v: string) => void;
  environment: string;
  setEnvironment: (v: string) => void;
  categoriesOrder: DiagnosisCategory[];
  selectedAnswers: Record<DiagnosisCategory, string[]>;
  setSelectedAnswers: React.Dispatch<React.SetStateAction<Record<DiagnosisCategory, string[]>>>;
  onFinish: () => void;
}) {
  // Step 0: Registration
  if (step === 0) {
    return (
      <div className="rounded-3xl border border-[#155F4E]/15 bg-white p-6 shadow-xl shadow-[#173D32]/5">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#155F4E]/10 text-[#155F4E]">
            <Sprout size={24} />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D35400]">
              Opção 1 • Passo 1 de 7
            </span>
            <h2 className="font-display text-2xl text-[#173D32]">Identifique sua Orquídea</h2>
          </div>
        </div>

        <p className="mt-3 text-xs text-[#173D32]/75 leading-relaxed">
          Comece dando um nome carinhoso à sua planta. Isso personalizará os lembretes do plano de 21 dias.
        </p>

        <div className="mt-5 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#173D32]">
              Nome da Orquídea *
            </label>
            <input
              type="text"
              value={orchidName}
              onChange={(e) => setOrchidName(e.target.value)}
              placeholder="Ex: Phalaenopsis da Sala, Princesa..."
              className="mt-1.5 w-full rounded-2xl border border-[#155F4E]/20 bg-[#F8F5EE]/50 px-4 py-3 text-sm font-semibold text-[#173D32] outline-none focus:border-[#155F4E] focus:bg-white focus:ring-2 focus:ring-[#155F4E]/20"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#173D32]">
              Espécie ou Tipo
            </label>
            <div className="mt-2 grid grid-cols-2 gap-2 text-xs font-semibold">
              {["Phalaenopsis", "Cattleya", "Dendrobium", "Não sei a espécie"].map((sp) => (
                <button
                  key={sp}
                  type="button"
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

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#173D32]">
              Ambiente de Cultivo
            </label>
            <input
              type="text"
              value={environment}
              onChange={(e) => setEnvironment(e.target.value)}
              className="mt-1.5 w-full rounded-2xl border border-[#155F4E]/20 bg-[#F8F5EE]/50 px-4 py-3 text-sm font-semibold text-[#173D32]"
            />
          </div>

          <button
            onClick={() => setStep(1)}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#155F4E] py-4 text-xs font-bold uppercase tracking-wider text-[#F8F5EE] shadow-lg shadow-[#155F4E]/25 transition-all hover:bg-[#10483b] active:scale-[0.98]"
          >
            Iniciar Diagnóstico de 5 Passos <ArrowRight size={16} />
          </button>
        </div>
      </div>
    );
  }

  // Steps 1 to 5: Category Questions (Wizard)
  if (step >= 1 && step <= 5) {
    const categoryKey = categoriesOrder[step - 1];
    const categoryName = CATEGORY_LABEL[categoryKey];
    const options = DIAGNOSIS_OPTIONS[categoryKey];
    const currentSelected = selectedAnswers[categoryKey] || [];

    const toggleOption = (val: string) => {
      setSelectedAnswers((prev) => {
        const list = prev[categoryKey] || [];
        const exists = list.includes(val);
        const nextList = exists ? list.filter((item) => item !== val) : [...list, val];
        return { ...prev, [categoryKey]: nextList };
      });
    };

    return (
      <div className="rounded-3xl border border-[#155F4E]/15 bg-white p-6 shadow-xl shadow-[#173D32]/5">
        {/* Progress header */}
        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#D35400]">
          <span>Opção 1 • Categoria {step} de 5</span>
          <span>{step * 20}%</span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#155F4E]/10">
          <div
            className="h-full bg-[#D35400] transition-all duration-300"
            style={{ width: `${step * 20}%` }}
          />
        </div>

        <div className="mt-5 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#155F4E]/10 text-[#155F4E]">
            <Stethoscope size={20} />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#155F4E]">
              Exame Visual
            </span>
            <h2 className="font-display text-xl text-[#173D32]">Sinais em: {categoryName}</h2>
          </div>
        </div>

        <p className="mt-2 text-xs text-[#173D32]/75 leading-relaxed">
          Selecione todos os sinais que você observa atualmente em "{orchidName}" (pode marcar mais de um):
        </p>

        {/* Options list */}
        <div className="mt-4 space-y-2 max-h-[280px] overflow-y-auto pr-1">
          {options.map((opt) => {
            const isChecked = currentSelected.includes(opt);
            return (
              <button
                key={opt}
                type="button"
                onClick={() => toggleOption(opt)}
                className={`flex w-full items-center justify-between rounded-2xl border p-3.5 text-left text-xs font-semibold transition-all ${
                  isChecked
                    ? "border-[#155F4E] bg-[#155F4E]/10 text-[#155F4E] font-bold shadow-sm"
                    : "border-[#155F4E]/15 bg-white text-[#173D32]/80 hover:border-[#155F4E]/30"
                }`}
              >
                <span>{opt}</span>
                <div
                  className={`grid h-5 w-5 place-items-center rounded-full border ${
                    isChecked ? "border-[#155F4E] bg-[#155F4E] text-white" : "border-[#173D32]/30"
                  }`}
                >
                  {isChecked && <CheckCircle2 size={14} />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="mt-6 flex items-center gap-2 pt-2 border-t border-[#155F4E]/10">
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            className="rounded-2xl border border-[#155F4E]/20 px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#173D32]/70 hover:bg-[#155F4E]/10"
          >
            Voltar
          </button>
          <button
            type="button"
            onClick={() => setStep(step + 1)}
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#155F4E] py-3.5 text-xs font-bold uppercase tracking-wider text-[#F8F5EE] shadow-lg shadow-[#155F4E]/20 hover:bg-[#10483b]"
          >
            {step === 5 ? "Gerar Prescrição Oficial" : "Próxima Categoria"} <ArrowRight size={16} />
          </button>
        </div>
      </div>
    );
  }

  // Step 6: Full Diagnosis Result & Official Prescription
  return (
    <RenderOfficialPrescriptionResult
      orchidName={orchidName}
      onFinish={onFinish}
      priorities={["Raízes secas ou ocas (Risco de Desidratação)"]}
      adjustments={["Folhas amareladas"]}
      favorables={["Luminosidade indireta adequada", "Vaso perfurado"]}
    />
  );
}

/* =========================================================================
   OPTION 2: TRIAGEM POR SINTOMA PRINCIPAL / URGÊNCIA
   ========================================================================= */
function RenderOption2({
  step,
  setStep,
  orchidName,
  setOrchidName,
  orchidSpecies,
  setOrchidSpecies,
  primarySymptom,
  setPrimarySymptom,
  selectedAnswers,
  setSelectedAnswers,
  onFinish,
}: {
  step: number;
  setStep: (s: number) => void;
  orchidName: string;
  setOrchidName: (v: string) => void;
  orchidSpecies: string;
  setOrchidSpecies: (v: string) => void;
  primarySymptom: string;
  setPrimarySymptom: (v: string) => void;
  selectedAnswers: Record<DiagnosisCategory, string[]>;
  setSelectedAnswers: React.Dispatch<React.SetStateAction<Record<DiagnosisCategory, string[]>>>;
  onFinish: () => void;
}) {
  if (step === 0) {
    return (
      <div className="rounded-3xl border border-[#155F4E]/15 bg-white p-6 shadow-xl shadow-[#173D32]/5">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#D35400]/10 text-[#D35400]">
            <AlertTriangle size={24} />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D35400]">
              Opção 2 • Triagem Urgência
            </span>
            <h2 className="font-display text-2xl text-[#173D32]">Identifique a Planta</h2>
          </div>
        </div>

        <p className="mt-3 text-xs text-[#173D32]/75 leading-relaxed">
          Modelo focado em responder primeiro o sintoma de maior emergência da planta.
        </p>

        <div className="mt-5 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#173D32]">
              Nome da Orquídea *
            </label>
            <input
              type="text"
              value={orchidName}
              onChange={(e) => setOrchidName(e.target.value)}
              className="mt-1.5 w-full rounded-2xl border border-[#155F4E]/20 bg-[#F8F5EE]/50 px-4 py-3 text-sm font-semibold text-[#173D32]"
            />
          </div>

          <button
            onClick={() => setStep(1)}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#D35400] py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#D35400]/25 transition-all hover:bg-[#b84800]"
          >
            Ir para Triagem por Sintoma <ArrowRight size={16} />
          </button>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="rounded-3xl border border-[#155F4E]/15 bg-white p-6 shadow-xl shadow-[#173D32]/5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#D35400]">
          Opção 2 • Triagem Passo 2
        </span>
        <h2 className="mt-1 font-display text-2xl text-[#173D32]">
          Qual o Sintoma Principal de "{orchidName}"?
        </h2>
        <p className="mt-2 text-xs text-[#173D32]/75">
          Selecione a dor ou alteração que mais te preocupa hoje para focarmos o socorro:
        </p>

        <div className="mt-5 space-y-3">
          {[
            {
              id: "roots",
              title: "🔴 Raízes secas, moles ou escuras",
              desc: "Planta com dificuldade para absorver água e nutrientes",
            },
            {
              id: "leaves",
              title: "🟡 Folhas amareladas, murchas ou com manchas",
              desc: "Sinal de estresse hídrico, queimadura ou nutrição fraca",
            },
            {
              id: "bloom",
              title: "🌸 Não floresce há muitos meses ou botões caem",
              desc: "Falta de energia biológica para emitir hastes florais",
            },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setPrimarySymptom(item.id);
                setStep(2);
              }}
              className={`flex w-full items-start gap-3 rounded-2xl border p-4 text-left transition-all ${
                primarySymptom === item.id
                  ? "border-[#D35400] bg-[#D35400]/10 text-[#D35400] font-bold shadow-md"
                  : "border-[#155F4E]/15 bg-white text-[#173D32]/80 hover:border-[#D35400]/30"
              }`}
            >
              <div>
                <div className="text-sm font-bold text-[#173D32]">{item.title}</div>
                <div className="mt-1 text-xs opacity-75">{item.desc}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="rounded-3xl border border-[#155F4E]/15 bg-white p-6 shadow-xl shadow-[#173D32]/5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#155F4E]">
          Opção 2 • Perguntas Específicas
        </span>
        <h2 className="mt-1 font-display text-xl text-[#173D32]">
          Aprofundamento sobre Sintoma Selecionado
        </h2>
        <p className="mt-2 text-xs text-[#173D32]/75">
          Com base na sua escolha, confirme estes pontos adicionais sobre substrato e irrigação:
        </p>

        <div className="mt-4 space-y-3 text-xs font-semibold">
          <div className="rounded-2xl border border-[#155F4E]/15 bg-[#F8F5EE] p-3.5">
            <div className="font-bold text-[#155F4E]">A água escoa livremente após regar?</div>
            <div className="mt-2 flex gap-2">
              <button className="flex-1 rounded-xl bg-white p-2 border border-[#155F4E]/20 text-center font-bold">
                Sim, escoa bem
              </button>
              <button className="flex-1 rounded-xl bg-white p-2 border border-[#155F4E]/20 text-center font-bold text-[#D35400]">
                Não, acumula
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-[#155F4E]/15 bg-[#F8F5EE] p-3.5">
            <div className="font-bold text-[#155F4E]">Qual a frequência de rega atual?</div>
            <div className="mt-2 flex gap-2">
              <button className="flex-1 rounded-xl bg-white p-2 border border-[#155F4E]/20 text-center font-bold">
                1x por semana
              </button>
              <button className="flex-1 rounded-xl bg-white p-2 border border-[#155F4E]/20 text-center font-bold">
                Apenas quando seca
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={() => setStep(3)}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#155F4E] py-4 text-xs font-bold uppercase tracking-wider text-[#F8F5EE] shadow-lg shadow-[#155F4E]/25 transition-all hover:bg-[#10483b]"
        >
          Gerar Prescrição de Socorro <ArrowRight size={16} />
        </button>
      </div>
    );
  }

  return (
    <RenderOfficialPrescriptionResult
      orchidName={orchidName}
      onFinish={onFinish}
      priorities={["Raízes com baixa absorção (Prioridade Alerta)"]}
      adjustments={["Frequência de rega inadequada"]}
      favorables={["Vaso ventilado"]}
    />
  );
}

/* =========================================================================
   OPTION 3: DIAGNÓSTICO EXPRESSO (3 PERGUNTAS) + APROFUNDAMENTO OPCIONAL
   ========================================================================= */
function RenderOption3({
  step,
  setStep,
  orchidName,
  setOrchidName,
  orchidSpecies,
  setOrchidSpecies,
  isDeepened,
  setIsDeepened,
  selectedAnswers,
  setSelectedAnswers,
  onFinish,
}: {
  step: number;
  setStep: (s: number) => void;
  orchidName: string;
  setOrchidName: (v: string) => void;
  orchidSpecies: string;
  setOrchidSpecies: (v: string) => void;
  isDeepened: boolean;
  setIsDeepened: (v: boolean) => void;
  selectedAnswers: Record<DiagnosisCategory, string[]>;
  setSelectedAnswers: React.Dispatch<React.SetStateAction<Record<DiagnosisCategory, string[]>>>;
  onFinish: () => void;
}) {
  if (step === 0) {
    return (
      <div className="rounded-3xl border border-[#155F4E]/15 bg-white p-6 shadow-xl shadow-[#173D32]/5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#D35400]">
          Opção 3 • Expresso 3 Perguntas
        </span>
        <h2 className="mt-1 font-display text-2xl text-[#173D32]">Identifique a Orquídea</h2>
        <p className="mt-2 text-xs text-[#173D32]/75">
          Diagnóstico ultra-rápido de 30 segundos com opção de refinar depois.
        </p>

        <div className="mt-4 space-y-4">
          <input
            type="text"
            value={orchidName}
            onChange={(e) => setOrchidName(e.target.value)}
            className="w-full rounded-2xl border border-[#155F4E]/20 bg-[#F8F5EE]/50 px-4 py-3 text-sm font-semibold"
            placeholder="Nome da orquídea"
          />

          <button
            onClick={() => setStep(1)}
            className="w-full rounded-2xl bg-[#155F4E] py-4 text-xs font-bold uppercase tracking-wider text-[#F8F5EE] shadow-lg shadow-[#155F4E]/20 hover:bg-[#10483b]"
          >
            Iniciar Check-up Expresso (3 Perguntas) <ArrowRight size={16} className="inline ml-1" />
          </button>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="rounded-3xl border border-[#155F4E]/15 bg-white p-6 shadow-xl shadow-[#173D32]/5 space-y-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#D35400]">
          Opção 3 • 3 Perguntas Cruciais
        </span>
        <h2 className="font-display text-xl text-[#173D32]">Check-up Rápido de "{orchidName}"</h2>

        <div className="space-y-3 text-xs font-semibold">
          <div className="rounded-2xl border border-[#155F4E]/15 p-3.5 bg-[#F8F5EE]">
            <div className="font-bold text-[#155F4E]">1. Estado das Raízes</div>
            <div className="mt-1.5 flex gap-2">
              <button className="flex-1 rounded-xl bg-white p-2 border border-[#155F4E]/20 font-bold text-[#D35400]">
                Secas / Ocas
              </button>
              <button className="flex-1 rounded-xl bg-white p-2 border border-[#155F4E]/20 font-bold text-[#155F4E]">
                Verdes / Firmes
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-[#155F4E]/15 p-3.5 bg-[#F8F5EE]">
            <div className="font-bold text-[#155F4E]">2. Estado das Folhas</div>
            <div className="mt-1.5 flex gap-2">
              <button className="flex-1 rounded-xl bg-white p-2 border border-[#155F4E]/20 font-bold text-[#D35400]">
                Amareladas
              </button>
              <button className="flex-1 rounded-xl bg-white p-2 border border-[#155F4E]/20 font-bold text-[#155F4E]">
                Verdes Firmes
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-[#155F4E]/15 p-3.5 bg-[#F8F5EE]">
            <div className="font-bold text-[#155F4E]">3. Luminosidade</div>
            <div className="mt-1.5 flex gap-2">
              <button className="flex-1 rounded-xl bg-white p-2 border border-[#155F4E]/20 font-bold text-[#155F4E]">
                Luz Indireta
              </button>
              <button className="flex-1 rounded-xl bg-white p-2 border border-[#155F4E]/20 font-bold text-[#D35400]">
                Sol Direto
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={() => setStep(2)}
          className="w-full rounded-2xl bg-[#D35400] py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#D35400]/25 hover:bg-[#b84800]"
        >
          Ver Diagnóstico Expresso <ArrowRight size={16} className="inline ml-1" />
        </button>
      </div>
    );
  }

  // Step 2: Express Result + Deepening CTA
  return (
    <div className="space-y-4">
      <RenderOfficialPrescriptionResult
        orchidName={orchidName}
        onFinish={onFinish}
        priorities={["Raízes secas detectadas"]}
        adjustments={["Ajuste de luz indireta"]}
        favorables={["Folhas firmes"]}
        extraHeaderInfo={
          !isDeepened && (
            <div className="mb-4 rounded-2xl border border-[#D35400]/30 bg-[#D35400]/10 p-3.5 text-left text-xs font-semibold text-[#D35400]">
              <div className="flex items-center gap-1.5 font-bold">
                <Info size={16} /> Diagnóstico Expresso Gerado!
              </div>
              <p className="mt-1 opacity-90 text-[11px]">
                Você respondeu 3 perguntas essenciais. Quer responder mais 2 sobre Vaso e Rega para aumentar a precisão da prescrição?
              </p>
              <button
                onClick={() => setIsDeepened(true)}
                className="mt-2.5 rounded-xl bg-[#D35400] px-3 py-1.5 text-[11px] font-bold text-white shadow-sm hover:bg-[#b84800]"
              >
                + Aprofundar Vaso e Rega Agora
              </button>
            </div>
          )
        }
      />
    </div>
  );
}

/* =========================================================================
   OFFICIAL PRESCRIPTION RESULT COMPONENT (WITH PDF SPECS & READY-TO-USE RULES)
   ========================================================================= */
function RenderOfficialPrescriptionResult({
  orchidName,
  onFinish,
  priorities,
  adjustments,
  favorables,
  extraHeaderInfo,
}: {
  orchidName: string;
  onFinish: () => void;
  priorities: string[];
  adjustments: string[];
  favorables: string[];
  extraHeaderInfo?: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-[#155F4E]/15 bg-white p-6 shadow-xl shadow-[#173D32]/5 text-center">
      {extraHeaderInfo}

      <div className="mx-auto grid h-14 w-14 place-items-center rounded-3xl bg-[#155F4E] text-[#F8F5EE] shadow-lg shadow-[#155F4E]/25">
        <CheckCircle2 size={32} />
      </div>

      <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-[#155F4E]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#155F4E]">
        <Award size={13} /> Prescrição Oficial PlantaeFert
      </span>

      <h2 className="mt-2 font-display text-2xl text-[#173D32]">
        Diagnóstico de "{orchidName}"
      </h2>

      {/* Vigor Score & Summary */}
      <div className="mt-4 grid grid-cols-3 gap-2 rounded-2xl bg-[#F8F5EE] p-3 text-center text-xs">
        <div className="rounded-xl bg-white p-2.5 border border-[#155F4E]/10">
          <div className="text-[10px] font-bold uppercase text-[#D35400]">Prioridades</div>
          <div className="text-lg font-extrabold text-[#D35400]">{priorities.length}</div>
        </div>
        <div className="rounded-xl bg-white p-2.5 border border-[#155F4E]/10">
          <div className="text-[10px] font-bold uppercase text-[#155F4E]">Ajustes</div>
          <div className="text-lg font-extrabold text-[#155F4E]">{adjustments.length}</div>
        </div>
        <div className="rounded-xl bg-white p-2.5 border border-[#155F4E]/10">
          <div className="text-[10px] font-bold uppercase text-[#155F4E]">Favoráveis</div>
          <div className="text-lg font-extrabold text-[#155F4E]">{favorables.length}</div>
        </div>
      </div>

      {/* Actionable Guidance Tips */}
      <div className="mt-4 rounded-2xl border border-[#155F4E]/15 bg-[#F8F5EE]/60 p-4 text-left space-y-2 text-xs">
        <div className="font-bold uppercase tracking-wider text-[#155F4E] flex items-center gap-1.5">
          <Stethoscope size={14} /> Recomendações Práticas do que Fazer & Evitar
        </div>
        <div className="space-y-1.5 text-[#173D32]/85 text-[11.5px] leading-relaxed">
          <div className="flex items-start gap-1.5">
            <span className="text-[#D35400] font-bold">•</span>
            <span><strong>O que Fazer:</strong> Aplicar o Enraizador Orgânico 500ml Pronto Uso semanalmente para recuperar o sistema de raízes.</span>
          </div>
          <div className="flex items-start gap-1.5">
            <span className="text-[#D35400] font-bold">•</span>
            <span><strong>O que Evitar:</strong> Evitar aplicar sob sol forte (entre 9h e 16h) e nunca aplicar diretamente sobre as flores.</span>
          </div>
          <div className="flex items-start gap-1.5">
            <span className="text-[#155F4E] font-bold">•</span>
            <span><strong>O que Observar:</strong> Surgimento de pontas novas de raízes verdes ou prateadas nas próximas 2 a 3 semanas.</span>
          </div>
        </div>
      </div>

      {/* Official Kit Prescriptions Card (PRONTO USO - NO DILUTION) */}
      <div className="mt-4 rounded-2xl border-2 border-[#155F4E]/20 bg-gradient-to-br from-[#155F4E]/5 to-[#155F4E]/10 p-4 text-left">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#155F4E]">
            <ShieldCheck size={16} /> Kit Método 2 Passos (500ml Pronto Uso)
          </div>
          <span className="rounded-full bg-[#155F4E] px-2 py-0.5 text-[9.5px] font-extrabold text-white uppercase">
            Sem Diluição
          </span>
        </div>

        <div className="mt-3 space-y-2.5 text-xs text-[#173D32]">
          {/* Step 1: Enraizador */}
          <div className="rounded-xl bg-white p-3 border border-[#155F4E]/15 shadow-sm space-y-1">
            <div className="flex items-center justify-between font-bold text-[#155F4E]">
              <span className="flex items-center gap-1.5">
                <Sprout size={16} className="text-[#D35400]" /> 1º Passo: Enraizador Orgânico 500ml
              </span>
              <span className="text-[10px] bg-[#D35400]/10 text-[#D35400] px-2 py-0.5 rounded font-extrabold">
                Pronto Uso
              </span>
            </div>
            <p className="text-[11px] text-[#173D32]/80">
              Formulado com <strong>Ácidos Húmicos, Fúlvicos e Extrato de Algas Marinhas</strong>. Borrifar 1x por semana diretamente nas raízes e no substrato (sem diluir).
            </p>
          </div>

          {/* Step 2: Bokashi */}
          <div className="rounded-xl bg-white p-3 border border-[#155F4E]/15 shadow-sm space-y-1">
            <div className="flex items-center justify-between font-bold text-[#155F4E]">
              <span className="flex items-center gap-1.5">
                <Leaf size={16} className="text-[#155F4E]" /> 2º Passo: Bokashi Líquido 500ml
              </span>
              <span className="text-[10px] bg-[#155F4E]/10 text-[#155F4E] px-2 py-0.5 rounded font-extrabold">
                Pronto Uso
              </span>
            </div>
            <p className="text-[11px] text-[#173D32]/80">
              Nutrição orgânica completa para folhas, brotos e hastes florais. Aplicar em seguida nas raízes, folhas e substrato (sem diluir).
            </p>
          </div>

          {/* Frequency & Rules Footer */}
          <div className="flex items-center justify-between text-[10.5px] font-bold text-[#155F4E] pt-1">
            <span className="flex items-center gap-1">
              <Clock size={12} /> Horas frescas (antes das 9h ou após 16h)
            </span>
            <span className="flex items-center gap-1 text-[#D35400]">
              <ShieldCheck size={12} /> Seguro p/ Pets
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={onFinish}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#155F4E] py-4 text-xs font-bold uppercase tracking-wider text-[#F8F5EE] shadow-xl shadow-[#155F4E]/25 transition-all hover:bg-[#10483b] active:scale-[0.98]"
      >
        Liberar Painel do Dia 1 para "{orchidName}" <ChevronRight size={18} />
      </button>
    </div>
  );
}

/* =========================================================================
   ACTIVE CLIENT DASHBOARD (RETURNING USER)
   ========================================================================= */
function ActiveClientDashboard({
  orchidName,
  species,
  environment,
  taskCompleted,
  setTaskCompleted,
  onReset,
}: {
  orchidName: string;
  species: string;
  environment: string;
  taskCompleted: boolean;
  setTaskCompleted: (v: boolean) => void;
  onReset: () => void;
}) {
  return (
    <div className="space-y-4">
      {/* Active Plant Hero Card */}
      <div className="rounded-3xl border border-[#155F4E]/20 bg-gradient-to-br from-[#155F4E] to-[#0D3B30] p-5 text-[#F8F5EE] shadow-xl">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
            <Sparkles size={12} className="text-[#F2994A]" /> Em Acompanhamento • Dia 3 de 21
          </span>
          <button onClick={onReset} className="text-[11px] text-white/75 underline hover:text-white font-semibold">
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
            <div className="text-xl font-extrabold text-[#F2994A]">92%</div>
          </div>
        </div>
      </div>

      {/* TODAY'S TASK (DAY 3 - OFFICIAL APPLICATION RULE) */}
      <div className="rounded-3xl border border-[#155F4E]/15 bg-white p-6 shadow-xl shadow-[#173D32]/5 space-y-3">
        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#D35400]">
          <span>Fase I: Enraizar • Hoje (Dia 3)</span>
          <span className="flex h-2 w-2 rounded-full bg-[#D35400] animate-ping" />
        </div>

        <h3 className="font-display text-xl text-[#173D32]">
          Aplicação Semanal do Kit Método 2 Passos (Pronto Uso)
        </h3>

        <div className="rounded-2xl bg-[#F8F5EE] p-3.5 text-xs text-[#173D32]/85 space-y-2 border border-[#155F4E]/10">
          <div className="font-bold text-[#155F4E] flex items-center gap-1.5">
            <ShieldCheck size={14} /> Passo a Passo de Aplicação Prática:
          </div>
          <ol className="list-decimal list-inside space-y-1 text-[11.5px] leading-relaxed">
            <li>
              Borrifar primeiro o <strong>Enraizador Orgânico 500ml Pronto Uso</strong> nas raízes e substrato (sem diluir).
            </li>
            <li>
              Em seguida, borrifar o <strong>Bokashi Líquido 500ml Pronto Uso</strong> nas raízes, folhas e substrato (sem diluir).
            </li>
            <li>
              Realizar a aplicação nas horas frescas (antes das 9h ou após as 16h), evitando borrifar nas flores.
            </li>
          </ol>
        </div>

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
  );
}
