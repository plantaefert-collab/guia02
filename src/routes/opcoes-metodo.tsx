import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles,
  Flower2,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  PackageCheck,
  Smartphone,
  Droplets,
  ChevronRight,
  Info,
  Zap,
  Award,
  Heart,
  Ban,
  SunMedium
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import kitMetodo from "@/assets/kit-metodo-app.jpg";
import logoPlantaefertLight from "@/assets/logo-plantaefert-light.png";

import { OnboardingDemosComponent } from "@/components/OnboardingDemos";

import { InicioFlowDemoComponent } from "@/components/InicioFlowDemo";

import { OfficialEditorialFlowComponent } from "@/components/OfficialEditorialFlow";

import { VisualDesignThemesShowcaseComponent } from "@/components/VisualDesignThemesShowcase";

export const Route = createFileRoute("/opcoes-metodo")({
  head: () => ({
    meta: [
      { title: "Opções de Design — O Método de 2 Passos (Dados Oficiais PlantaeFert)" },
      { name: "description", content: "Visualização das propostas com dados técnicos reais: Bokashi Líquido 500ml + Enraizador Orgânico 500ml." },
    ],
  }),
  component: OpcoesMetodoPage,
});

function OpcoesMetodoPage() {
  const [activeTab, setActiveTab] = useState<"opcao1" | "opcao2" | "opcao3" | "combo" | "onboarding_demos" | "inicio_demo" | "editorial_flow" | "visual_themes">("visual_themes");

  return (
    <div className="min-h-screen bg-[#F8F5EE] text-[#155F4E]">
      {/* Top Bar de Seleção de Opção */}
      <header className="sticky top-0 z-50 bg-[#155F4E] text-[#F8F5EE] shadow-xl border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src={logoPlantaefertLight}
                alt="PlantaeFert Nutrição Vegetal"
                className="h-9 w-auto object-contain shrink-0"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-[#D35400] text-white font-mono text-[10px] uppercase font-bold tracking-widest">
                    Ficha Oficial PlantaeFert
                  </span>
                  <span className="text-xs text-[#F8F5EE]/70 font-serif italic hidden sm:inline">
                    Visualização das propostas ajustadas com as especificações oficiais
                  </span>
                </div>
                <h1 className="font-serif text-lg md:text-xl font-bold text-white mt-0.5">
                  Kit Bokashi Líquido 500ml + Enraizador Orgânico 500ml (Pronto Uso)
                </h1>
              </div>
            </div>

            {/* Selector Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 bg-white/10 p-1.5 rounded-xl border border-white/10">
              <button
                onClick={() => setActiveTab("opcao1")}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "opcao1"
                    ? "bg-[#D35400] text-white shadow-md"
                    : "text-[#F8F5EE]/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                1. Cronograma &amp; Ritual
              </button>
              <button
                onClick={() => setActiveTab("opcao2")}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "opcao2"
                    ? "bg-[#D35400] text-white shadow-md"
                    : "text-[#F8F5EE]/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                2. Ficha Técnica Oficial
              </button>
              <button
                onClick={() => setActiveTab("opcao3")}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "opcao3"
                    ? "bg-[#D35400] text-white shadow-md"
                    : "text-[#F8F5EE]/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                3. Showcase Comercial
              </button>
              <button
                onClick={() => setActiveTab("combo")}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "combo"
                    ? "bg-white text-[#155F4E] shadow-md font-extrabold"
                    : "text-[#F8F5EE]/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                ★ Combo Recomendado
              </button>
              <button
                onClick={() => setActiveTab("visual_themes")}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "visual_themes"
                    ? "bg-[#FF6B4A] text-white shadow-md font-extrabold"
                    : "text-[#F8F5EE]/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                🎨 Comparador de Estilos (3 Temas)
              </button>
              <button
                onClick={() => setActiveTab("editorial_flow")}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "editorial_flow"
                    ? "bg-[#155F4E] text-white shadow-md font-extrabold"
                    : "text-[#F8F5EE]/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                📋 Inventário Editorial (3 Passos)
              </button>
              <button
                onClick={() => setActiveTab("inicio_demo")}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "inicio_demo"
                    ? "bg-[#155F4E] text-white shadow-md font-extrabold"
                    : "text-[#F8F5EE]/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                📱 Demonstração Tela /inicio
              </button>
              <button
                onClick={() => setActiveTab("onboarding_demos")}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "onboarding_demos"
                    ? "bg-[#155F4E] text-white shadow-md font-extrabold"
                    : "text-[#F8F5EE]/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                🧪 Biblioteca de Modelos
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      {activeTab === "visual_themes" ? (
        <div className="py-4">
          <VisualDesignThemesShowcaseComponent />
        </div>
      ) : activeTab === "editorial_flow" ? (
        <div className="py-4">
          <OfficialEditorialFlowComponent />
        </div>
      ) : activeTab === "inicio_demo" ? (
        <div className="py-4">
          <InicioFlowDemoComponent />
        </div>
      ) : activeTab === "onboarding_demos" ? (
        <div className="py-4">
          <OnboardingDemosComponent />
        </div>
      ) : (
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-8 mb-8">
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-[#D35400] shrink-0" />
              <span>
                <strong>Conteúdo Atualizado:</strong> Kit 2x 500ml Pronto Uso (Sem diluição) • Ácidos Húmicos, Fúlvicos &amp; Algas Marinhas • Não tóxico para pets.
              </span>
            </div>
            <Link
              to="/"
              className="text-xs font-bold text-[#155F4E] hover:underline flex items-center gap-1 shrink-0"
            >
              Voltar para a Homepage <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Dynamic Display of Selected Option */}
        <AnimatePresence mode="wait">
          {activeTab === "opcao1" && (
            <motion.div
              key="op1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              {/* OPÇÃO 1: Cronograma & Ritual Semanal */}
              <section className="relative overflow-hidden bg-[#155F4E] py-20 text-[#F8F5EE]">
                <div className="mx-auto max-w-6xl px-4 md:px-10">
                  <div className="text-center mb-16">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D35400] bg-[#D35400]/15 px-4 py-1.5 rounded-full border border-[#D35400]/30 font-mono">
                      Proposta 1 — Ritual Semanal de Cuidado
                    </span>
                    <h2 className="mt-4 font-serif text-4xl md:text-6xl font-normal text-[#F8F5EE]">
                      O Método de <span className="italic text-[#D35400]">2 Passos</span> em 21 Dias
                    </h2>
                    <p className="mt-4 text-base text-[#F8F5EE]/80 max-w-2xl mx-auto">
                      Aplicação semanal prática com produtos <strong>Pronto Uso (sem diluição)</strong> nas horas mais frescas do dia.
                    </p>
                  </div>

                  {/* Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                    {/* Linha Conectora Central */}
                    <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#D35400] text-white items-center justify-center font-bold text-sm shadow-xl border-4 border-[#155F4E]">
                      +
                    </div>

                    {/* Card Passo 1 - Enraizador */}
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between">
                      <div className="absolute top-0 right-0 bg-[#D35400] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-xl">
                        Passo I • Base Radicular
                      </div>

                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-14 h-14 rounded-2xl bg-[#D35400]/20 border border-[#D35400]/40 flex items-center justify-center text-[#D35400]">
                            <Sparkles className="h-7 w-7" />
                          </div>
                          <div>
                            <span className="text-[10px] uppercase tracking-widest text-[#D35400] font-bold block">
                              500ml Pronto Uso
                            </span>
                            <h3 className="font-serif text-2xl md:text-3xl font-normal text-white">
                              Enraizador Orgânico
                            </h3>
                          </div>
                        </div>

                        <p className="text-sm leading-relaxed text-[#F8F5EE]/80 mb-6">
                          Formulado com <strong>Ácidos Húmicos, Fúlvicos e Extrato de Algas Marinhas</strong>. Fortalece o sistema radicular e melhora a absorção de água e nutrientes.
                        </p>

                        <div className="space-y-2 mb-6 bg-black/20 p-4 rounded-xl text-xs border border-white/10">
                          <div className="flex items-center gap-2 text-[#F8F5EE]/90">
                            <Droplets className="h-4 w-4 text-[#D35400] shrink-0" />
                            <span><strong>Onde Aplicar:</strong> Diretamente nas raízes e no substrato</span>
                          </div>
                          <div className="flex items-center gap-2 text-[#F8F5EE]/90">
                            <Calendar className="h-4 w-4 text-[#D35400] shrink-0" />
                            <span><strong>Frequência:</strong> 1x por semana (horas mais frescas)</span>
                          </div>
                          <div className="flex items-center gap-2 text-[#F8F5EE]/90">
                            <Zap className="h-4 w-4 text-[#D35400] shrink-0" />
                            <span><strong>Efeito:</strong> Raízes novas, ativas, fortes e saudáveis</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[11px] text-[#F8F5EE]/60">Ideal para transplantes &amp; recuperação</span>
                        <span className="text-xs font-bold text-[#D35400]">Pronto Uso • Não Dilui</span>
                      </div>
                    </div>

                    {/* Card Passo 2 - Bokashi Líquido */}
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between">
                      <div className="absolute top-0 right-0 bg-[#155F4E] border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-xl">
                        Passo II • Nutrição &amp; Floração
                      </div>

                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                            <Flower2 className="h-7 w-7" />
                          </div>
                          <div>
                            <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold block">
                              500ml Pronto Uso
                            </span>
                            <h3 className="font-serif text-2xl md:text-3xl font-normal text-white">
                              Bokashi Líquido Orquídeas
                            </h3>
                          </div>
                        </div>

                        <p className="text-sm leading-relaxed text-[#F8F5EE]/80 mb-6">
                          Nutrição orgânica equilibrada que estimula o crescimento saudável, garante folhas mais verdes/firmes e prepara a planta para hastes florais exuberantes.
                        </p>

                        <div className="space-y-2 mb-6 bg-black/20 p-4 rounded-xl text-xs border border-white/10">
                          <div className="flex items-center gap-2 text-[#F8F5EE]/90">
                            <Droplets className="h-4 w-4 text-emerald-400 shrink-0" />
                            <span><strong>Onde Aplicar:</strong> Raízes, folhas e substrato (evitar flores)</span>
                          </div>
                          <div className="flex items-center gap-2 text-[#F8F5EE]/90">
                            <Calendar className="h-4 w-4 text-emerald-400 shrink-0" />
                            <span><strong>Frequência:</strong> Logo após o Enraizador, 1x por semana</span>
                          </div>
                          <div className="flex items-center gap-2 text-[#F8F5EE]/90">
                            <Zap className="h-4 w-4 text-emerald-400 shrink-0" />
                            <span><strong>Efeito:</strong> Hastes florais vigorosas &amp; folhas verdes</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[11px] text-[#F8F5EE]/60">Nutrição orgânica completa</span>
                        <span className="text-xs font-bold text-emerald-400">Pronto Uso • Não Dilui</span>
                      </div>
                    </div>
                  </div>

                  {/* Recomendações de Aplicação */}
                  <div className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-around gap-4 text-xs text-[#F8F5EE]/80 text-center">
                    <div className="flex items-center gap-2">
                      <SunMedium className="h-4 w-4 text-amber-300" />
                      <span>Aplicar nas horas mais frescas (Evitar sol entre 9h e 16h)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ban className="h-4 w-4 text-rose-300" />
                      <span>Evite borrifar diretamente nas flores abertas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-emerald-300" />
                      <span>Seguro para ambientes com pets e crianças</span>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === "opcao2" && (
            <motion.div
              key="op2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              {/* OPÇÃO 2: Ficha Técnica Oficial Completa */}
              <section className="bg-[#F8F5EE] py-20 border-y border-[#155F4E]/10 text-[#155F4E]">
                <div className="mx-auto max-w-6xl px-4 md:px-10">
                  <div className="text-center mb-16">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#155F4E]/60 bg-[#155F4E]/10 px-3 py-1 rounded-full">
                      Proposta 2 — Ficha Técnica Oficial PlantaeFert
                    </span>
                    <h2 className="mt-4 font-serif text-4xl md:text-5xl text-[#155F4E]">
                      Especificações dos Produtos do Kit
                    </h2>
                    <p className="mt-3 text-sm text-[#155F4E]/70 max-w-xl mx-auto">
                      Formulação orgânica pronta para uso, desenvolvida especialmente para o cultivo doméstico e colecionadores.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Produto 1 - Enraizador Orgânico */}
                    <div className="bg-white p-8 rounded-2xl border border-[#155F4E]/15 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#D35400] text-white">
                            Enraizador Orgânico
                          </span>
                          <span className="text-xs font-mono font-bold text-[#155F4E]/60">500ml Pronto Uso</span>
                        </div>

                        <h3 className="font-serif text-2xl text-[#155F4E] mb-2">
                          Ácidos Húmicos, Fúlvicos &amp; Algas Marinhas
                        </h3>
                        <p className="text-xs text-[#155F4E]/70 mb-6">
                          Atua diretamente no fortalecimento do sistema radicular, melhorando a capacidade da planta de absorver água e nutrientes.
                        </p>

                        <div className="space-y-2.5 border-t border-b border-[#155F4E]/10 py-5 mb-6">
                          <div className="flex justify-between text-xs">
                            <span className="text-[#155F4E]/60">Principais Ativos:</span>
                            <span className="font-bold text-[#155F4E]">Ác. Húmicos, Fúlvicos + Extrato de Algas</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-[#155F4E]/60">Aplicação:</span>
                            <span className="font-bold text-[#155F4E]">Raízes e Substrato</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-[#155F4E]/60">Diluição:</span>
                            <span className="font-bold text-[#D35400]">Pronto Uso (Sem necessidade de diluir)</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-[#155F4E]/60">Indicação Especial:</span>
                            <span className="font-bold text-[#155F4E]">Transplantes, mudas e plantas debilitadas</span>
                          </div>
                        </div>

                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#155F4E] mb-3">
                          Principais Vantagens:
                        </h4>
                        <ul className="space-y-2 text-xs text-[#155F4E]/80 mb-6">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[#D35400] shrink-0" />
                            <span>Estimula a formação de novas raízes fortes e ativas</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[#D35400] shrink-0" />
                            <span>Auxilia na recuperação após trocas de vaso/substrato</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[#D35400] shrink-0" />
                            <span>Melhora o ambiente microbiano do substrato</span>
                          </li>
                        </ul>
                      </div>

                      <div className="p-3 bg-[#F8F5EE] rounded-xl text-[11px] font-semibold text-[#155F4E]/80 text-center border border-[#155F4E]/10">
                        1º Passo da Aplicação Semanal
                      </div>
                    </div>

                    {/* Produto 2 - Bokashi Líquido Orquídeas */}
                    <div className="bg-white p-8 rounded-2xl border border-[#155F4E]/15 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#155F4E] text-white">
                            Bokashi Líquido Orquídeas
                          </span>
                          <span className="text-xs font-mono font-bold text-[#155F4E]/60">500ml Pronto Uso</span>
                        </div>

                        <h3 className="font-serif text-2xl text-[#155F4E] mb-2">
                          Nutrição Orgânica Completa
                        </h3>
                        <p className="text-xs text-[#155F4E]/70 mb-6">
                          Oferece nutrientes orgânicos equilibrados para o crescimento contínuo, manutenção das folhas e estimulo à emissão de hastes florais.
                        </p>

                        <div className="space-y-2.5 border-t border-b border-[#155F4E]/10 py-5 mb-6">
                          <div className="flex justify-between text-xs">
                            <span className="text-[#155F4E]/60">Principais Ativos:</span>
                            <span className="font-bold text-[#155F4E]">Complexo Orgânico Fermentado</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-[#155F4E]/60">Aplicação:</span>
                            <span className="font-bold text-[#155F4E]">Raízes, Folhas e Substrato</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-[#155F4E]/60">Diluição:</span>
                            <span className="font-bold text-[#D35400]">Pronto Uso (Prático e rápido)</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-[#155F4E]/60">Indicação Especial:</span>
                            <span className="font-bold text-[#155F4E]">Crescimento, folhas e indução floral</span>
                          </div>
                        </div>

                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#155F4E] mb-3">
                          Principais Vantagens:
                        </h4>
                        <ul className="space-y-2 text-xs text-[#155F4E]/80 mb-6">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[#155F4E] shrink-0" />
                            <span>Favorece folhas mais firmes, verdes e bonitas</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[#155F4E] shrink-0" />
                            <span>Estimula a emissão de novos brotos e hastes florais</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[#155F4E] shrink-0" />
                            <span>Contribui para uma floração duradoura e equilibrada</span>
                          </li>
                        </ul>
                      </div>

                      <div className="p-3 bg-[#F8F5EE] rounded-xl text-[11px] font-semibold text-[#155F4E]/80 text-center border border-[#155F4E]/10">
                        2º Passo da Aplicação Semanal
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === "opcao3" && (
            <motion.div
              key="op3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              {/* OPÇÃO 3: Showcase Comercial + Resumo */}
              <section className="bg-[#155F4E] py-20 text-[#F8F5EE] relative overflow-hidden">
                <div className="mx-auto max-w-6xl px-4 md:px-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Imagem do Kit */}
                    <div className="lg:col-span-6 relative">
                      <div className="p-3 bg-white/10 rounded-2xl border border-white/20 backdrop-blur">
                        <img
                          src={kitMetodo}
                          alt="Kit Bokashi Líquido 500ml + Enraizador Orgânico 500ml PlantaeFert"
                          className="rounded-xl w-full h-auto shadow-2xl object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-6 -right-2 bg-[#D35400] text-white p-4 rounded-xl shadow-xl flex items-center gap-3">
                        <Award className="h-8 w-8 text-amber-200 shrink-0" />
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider block">Combo 2x 500ml</span>
                          <span className="text-xs font-semibold">Bokashi Líquido + Enraizador Orgânico</span>
                        </div>
                      </div>
                    </div>

                    {/* Conteúdo & Resumo Comercial */}
                    <div className="lg:col-span-6 space-y-6">
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D35400] bg-[#D35400]/10 px-3 py-1 rounded-full border border-[#D35400]/20 inline-block">
                        Proposta 3 — Resumo Comercial
                      </span>

                      <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight">
                        Mais raízes. Mais força. Mais flores.
                      </h2>

                      <p className="text-sm leading-relaxed text-[#F8F5EE]/80">
                        O Kit perfeito para quem deseja orquídeas com raízes fortes, folhas vigorosas e hastes florais cheias de vida. <strong>Produtos 100% prontos para uso, sem necessidade de diluir.</strong>
                      </p>

                      <div className="space-y-3 pt-2">
                        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                          <PackageCheck className="h-5 w-5 text-[#D35400] shrink-0" />
                          <span className="text-xs"><strong>01 Bokashi Líquido 500ml Pronto Uso</strong> + <strong>01 Enraizador Orgânico 500ml Pronto Uso</strong></span>
                        </div>
                        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                          <Smartphone className="h-5 w-5 text-[#D35400] shrink-0" />
                          <span className="text-xs"><strong>Aplicativo Guiado 21 Dias:</strong> Lembretes semanais de aplicação e checklist de saúde</span>
                        </div>
                        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                          <ShieldCheck className="h-5 w-5 text-[#D35400] shrink-0" />
                          <span className="text-xs"><strong>Fórmula Segura:</strong> Orgânico, natural e não tóxico para animais de estimação</span>
                        </div>
                      </div>

                      <div className="pt-4">
                        <Link
                          to="/auth"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#D35400] hover:bg-white hover:text-[#155F4E] text-white font-bold text-xs uppercase tracking-widest px-10 py-5 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                        >
                          <span>Garantir meu Kit 500ml + Acesso ao App</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                        <span className="block mt-3 text-[10px] text-[#F8F5EE]/60 uppercase tracking-widest text-center sm:text-left">
                          ✓ Pronto Uso • Sem complicações • Aplicação 1x por semana
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === "combo" && (
            <motion.div
              key="combo"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              {/* COMBO COMPLETO: Visão Integrada Definitiva */}
              <section className="bg-[#155F4E] py-24 text-[#F8F5EE]">
                <div className="mx-auto max-w-6xl px-4 md:px-10">
                  <div className="text-center mb-16">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D35400] bg-[#D35400]/20 px-4 py-1.5 rounded-full border border-[#D35400]/40 font-mono">
                      Combo Recomendado — Dados Oficiais PlantaeFert
                    </span>
                    <h2 className="mt-4 font-serif text-4xl md:text-6xl font-normal">
                      O Método de <span className="italic text-[#D35400]">2 Passos</span>
                    </h2>
                    <p className="mt-3 font-serif italic text-lg text-[#F8F5EE]/90">
                      “Mais raízes. Mais força. Mais flores. Mais vida para suas orquídeas.”
                    </p>
                  </div>

                  {/* Passos Oficiais */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Passo 1 */}
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-sm flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <span className="px-3 py-1 rounded-full bg-[#D35400] text-white text-[10px] font-bold uppercase tracking-wider">
                            Passo I • Enraizamento
                          </span>
                          <span className="text-xs font-mono font-bold text-amber-200">500ml Pronto Uso</span>
                        </div>

                        <h3 className="font-serif text-3xl text-white mb-3">
                          Enraizador Orgânico
                        </h3>
                        <p className="text-sm leading-relaxed text-[#F8F5EE]/80 mb-6">
                          Formulado com <strong>Ácidos Húmicos, Ácidos Fúlvicos e Extrato de Algas Marinhas</strong>. Fortalece a base da planta, estimula o desenvolvimento radicular e recupera plantas debilitadas ou recém-transplantadas.
                        </p>

                        <div className="bg-black/20 p-4 rounded-xl space-y-2 text-xs border border-white/10 mb-6">
                          <div className="flex justify-between">
                            <span className="text-[#F8F5EE]/70">Aplicação:</span>
                            <span className="font-bold text-[#D35400]">Nas raízes e no substrato</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#F8F5EE]/70">Frequência:</span>
                            <span className="font-bold text-white">1x por semana</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#F8F5EE]/70">Preparo:</span>
                            <span className="font-bold text-emerald-400">Pronto Uso (Sem diluição)</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-[#D35400] font-semibold">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>Raízes mais fortes, saudáveis e ativas</span>
                      </div>
                    </div>

                    {/* Passo 2 */}
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-sm flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <span className="px-3 py-1 rounded-full bg-[#155F4E] border border-white/30 text-white text-[10px] font-bold uppercase tracking-wider">
                            Passo II • Nutrição &amp; Floração
                          </span>
                          <span className="text-xs font-mono font-bold text-emerald-300">500ml Pronto Uso</span>
                        </div>

                        <h3 className="font-serif text-3xl text-white mb-3">
                          Bokashi Líquido Orquídeas
                        </h3>
                        <p className="text-sm leading-relaxed text-[#F8F5EE]/80 mb-6">
                          Nutrição orgânica equilibrada que estimula o crescimento saudável, deixa as folhas mais verdes e vigorosas e favorece a emissão de hastes florais bonitas e duradouras.
                        </p>

                        <div className="bg-black/20 p-4 rounded-xl space-y-2 text-xs border border-white/10 mb-6">
                          <div className="flex justify-between">
                            <span className="text-[#F8F5EE]/70">Aplicação:</span>
                            <span className="font-bold text-emerald-400">Raízes, folhas e substrato</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#F8F5EE]/70">Frequência:</span>
                            <span className="font-bold text-white">1x por semana (após o enraizador)</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#F8F5EE]/70">Preparo:</span>
                            <span className="font-bold text-emerald-400">Pronto Uso (Sem diluição)</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>Folhas verdes + Estímulo direto a hastes florais</span>
                      </div>
                    </div>
                  </div>

                  {/* Destaques de uso e segurança */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-center text-xs">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <SunMedium className="h-6 w-6 text-amber-300 mx-auto mb-2" />
                      <span className="font-bold block text-white">Horas Frescas</span>
                      <span className="text-[11px] text-[#F8F5EE]/70">Evite sol entre 9h e 16h</span>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <Droplets className="h-6 w-6 text-[#D35400] mx-auto mb-2" />
                      <span className="font-bold block text-white">Não Dilui</span>
                      <span className="text-[11px] text-[#F8F5EE]/70">Produtos prontos para uso</span>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <Ban className="h-6 w-6 text-rose-300 mx-auto mb-2" />
                      <span className="font-bold block text-white">Cuidado com Flores</span>
                      <span className="text-[11px] text-[#F8F5EE]/70">Evitar borrifar nas flores</span>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <Heart className="h-6 w-6 text-emerald-300 mx-auto mb-2" />
                      <span className="font-bold block text-white">Pet Friendly</span>
                      <span className="text-[11px] text-[#F8F5EE]/70">Não tóxico para animais</span>
                    </div>
                  </div>

                  {/* Kit Showcase + CTA */}
                  <div className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/15 backdrop-blur flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2">
                      <img
                        src={kitMetodo}
                        alt="Kit Bokashi Líquido 500ml + Enraizador Orgânico 500ml PlantaeFert"
                        className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                      />
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                      <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded bg-[#D35400] text-white">
                        Kit Completo 2x 500ml
                      </span>
                      <h4 className="font-serif text-3xl text-white">
                        Kit Físico Pronto Uso + Aplicativo Guiado de 21 Dias
                      </h4>
                      <p className="text-sm leading-relaxed text-[#F8F5EE]/80">
                        Insira a rotina semanal simples no seu celular com lembretes no aplicativo e garanta o desenvolvimento perfeito da sua orquídea.
                      </p>

                      <div className="flex flex-col gap-3">
                        <Link
                          to="/auth"
                          className="w-full inline-flex items-center justify-center gap-3 bg-[#D35400] hover:bg-white hover:text-[#155F4E] text-white font-bold text-xs uppercase tracking-widest px-8 py-5 rounded-xl shadow-xl transition-all"
                        >
                          <span>Garantir Kit 500ml + Acesso ao App</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      )}
    </div>
  );
}
