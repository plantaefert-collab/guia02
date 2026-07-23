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
  ListTodo,
} from "lucide-react";
import {
  CATEGORY_LABEL,
  DIAGNOSIS_OPTIONS,
  type DiagnosisCategory,
} from "@/lib/diagnosis-matrix";

export type UserMode = "first_time" | "returning";
export type OnboardingOption =
  | "option_a"
  | "option_b"
  | "option_c"
  | "option_v1"
  | "option_1"
  | "option_2"
  | "option_3";

export function OnboardingDemosComponent() {
  const [userMode, setUserMode] = useState<UserMode>("first_time");
  const [option, setOption] = useState<OnboardingOption>("option_a");

  // Form & Orchid State
  const [orchidName, setOrchidName] = useState("Minha Phalaenopsis");
  const [orchidSpecies, setOrchidSpecies] = useState("Phalaenopsis");
  const [environment, setEnvironment] = useState("Varanda / Janela (Luz Indireta)");

  // Option A State (Passos Guiados: Cadastro -> Diagnostico)
  const [optAStep, setOptAStep] = useState<number>(1);

  // Option B State (Banner Checklist no Topo do Painel)
  const [optBNameDone, setOptBNameDone] = useState<boolean>(false);
  const [optBDiagDone, setOptBDiagDone] = useState<boolean>(false);

  // Option C State (Diagnostico Primeiro -> Cadastro no Final)
  const [optCStep, setOptCStep] = useState<number>(1);

  // Option V1 State (Primeira Versao Simplificada - 3 Steps)
  const [v1Step, setV1Step] = useState<number>(1);
  const [v1LeafStatus, setV1LeafStatus] = useState("amarela");
  const [v1RootStatus, setV1RootStatus] = useState("seca");
  const [v1BloomStatus, setV1BloomStatus] = useState("sem_flores");

  // Option 1 State (Wizard in 5 Categories)
  const [wizardStep, setWizardStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<DiagnosisCategory, string[]>>({
    roots: ["Raízes secas ou ocas"],
    leaves: ["Folhas amareladas"],
    environment: ["Boa luminosidade indireta"],
    potAndSubstrate: ["Vaso com furos suficientes"],
    wateringAndRoutine: ["Rego sempre em dias fixos"],
  });

  // Option 2 State (Sintoma Principal / Urgencia)
  const [opt2Step, setOpt2Step] = useState<number>(0);
  const [primarySymptom, setPrimarySymptom] = useState<string>("roots");

  // Option 3 State (Expresso 3 Perguntas + Aprofundamento)
  const [opt3Step, setOpt3Step] = useState<number>(0);
  const [isDeepened, setIsDeepened] = useState<boolean>(false);

  // Active User State
  const [taskCompleted, setTaskCompleted] = useState<boolean>(false);

  const resetAll = () => {
    setOptAStep(1);
    setOptBNameDone(false);
    setOptBDiagDone(false);
    setOptCStep(1);
    setV1Step(1);
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
    <div className="min-h-screen bg-[#F8F5EE] text-[#173D32] font-sans selection:bg-[#155F4E]/10 pb-16">
      {/* Top Demo Control Header */}
      <header className="sticky top-0 z-50 border-b border-[#155F4E]/15 bg-[#F8F5EE]/95 backdrop-blur-md px-4 py-3 shadow-sm">
        <div className="mx-auto flex max-w-2xl flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <PlantaefertLogo className="h-8 w-auto object-contain" />
              <span className="rounded-full bg-[#155F4E]/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#155F4E]">
                Biblioteca Completa de Modelos de Onboarding
              </span>
            </div>
            <button
              onClick={resetAll}
              className="flex items-center gap-1 text-[12px] font-bold text-[#D35400] hover:underline"
            >
              <RotateCcw size={14} /> Reiniciar
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
            <div className="space-y-2">
              {/* Group 1: Estratégias da Página Inicial */}
              <div>
                <div className="text-[10.5px] font-extrabold uppercase tracking-wider text-[#155F4E] mb-1">
                  📌 Grupo I — Estrutura de Boas-Vindas (/inicio):
                </div>
                <div className="grid grid-cols-3 gap-1 rounded-xl bg-white p-1 border border-[#155F4E]/15 text-[10px] font-bold">
                  <button
                    onClick={() => {
                      setOption("option_a");
                      resetAll();
                    }}
                    className={`rounded-lg py-1.5 px-1 text-center transition-all ${
                      option === "option_a"
                        ? "bg-[#155F4E] text-white shadow-sm font-extrabold"
                        : "text-[#173D32]/70 hover:bg-[#155F4E]/10"
                    }`}
                  >
                    Opção A (Wizard)
                  </button>
                  <button
                    onClick={() => {
                      setOption("option_b");
                      resetAll();
                    }}
                    className={`rounded-lg py-1.5 px-1 text-center transition-all ${
                      option === "option_b"
                        ? "bg-[#155F4E] text-white shadow-sm font-extrabold"
                        : "text-[#173D32]/70 hover:bg-[#155F4E]/10"
                    }`}
                  >
                    Opção B (Checklist)
                  </button>
                  <button
                    onClick={() => {
                      setOption("option_c");
                      resetAll();
                    }}
                    className={`rounded-lg py-1.5 px-1 text-center transition-all ${
                      option === "option_c"
                        ? "bg-[#155F4E] text-white shadow-sm font-extrabold"
                        : "text-[#173D32]/70 hover:bg-[#155F4E]/10"
                    }`}
                  >
                    Opção C (Diagnóst. 1º)
                  </button>
                </div>
              </div>

              {/* Group 2: Formatos de Diagnóstico & Exame */}
              <div>
                <div className="text-[10.5px] font-extrabold uppercase tracking-wider text-[#D35400] mb-1">
                  🔬 Grupo II — Modelos de Diagnóstico & Exame:
                </div>
                <div className="grid grid-cols-4 gap-1 rounded-xl bg-white p-1 border border-[#155F4E]/15 text-[10px] font-bold">
                  <button
                    onClick={() => {
                      setOption("option_v1");
                      resetAll();
                    }}
                    className={`rounded-lg py-1.5 px-1 text-center transition-all ${
                      option === "option_v1"
                        ? "bg-[#D35400] text-white shadow-sm font-extrabold"
                        : "text-[#173D32]/70 hover:bg-[#155F4E]/10"
                    }`}
                  >
                    1ª Versão (3 Cards)
                  </button>
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
                    Opção 1 (5 Categ.)
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
                    Opção 2 (Triagem)
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
                    Opção 3 (Expresso)
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto min-h-[calc(100vh-160px)] max-w-[460px] px-4 py-6">
        <AnimatePresence mode="wait">
          {userMode === "first_time" ? (
            <motion.div
              key={`first-time-${option}-${optAStep}-${optBNameDone}-${optBDiagDone}-${optCStep}-${v1Step}-${wizardStep}-${opt2Step}-${opt3Step}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {/* OPTION A: PASSOS GUIADOS (WIZARD 2 TELAS) */}
              {option === "option_a" && (
                <RenderOptionA
                  step={optAStep}
                  setStep={setOptAStep}
                  orchidName={orchidName}
                  setOrchidName={setOrchidName}
                  orchidSpecies={orchidSpecies}
                  setOrchidSpecies={setOrchidSpecies}
                  onFinish={() => setUserMode("returning")}
                />
              )}

              {/* OPTION B: BANNER CHECKLIST FIXO NO TOPO */}
              {option === "option_b" && (
                <RenderOptionB
                  orchidName={orchidName}
                  setOrchidName={setOrchidName}
                  nameDone={optBNameDone}
                  setNameDone={setOptBNameDone}
                  diagDone={optBDiagDone}
                  setDiagDone={setOptBDiagDone}
                  onFinish={() => setUserMode("returning")}
                />
              )}

              {/* OPTION C: DIAGNOSTICO PRIMEIRA, CADASTRO NO FINAL */}
              {option === "option_c" && (
                <RenderOptionC
                  step={optCStep}
                  setStep={setOptCStep}
                  orchidName={orchidName}
                  setOrchidName={setOrchidName}
                  onFinish={() => setUserMode("returning")}
                />
              )}

              {/* OPTION V1: PRIMERA VERSAO SIMPLIFICADA (3 STEPS) */}
              {option === "option_v1" && (
                <RenderOptionV1
                  step={v1Step}
                  setStep={setV1Step}
                  orchidName={orchidName}
                  setOrchidName={setOrchidName}
                  orchidSpecies={orchidSpecies}
                  setOrchidSpecies={setOrchidSpecies}
                  environment={environment}
                  setEnvironment={setEnvironment}
                  leafStatus={v1LeafStatus}
                  setLeafStatus={setV1LeafStatus}
                  rootStatus={v1RootStatus}
                  setRootStatus={setV1RootStatus}
                  bloomStatus={v1BloomStatus}
                  setBloomStatus={setV1BloomStatus}
                  onFinish={() => setUserMode("returning")}
                />
              )}

              {/* OPTION 1: WIZARD EM 5 CATEGORIAS */}
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

              {/* OPTION 2: TRIAGEM DE URGENCIA */}
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

              {/* OPTION 3: EXPRESSO 3 PERGUNTAS */}
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
   OPTION A: PASSOS GUIADOS (WIZARD 2 TELAS)
   ========================================================================= */
function RenderOptionA({
  step,
  setStep,
  orchidName,
  setOrchidName,
  orchidSpecies,
  setOrchidSpecies,
  onFinish,
}: {
  step: number;
  setStep: (s: number) => void;
  orchidName: string;
  setOrchidName: (v: string) => void;
  orchidSpecies: string;
  setOrchidSpecies: (v: string) => void;
  onFinish: () => void;
}) {
  if (step === 1) {
    return (
      <div className="rounded-3xl border border-[#155F4E]/15 bg-white p-6 shadow-xl shadow-[#173D32]/5">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#155F4E]/10 text-[#155F4E]">
            <Sprout size={24} />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#155F4E]">
              Opção A • Passo 1 de 2
            </span>
            <h2 className="font-display text-2xl text-[#173D32]">Qual orquídea vamos cuidar?</h2>
          </div>
        </div>

        <p className="mt-3 text-xs text-[#173D32]/75 leading-relaxed">
          Tela 1 limpa e sem distrações. O cliente dá um nome para criar o vínculo emocional com a planta.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setStep(2);
          }}
          className="mt-5 space-y-4"
        >
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#173D32]">
              Nome da Orquídea *
            </label>
            <input
              type="text"
              required
              value={orchidName}
              onChange={(e) => setOrchidName(e.target.value)}
              placeholder="Ex: Phalaenopsis da Sala..."
              className="mt-1.5 w-full rounded-2xl border border-[#155F4E]/20 bg-[#F8F5EE]/50 px-4 py-3 text-sm font-semibold text-[#173D32]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#173D32]">
              Espécie
            </label>
            <div className="mt-2 grid grid-cols-2 gap-2 text-xs font-semibold">
              {["Phalaenopsis", "Cattleya", "Dendrobium", "Não sei"].map((sp) => (
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

          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#155F4E] py-4 text-xs font-bold uppercase tracking-wider text-[#F8F5EE] shadow-lg shadow-[#155F4E]/25 transition-all hover:bg-[#10483b]"
          >
            Próximo Passo: Fazer Teste de Saúde <ArrowRight size={16} />
          </button>
        </form>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="rounded-3xl border border-[#155F4E]/15 bg-white p-6 shadow-xl shadow-[#173D32]/5">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#D35400]/10 text-[#D35400]">
            <Stethoscope size={24} />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D35400]">
              Opção A • Passo 2 de 2
            </span>
            <h2 className="font-display text-2xl text-[#173D32]">Qual o sintoma atual dela?</h2>
          </div>
        </div>

        <p className="mt-3 text-xs text-[#173D32]/75 leading-relaxed">
          Tela 2 de resposta rápida em 3 cliques para identificar o alerta principal de "{orchidName}".
        </p>

        <div className="mt-5 space-y-3 text-xs font-semibold">
          {[
            { id: "s1", title: "🟡 Folhas amareladas, murchas ou secas" },
            { id: "s2", title: "🔴 Raízes secas, escuras ou ocas" },
            { id: "s3", title: "🌸 Não floresce há muitos meses" },
          ].map((st) => (
            <button
              key={st.id}
              onClick={() => setStep(3)}
              className="flex w-full items-center justify-between rounded-2xl border border-[#155F4E]/15 p-4 text-left font-bold text-[#173D32] hover:border-[#155F4E] hover:bg-[#155F4E]/5"
            >
              <span>{st.title}</span>
              <ChevronRight size={16} className="text-[#155F4E]" />
            </button>
          ))}
        </div>

        <button
          onClick={() => setStep(1)}
          className="mt-5 text-xs text-[#173D32]/60 hover:underline font-bold"
        >
          ← Voltar para o Cadastro da Planta
        </button>
      </div>
    );
  }

  return (
    <RenderOfficialPrescriptionResult
      orchidName={orchidName}
      onFinish={onFinish}
      priorities={["Recuperação emergencial de raízes e folhas"]}
      adjustments={["Ajuste de rega semanal"]}
      favorables={["Ambiente com boa luminosidade"]}
    />
  );
}

/* =========================================================================
   OPTION B: BANNER CHECKLIST FIXO NO TOPO DO PAINEL
   ========================================================================= */
function RenderOptionB({
  orchidName,
  setOrchidName,
  nameDone,
  setNameDone,
  diagDone,
  setDiagDone,
  onFinish,
}: {
  orchidName: string;
  setOrchidName: (v: string) => void;
  nameDone: boolean;
  setNameDone: (v: boolean) => void;
  diagDone: boolean;
  setDiagDone: (v: boolean) => void;
  onFinish: () => void;
}) {
  return (
    <div className="space-y-4">
      {/* Banner Fixado no Topo */}
      <div className="rounded-3xl border-2 border-[#155F4E] bg-white p-5 shadow-xl">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#155F4E]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#155F4E]">
            <ListTodo size={14} /> Opção B • Checklist de Boas-Vindas
          </span>
          <span className="text-xs font-bold text-[#D35400]">
            {nameDone && diagDone ? "2/2 Concluído!" : nameDone || diagDone ? "1/2 Concluído" : "0/2 Concluído"}
          </span>
        </div>

        <h2 className="mt-2 font-display text-xl text-[#173D32]">
          Primeiros Passos para Ativar seu Protocolo
        </h2>

        <div className="mt-4 space-y-2.5 text-xs font-semibold">
          {/* Step 1 Checklist */}
          <div
            className={`flex items-center justify-between rounded-2xl border p-3.5 transition-all ${
              nameDone ? "border-emerald-500 bg-emerald-50 text-emerald-900" : "border-[#155F4E]/20 bg-[#F8F5EE]"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div
                onClick={() => setNameDone(!nameDone)}
                className={`grid h-6 w-6 cursor-pointer place-items-center rounded-full border ${
                  nameDone ? "bg-emerald-600 border-emerald-600 text-white" : "border-[#173D32]/40 bg-white"
                }`}
              >
                {nameDone && <CheckCircle2 size={14} />}
              </div>
              <span>1. Dar nome à minha Orquídea</span>
            </div>
            {!nameDone && (
              <button
                onClick={() => setNameDone(true)}
                className="rounded-xl bg-[#155F4E] px-3 py-1 text-[11px] font-bold text-white"
              >
                Cadastrar
              </button>
            )}
          </div>

          {/* Step 2 Checklist */}
          <div
            className={`flex items-center justify-between rounded-2xl border p-3.5 transition-all ${
              diagDone ? "border-emerald-500 bg-emerald-50 text-emerald-900" : "border-[#155F4E]/20 bg-[#F8F5EE]"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div
                onClick={() => setDiagDone(!diagDone)}
                className={`grid h-6 w-6 cursor-pointer place-items-center rounded-full border ${
                  diagDone ? "bg-emerald-600 border-emerald-600 text-white" : "border-[#173D32]/40 bg-white"
                }`}
              >
                {diagDone && <CheckCircle2 size={14} />}
              </div>
              <span>2. Fazer Teste de Saúde Inicial</span>
            </div>
            {!diagDone && (
              <button
                onClick={() => setDiagDone(true)}
                className="rounded-xl bg-[#D35400] px-3 py-1 text-[11px] font-bold text-white"
              >
                Fazer Teste
              </button>
            )}
          </div>
        </div>

        {nameDone && diagDone && (
          <button
            onClick={onFinish}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#155F4E] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg"
          >
            Liberar Painel Completo do Dia 1 <ArrowRight size={16} />
          </button>
        )}
      </div>

      {/* Background Dashboard Preview */}
      <div className="rounded-3xl border border-[#155F4E]/15 bg-white p-5 opacity-60 pointer-events-none space-y-3">
        <div className="text-xs font-bold text-[#173D32]">Painel em Segundo Plano (Aguardando conclusão)</div>
        <div className="h-16 rounded-2xl bg-[#155F4E]/10 animate-pulse" />
        <div className="h-24 rounded-2xl bg-[#F8F5EE] animate-pulse" />
      </div>
    </div>
  );
}

/* =========================================================================
   OPTION C: DIAGNÓSTICO PRIMEIRA, CADASTRO NO FINAL
   ========================================================================= */
function RenderOptionC({
  step,
  setStep,
  orchidName,
  setOrchidName,
  onFinish,
}: {
  step: number;
  setStep: (s: number) => void;
  orchidName: string;
  setOrchidName: (v: string) => void;
  onFinish: () => void;
}) {
  if (step === 1) {
    return (
      <div className="rounded-3xl border border-[#155F4E]/15 bg-white p-6 shadow-xl shadow-[#173D32]/5">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#D35400]/10 text-[#D35400]">
            <Stethoscope size={24} />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D35400]">
              Opção C • Teste Gratuito
            </span>
            <h2 className="font-display text-2xl text-[#173D32]">Diagnóstico de Saúde de 1 Minuto</h2>
          </div>
        </div>

        <p className="mt-3 text-xs text-[#173D32]/75 leading-relaxed">
          Gera valor imediato antes de pedir qualquer informação de cadastro.
        </p>

        <div className="mt-5 space-y-3 text-xs font-semibold">
          <div className="rounded-2xl border border-[#155F4E]/15 p-3.5 bg-[#F8F5EE]">
            <div className="font-bold text-[#155F4E]">Como estão as raízes?</div>
            <div className="mt-2 flex gap-2">
              <button className="flex-1 rounded-xl bg-white p-2 border border-[#155F4E]/20 text-center font-bold text-[#D35400]">
                Secas / Ocas
              </button>
              <button className="flex-1 rounded-xl bg-white p-2 border border-[#155F4E]/20 text-center font-bold text-[#155F4E]">
                Verdes Firmes
              </button>
            </div>
          </div>

          <button
            onClick={() => setStep(2)}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#D35400] py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg"
          >
            Ver Resultado & Prescrição <ArrowRight size={16} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-[#155F4E]/15 bg-white p-6 shadow-xl text-center space-y-4">
      <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-[#155F4E] text-white">
        <CheckCircle2 size={28} />
      </div>

      <span className="text-[11px] font-bold uppercase tracking-wider text-[#D35400]">
        Opção C • Prescrição Pronta!
      </span>

      <h2 className="font-display text-2xl text-[#173D32]">
        Diagnóstico Calculado com Sucesso
      </h2>

      <div className="rounded-2xl bg-[#F8F5EE] p-4 text-left text-xs space-y-2 border border-[#155F4E]/15">
        <div className="font-bold text-[#155F4E]">Para qual orquídea devemos salvar este plano de 21 dias?</div>
        <input
          type="text"
          value={orchidName}
          onChange={(e) => setOrchidName(e.target.value)}
          placeholder="Ex: Phalaenopsis da Sala..."
          className="w-full rounded-xl border border-[#155F4E]/20 bg-white px-3.5 py-2.5 text-xs font-semibold text-[#173D32]"
        />
      </div>

      <button
        onClick={onFinish}
        className="w-full rounded-2xl bg-[#155F4E] py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg"
      >
        Salvar & Liberar Dia 1 <ArrowRight size={16} className="inline ml-1" />
      </button>
    </div>
  );
}

/* =========================================================================
   OPTION V1: PRIMEIRO MODELO SIMPLIFICADO (3 PASSO DIRETO)
   ========================================================================= */
function RenderOptionV1({
  step,
  setStep,
  orchidName,
  setOrchidName,
  orchidSpecies,
  setOrchidSpecies,
  environment,
  setEnvironment,
  leafStatus,
  setLeafStatus,
  rootStatus,
  setRootStatus,
  bloomStatus,
  setBloomStatus,
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
  leafStatus: string;
  setLeafStatus: (v: string) => void;
  rootStatus: string;
  setRootStatus: (v: string) => void;
  bloomStatus: string;
  setBloomStatus: (v: string) => void;
  onFinish: () => void;
}) {
  if (step === 1) {
    return (
      <div className="rounded-3xl border border-[#155F4E]/15 bg-white p-6 shadow-xl shadow-[#173D32]/5">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#155F4E]/10 text-[#155F4E]">
            <Sprout size={24} />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D35400]">
              1ª Versão • Passo 1 de 3
            </span>
            <h2 className="font-display text-2xl text-[#173D32]">Identifique sua Orquídea</h2>
          </div>
        </div>

        <p className="mt-3 text-xs text-[#173D32]/75 leading-relaxed">
          Fluxo simplificado em 3 etapas diretas para cadastrar e iniciar o protocolo.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setStep(2);
          }}
          className="mt-5 space-y-4"
        >
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#173D32]">
              Nome da sua Orquídea *
            </label>
            <input
              type="text"
              required
              value={orchidName}
              onChange={(e) => setOrchidName(e.target.value)}
              placeholder="Ex: Phalaenopsis da Sala..."
              className="mt-1.5 w-full rounded-2xl border border-[#155F4E]/20 bg-[#F8F5EE]/50 px-4 py-3 text-sm font-semibold text-[#173D32]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#173D32]">
              Espécie
            </label>
            <div className="mt-2 grid grid-cols-2 gap-2 text-xs font-semibold">
              {["Phalaenopsis", "Cattleya", "Dendrobium", "Não sei"].map((sp) => (
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

          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#155F4E] py-4 text-xs font-bold uppercase tracking-wider text-[#F8F5EE] shadow-lg shadow-[#155F4E]/25 transition-all hover:bg-[#10483b]"
          >
            Avançar para o Diagnóstico Rápido <ArrowRight size={16} />
          </button>
        </form>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="rounded-3xl border border-[#155F4E]/15 bg-white p-6 shadow-xl shadow-[#173D32]/5">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#D35400]/10 text-[#D35400]">
            <Stethoscope size={24} />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D35400]">
              1ª Versão • Passo 2 de 3
            </span>
            <h2 className="font-display text-2xl text-[#173D32]">Diagnóstico Rápido</h2>
          </div>
        </div>

        <p className="mt-3 text-xs text-[#173D32]/75 leading-relaxed">
          Selecione o estado atual de "{orchidName}" para calcularmos o tratamento de resgate:
        </p>

        <div className="mt-5 space-y-4 text-xs font-semibold">
          <div>
            <label className="block uppercase font-bold text-[#173D32]">1. Folhas</label>
            <div className="mt-1.5 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setLeafStatus("amarela")}
                className={`rounded-xl border p-3 text-left ${
                  leafStatus === "amarela"
                    ? "border-[#155F4E] bg-[#155F4E]/10 font-bold text-[#155F4E]"
                    : "border-[#155F4E]/15 bg-white text-[#173D32]/70"
                }`}
              >
                Amareladas / Moles
              </button>
              <button
                type="button"
                onClick={() => setLeafStatus("saudavel")}
                className={`rounded-xl border p-3 text-left ${
                  leafStatus === "saudavel"
                    ? "border-[#155F4E] bg-[#155F4E]/10 font-bold text-[#155F4E]"
                    : "border-[#155F4E]/15 bg-white text-[#173D32]/70"
                }`}
              >
                Verdes / Firmes
              </button>
            </div>
          </div>

          <div>
            <label className="block uppercase font-bold text-[#173D32]">2. Raízes</label>
            <div className="mt-1.5 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setRootStatus("seca")}
                className={`rounded-xl border p-3 text-left ${
                  rootStatus === "seca"
                    ? "border-[#155F4E] bg-[#155F4E]/10 font-bold text-[#155F4E]"
                    : "border-[#155F4E]/15 bg-white text-[#173D32]/70"
                }`}
              >
                Secas / Ocas
              </button>
              <button
                type="button"
                onClick={() => setRootStatus("podre")}
                className={`rounded-xl border p-3 text-left ${
                  rootStatus === "podre"
                    ? "border-[#155F4E] bg-[#155F4E]/10 font-bold text-[#155F4E]"
                    : "border-[#155F4E]/15 bg-white text-[#173D32]/70"
                }`}
              >
                Moles / Escuras
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setStep(1)}
            className="rounded-2xl border border-[#155F4E]/20 px-4 py-3.5 text-xs font-bold uppercase text-[#173D32]/70"
          >
            Voltar
          </button>
          <button
            type="button"
            onClick={() => setStep(3)}
            className="flex-1 rounded-2xl bg-[#D35400] py-4 text-xs font-bold uppercase text-white shadow-lg shadow-[#D35400]/20"
          >
            Gerar Diagnóstico <ArrowRight size={16} className="inline ml-1" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <RenderOfficialPrescriptionResult
      orchidName={orchidName}
      onFinish={onFinish}
      priorities={["Raízes secas ou ocas (Risco de desidratação)"]}
      adjustments={["Folhas amareladas"]}
      favorables={["Luz indireta ambiente"]}
    />
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
              className="mt-1.5 w-full rounded-2xl border border-[#155F4E]/20 bg-[#F8F5EE]/50 px-4 py-3 text-sm font-semibold text-[#173D32]"
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

          <button
            onClick={() => setStep(1)}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#155F4E] py-4 text-xs font-bold uppercase tracking-wider text-[#F8F5EE] shadow-lg shadow-[#155F4E]/25 transition-all hover:bg-[#10483b]"
          >
            Iniciar Diagnóstico de 5 Passos <ArrowRight size={16} />
          </button>
        </div>
      </div>
    );
  }

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

        <div className="mt-6 flex items-center gap-2 pt-2 border-t border-[#155F4E]/10">
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            className="rounded-2xl border border-[#155F4E]/20 px-4 py-3 text-xs font-bold uppercase text-[#173D32]/70"
          >
            Voltar
          </button>
          <button
            type="button"
            onClick={() => setStep(step + 1)}
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#155F4E] py-3.5 text-xs font-bold uppercase text-[#F8F5EE] shadow-lg"
          >
            {step === 5 ? "Gerar Prescrição Oficial" : "Próxima Categoria"} <ArrowRight size={16} />
          </button>
        </div>
      </div>
    );
  }

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

        <div className="mt-5 space-y-4">
          <input
            type="text"
            value={orchidName}
            onChange={(e) => setOrchidName(e.target.value)}
            className="w-full rounded-2xl border border-[#155F4E]/20 bg-[#F8F5EE]/50 px-4 py-3 text-sm font-semibold text-[#173D32]"
            placeholder="Nome da orquídea"
          />

          <button
            onClick={() => setStep(1)}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#D35400] py-4 text-xs font-bold uppercase text-white shadow-lg"
          >
            Ir para Triagem por Sintoma <ArrowRight size={16} />
          </button>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="rounded-3xl border border-[#155F4E]/15 bg-white p-6 shadow-xl">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#D35400]">
          Opção 2 • Triagem Passo 2
        </span>
        <h2 className="mt-1 font-display text-2xl text-[#173D32]">
          Qual o Sintoma Principal de "{orchidName}"?
        </h2>

        <div className="mt-5 space-y-3">
          {[
            { id: "roots", title: "🔴 Raízes secas, moles ou escuras" },
            { id: "leaves", title: "🟡 Folhas amareladas, murchas ou com manchas" },
            { id: "bloom", title: "🌸 Não floresce há muitos meses ou botões caem" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setPrimarySymptom(item.id);
                setStep(2);
              }}
              className="flex w-full items-center justify-between rounded-2xl border border-[#155F4E]/15 p-4 text-left font-bold text-[#173D32] hover:border-[#D35400]"
            >
              <span>{item.title}</span>
              <ChevronRight size={16} />
            </button>
          ))}
        </div>
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
      <div className="rounded-3xl border border-[#155F4E]/15 bg-white p-6 shadow-xl">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#D35400]">
          Opção 3 • Expresso 3 Perguntas
        </span>
        <h2 className="mt-1 font-display text-2xl text-[#173D32]">Identifique a Orquídea</h2>

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
            className="w-full rounded-2xl bg-[#155F4E] py-4 text-xs font-bold uppercase text-white shadow-lg"
          >
            Iniciar Check-up Expresso (3 Perguntas) <ArrowRight size={16} className="inline ml-1" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <RenderOfficialPrescriptionResult
      orchidName={orchidName}
      onFinish={onFinish}
      priorities={["Raízes secas detectadas"]}
      adjustments={["Ajuste de luz indireta"]}
      favorables={["Folhas firmes"]}
    />
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
    <div className="rounded-3xl border border-[#155F4E]/15 bg-white p-6 shadow-xl text-center space-y-4">
      {extraHeaderInfo}

      <div className="mx-auto grid h-14 w-14 place-items-center rounded-3xl bg-[#155F4E] text-white shadow-lg">
        <CheckCircle2 size={32} />
      </div>

      <span className="inline-flex items-center gap-1 rounded-full bg-[#155F4E]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#155F4E]">
        <Award size={13} /> Prescrição Oficial PlantaeFert
      </span>

      <h2 className="font-display text-2xl text-[#173D32]">
        Diagnóstico de "{orchidName}"
      </h2>

      {/* Official Kit Prescriptions Card (PRONTO USO - NO DILUTION) */}
      <div className="rounded-2xl border-2 border-[#155F4E]/20 bg-gradient-to-br from-[#155F4E]/5 to-[#155F4E]/10 p-4 text-left">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#155F4E]">
            <ShieldCheck size={16} /> Kit Método 2 Passos (500ml Pronto Uso)
          </div>
          <span className="rounded-full bg-[#155F4E] px-2 py-0.5 text-[9.5px] font-extrabold text-white uppercase">
            Sem Diluição
          </span>
        </div>

        <div className="mt-3 space-y-2.5 text-xs text-[#173D32]">
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
              Formulado com <strong>Ácidos Húmicos, Fúlvicos e Algas Marinhas</strong>. Borrifar 1x por semana nas raízes e substrato (sem diluir).
            </p>
          </div>

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
              Nutrição orgânica completa para folhas, brotos e hastes florais. Aplicar nas raízes, folhas e substrato (sem diluir).
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={onFinish}
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#155F4E] py-4 text-xs font-bold uppercase tracking-wider text-white shadow-xl hover:bg-[#10483b]"
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
              : "bg-[#155F4E] text-[#F8F5EE] shadow-md hover:bg-[#10483b]"
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
