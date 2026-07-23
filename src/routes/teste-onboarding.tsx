import { createFileRoute } from "@tanstack/react-router";
import { OnboardingDemosComponent } from "@/components/OnboardingDemos";

export const Route = createFileRoute("/teste-onboarding")({
  head: () => ({
    meta: [
      { title: "Demonstração Interativa das 3 Opções de Onboarding — PlantaeFert" },
      { name: "description", content: "Teste visual interativo dos 3 modelos de onboarding e diagnóstico integrado." },
    ],
  }),
  component: OnboardingDemosComponent,
});
