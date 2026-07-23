import { createFileRoute, Link } from "@tanstack/react-router";
/**
 * Exiba orientações e alertas contextuais por fase (Diagnosticar, Corrigir, Enraizar, Nutrir, Acompanhar) com avisos de segurança baseados nas condições registradas.
 */
import { useEffect, useRef } from "react";
import { useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { resolvePostAuthDestination } from "@/lib/auth-destination";
import { ChevronRight, LogIn, Flower2 } from "lucide-react";
import welcomeOrchid from "@/assets/hero-plantaefert.jpg";
import kitMetodo from "@/assets/kit-metodo-app.jpg";
import { useAuthBootstrap } from "@/hooks/use-auth-bootstrap";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PlantaeFert — Guia Prático para Orquídeas Floridas em 21 Dias" },
      {
        name: "description",
        content:
          "Método de 2 Passos + protocolo guiado de 21 dias para diagnosticar, enraizar e nutrir sua orquídea. Comece grátis.",
      },
      { property: "og:title", content: "PlantaeFert — Guia Prático para Orquídeas Floridas em 21 Dias" },
      {
        property: "og:description",
        content:
          "Método de 2 Passos + protocolo guiado de 21 dias para diagnosticar, enraizar e nutrir sua orquídea. Comece grátis.",
      },
    ],
    links: [
      { rel: "preload", as: "image", href: welcomeOrchid, fetchpriority: "high" },
    ],
  }),
  component: HomePage,
});

const ETAPAS = [
  {
    n: "01",
    title: "Diagnóstico",
    subtitle: "Sinal de Alerta",
    body: "Identifique se sua orquídea está sem flores, com folhas amarelas ou raízes secas em menos de 2 minutos.",
    isAlert: true,
  },
  {
    n: "02",
    title: "Enraizamento",
    subtitle: "Passo I",
    body: "Fortaleça e multiplique as raízes com o Enraizador Forte para dar base a novas florações.",
    isAlert: false,
  },
  {
    n: "03",
    title: "Nutrição",
    subtitle: "Passo II",
    body: "Nutra sua orquídea com o Bokashi Premium para prepará-la para a floração no ritmo certo.",
    isAlert: false,
  },
  {
    n: "04",
    title: "Evolução",
    subtitle: "Diário de 21 Dias",
    body: "Acompanhe o checklist de regas, aplicações e registre fotos da evolução da sua orquídea.",
    isAlert: false,
  },
];

function HomePage() {
  const { user } = useAuthBootstrap();
  const isLoggedIn = !!user;
  const navigate = useNavigate();
  const redirectedRef = useRef(false);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event !== "SIGNED_IN" || !session || redirectedRef.current) return;
      const hasOAuthHash = typeof window !== "undefined" && /access_token|code=/.test(window.location.hash + window.location.search);
      const justSignedIn = sessionStorage.getItem("pf_oauth_pending") === "1";
      if (!hasOAuthHash && !justSignedIn) return;
      redirectedRef.current = true;
      sessionStorage.removeItem("pf_oauth_pending");
      const dest = await resolvePostAuthDestination(session.user.id);
      navigate({ to: dest, replace: true });
    });
    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#F8F5EE] text-[#155F4E] selection:bg-[#D35400]/20 selection:text-[#155F4E]">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-[#155F4E]/10 bg-[#F8F5EE]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-20 md:px-10">
          <Link to="/" className="flex shrink-0 items-center">
            <span className="font-serif text-2xl font-semibold tracking-wider text-[#155F4E] hover:text-[#D35400] transition-colors">
              PlantaeFert
            </span>
          </Link>
          <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-semibold sm:gap-6">
            <Link to={isLoggedIn ? "/metodo" : "/auth"} className="hidden text-[#155F4E]/70 hover:text-[#D35400] transition sm:inline">
              Método
            </Link>
            <Link to={isLoggedIn ? "/aprender" : "/auth"} className="hidden text-[#155F4E]/70 hover:text-[#D35400] transition sm:inline">
              Aprender
            </Link>


            {isLoggedIn ? (
              <>
                <Link
                  to="/minha-orquidea"
                  className="hidden items-center gap-1.5 text-[#155F4E]/70 hover:text-[#D35400] transition sm:inline-flex"
                >
                  <Flower2 className="h-3.5 w-3.5" />
                  Minha orquídea
                </Link>
                <Link
                  to="/inicio"
                  className="inline-flex items-center gap-1.5 bg-[#155F4E] px-3.5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-[#F8F5EE] transition-colors duration-300 hover:bg-[#D35400] sm:px-4"
                >
                  Continuar
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/auth"
                  className="inline-flex items-center gap-1.5 text-[#155F4E]/80 hover:text-[#D35400] transition"
                >
                  <LogIn className="h-3.5 w-3.5" />
                  <span className="hidden xs:inline sm:inline">Entrar</span>
                </Link>
                <Link
                  to="/auth"
                  className="inline-flex items-center gap-1.5 bg-[#155F4E] px-3.5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-[#F8F5EE] transition-colors duration-300 hover:bg-[#D35400] sm:px-4"
                >
                  <span className="hidden sm:inline">Começar grátis</span>
                  <span className="sm:hidden">Começar</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>


      {/* Hero */}
      <section className="relative flex flex-col overflow-hidden lg:flex-row lg:items-stretch lg:min-h-[calc(100vh-4rem)]">
        <div className="absolute top-0 right-0 hidden p-8 z-20 lg:block">
          <span className="text-[10px] tracking-[0.3em] font-semibold text-[#155F4E]/60 uppercase">
            Heritage &amp; Growth
          </span>
        </div>

        <div className="z-10 flex w-full items-center p-8 md:p-16 lg:w-1/2 lg:p-24">
          <div className="max-w-2xl">
            <div className="mb-8 h-px w-20 bg-[#D35400]" />
            <h1 className="mb-10 font-serif text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
              Nutrindo raízes, <br />
              <span className="italic">florescendo</span> orquídeas.
            </h1>
            <p className="mb-12 max-w-lg text-lg leading-relaxed text-[#155F4E]/80 md:text-xl">
              Um protocolo guiado de 21 dias com o Método de 2 Passos — diagnostique,
              enraíze e nutra sua orquídea com a serenidade de quem entende o ritmo da planta.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/auth"
                className="bg-[#155F4E] px-10 py-5 text-[10px] font-bold uppercase tracking-widest text-[#F8F5EE] transition-all duration-500 hover:bg-[#D35400]"
              >
                Começar meu plano
              </Link>
              <Link
                to="/auth"
                className="border border-[#155F4E]/20 px-10 py-5 text-[10px] font-bold uppercase tracking-widest text-[#155F4E] transition-all duration-500 hover:bg-[#155F4E] hover:text-[#F8F5EE]"
              >
                Ver o método
              </Link>
            </div>
            <p className="mt-6 text-[11px] uppercase tracking-[0.25em] text-[#155F4E]/50">
              Acesso grátis
            </p>
          </div>
        </div>

        <div className="relative w-full bg-[#155F4E]/5 lg:min-h-0 lg:w-1/2">
          <div className="p-6 md:p-12 md:pb-28 lg:p-20 lg:pb-32">
            <div className="relative w-full md:h-full">
              <div className="w-full overflow-hidden border border-[#155F4E]/10 shadow-2xl">
                <img
                  src={welcomeOrchid}
                  alt="Kit PlantaeFert com Enraizador Forte e Bokashi Orquídeas ao lado de uma orquídea florida"
                  className="h-auto w-full object-cover md:h-full"
                  width={1200}
                  height={1600}
                />
              </div>
              <div className="relative mx-auto -mt-8 max-w-sm bg-[#F8F5EE] p-6 shadow-xl md:absolute md:-bottom-20 md:-left-12 md:mt-0 md:p-10">
                <p className="mb-4 font-serif text-lg italic leading-tight">
                  “A ciência da terra refinada por gerações de cuidado botânico.”
                </p>
                <span className="text-[10px] uppercase tracking-widest opacity-50">
                  Est. 1984 &mdash; PlantaeFert
                </span>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Benefícios */}
      <section className="border-t border-[#155F4E]/5 bg-[#F8F5EE] px-4 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#155F4E]/60">
              Jornada de Cuidado
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-[#155F4E]">
              O Caminho para uma Orquídea Florida
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ETAPAS.map((e) => (
              <div
                key={e.title}
                className={`group flex flex-col justify-between p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  e.isAlert
                    ? "border-[#D35400]/20 bg-[#D35400]/5 hover:bg-[#D35400]/10 hover:border-[#D35400]/40"
                    : "border-[#155F4E]/20 bg-[#155F4E]/5 hover:bg-[#155F4E]/10 hover:border-[#155F4E]/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`font-serif text-2xl italic font-semibold ${
                        e.isAlert ? "text-[#D35400]" : "text-[#155F4E]"
                      }`}
                    >
                      {e.n}.
                    </span>
                    <span
                      className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                        e.isAlert
                          ? "bg-white/60 border-[#D35400]/20 text-[#D35400]"
                          : "bg-white/60 border-[#155F4E]/20 text-[#155F4E]"
                      }`}
                    >
                      {e.subtitle}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-normal mb-3 text-[#155F4E]">
                    {e.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#155F4E]/80">
                    {e.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Método de 2 Passos */}
      <section className="relative overflow-hidden bg-[#155F4E] py-24 text-[#F8F5EE] md:py-32">
        <div className="mb-16 flex flex-col justify-between gap-12 px-8 md:px-24 lg:mb-24 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.4em] text-[#D35400]">
              Metodologia Proprietária
            </span>
            <h2 className="font-serif text-5xl font-normal leading-none md:text-7xl lg:text-8xl">
              O Método de <br />
              <span className="italic text-[#D35400]">2 Passos</span>
            </h2>
          </div>
          <div className="lg:pb-4">
            <p className="max-w-xs text-sm uppercase leading-relaxed tracking-wider text-[#F8F5EE]/60">
              Duas fórmulas certas, no momento certo — para reconstruir raízes e preparar a floração.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 border-t border-[#F8F5EE]/10 md:grid-cols-2">
          <div className="group border-b border-[#F8F5EE]/10 transition-colors duration-500 hover:bg-[#F8F5EE]/5 md:border-b-0 md:border-r">
            <div className="relative p-12 lg:p-20">
              <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#F8F5EE]/20 transition-all duration-500 group-hover:border-[#D35400]">
                <span className="font-serif text-xl italic">I</span>
              </div>
              <h4 className="mb-6 font-serif text-4xl">Enraizar</h4>
              <p className="mb-10 text-xl leading-relaxed text-[#F8F5EE]/70">
                Enraizador Forte para reconstruir raízes robustas nas primeiras semanas — a base
                silenciosa que sustenta toda floração futura.
              </p>
              <Link
                to="/auth"
                className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#D35400]"
              >
                <span>Saiba mais</span>
                <div className="h-px w-8 bg-[#D35400]" />
              </Link>
            </div>
          </div>
          <div className="group transition-colors duration-500 hover:bg-[#F8F5EE]/5">
            <div className="relative p-12 lg:p-20">
              <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#F8F5EE]/20 transition-all duration-500 group-hover:border-[#D35400]">
                <span className="font-serif text-xl italic">II</span>
              </div>
              <h4 className="mb-6 font-serif text-4xl">Nutrir</h4>
              <p className="mb-10 text-xl leading-relaxed text-[#F8F5EE]/70">
                Bokashi Orquídeas Premium para preparar a floração com nutrição equilibrada,
                respeitando o ritmo biológico da planta.
              </p>
              <Link
                to="/auth"
                className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#D35400]"
              >
                <span>Saiba mais</span>
                <div className="h-px w-8 bg-[#D35400]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Kit visual */}
        <div className="mx-auto mt-24 max-w-5xl px-8 md:px-24">
          <div className="border border-[#F8F5EE]/10 p-3">
            <img
              src={kitMetodo}
              alt="Kit PlantaeFert: Enraizador Forte e Bokashi Orquídeas Premium ao lado do aplicativo com o Plano de 21 dias"
              className="mx-auto h-auto w-full max-w-2xl object-cover"
              loading="lazy"
              width={1024}
              height={1408}
            />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative flex items-center justify-center overflow-hidden px-8 py-32 text-center md:py-40">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <span className="select-none font-serif text-[40vw] uppercase leading-none">
            Raiz
          </span>
        </div>
        <div className="relative z-10 max-w-4xl">
          <h2 className="mb-12 font-serif text-5xl font-normal leading-tight md:text-7xl lg:text-8xl">
            Pronto para começar seus <span className="italic">21 dias</span>?
          </h2>
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-8">
            <Link
              to="/auth"
              className="w-full bg-[#D35400] px-14 py-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F8F5EE] shadow-xl transition-all hover:scale-105 md:w-auto"
            >
              Começar meu plano
            </Link>
            <Link
              to="/auth"
              className="w-full bg-[#155F4E] px-14 py-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F8F5EE] transition-all hover:bg-[#155F4E]/90 md:w-auto"
            >
              Ver o método
            </Link>
          </div>
          <p className="mt-12 text-[10px] uppercase tracking-[0.3em] text-[#155F4E]/40">
            Diagnóstico em menos de 2 minutos
          </p>
        </div>
      </section>

      <footer className="border-t border-[#155F4E]/10 py-10 text-center">
        <div className="text-[10px] uppercase tracking-[0.3em] text-[#155F4E]/50">
          © {new Date().getFullYear()} PlantaeFert · Método de 2 Passos
        </div>
      </footer>
    </div>
  );
}
