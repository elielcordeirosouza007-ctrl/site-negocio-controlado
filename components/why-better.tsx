import { Zap, PieChart, ShieldCheck, FolderCheck, X } from "lucide-react"

const reasons = [
  {
    icon: Zap,
    title: "Mais rápido",
    description:
      "Lançar uma entrada leva segundos. Nada de rolar planilha enorme ou procurar a célula certa.",
  },
  {
    icon: PieChart,
    title: "Mais visual",
    description:
      "Gráficos e resumos prontos mostram o mês inteiro de um jeito que qualquer um entende.",
  },
  {
    icon: ShieldCheck,
    title: "Menos erro",
    description:
      "Sem fórmula quebrada e sem apagar dado por engano. Os cálculos são feitos automaticamente.",
  },
  {
    icon: FolderCheck,
    title: "Seguro e organizado",
    description:
      "Seus dados ficam guardados por categoria, com acesso controlado por pessoa da equipe.",
  },
]

const oldWay = [
  "Fórmula quebra e ninguém percebe",
  "Cada um tem uma versão da planilha",
  "Difícil ver o resumo do mês",
  "Arquivo perdido no computador ou no zap",
]

export function WhyBetter() {
  return (
    <section id="planilha" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            Melhor que planilha
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Por que sair da planilha ou das anotações soltas
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Planilha resolve no começo, mas trava conforme o negócio cresce. O
            Negócio Controlado foi feito para acompanhar você.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex flex-col rounded-xl border border-border bg-card p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <reason.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col rounded-xl border border-border bg-muted/50 p-6 md:p-8">
            <h3 className="font-serif text-lg font-semibold text-foreground">
              O jeito antigo, na planilha
            </h3>
            <ul className="mt-5 flex flex-col gap-4">
              {oldWay.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                    <X className="h-3 w-3" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-lg border border-border bg-card p-4 text-sm leading-relaxed text-foreground">
              Com o Negócio Controlado, tudo isso fica em um só lugar, atualizado
              e acessível pela sua equipe.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
