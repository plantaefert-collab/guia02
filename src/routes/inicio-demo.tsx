import { createFileRoute } from "@tanstack/react-router";
import { InicioFlowDemoComponent } from "@/components/InicioFlowDemo";

export const Route = createFileRoute("/inicio-demo")({
  head: () => ({
    meta: [
      { title: "Demonstração Visual da Tela /inicio (1º Acesso vs Cliente Ativo)" },
      { name: "description", content: "Demonstração interativa dos dois estados da tela /inicio." },
    ],
  }),
  component: InicioFlowDemoComponent,
});
