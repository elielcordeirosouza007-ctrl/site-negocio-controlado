import { ArrowRight, Check, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  "Entradas e saídas em segundos",
  "Relatórios com gráficos claros",
  "Sua equipe junta, sem bagunça",
]

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-14 md:px-6 md:pb-24 md:pt-20 lg:grid-cols-2">
        <div className="flex flex-col">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            Feito para pequenos negócios do Brasil
          </span>

          <h1 className="mt-5 text-balance font-serif text-4xl font-semibold leading-[1.05] text-foreground md:text-5xl lg:text-6xl">
            O controle do seu caixa, finalmente organizado
          </h1>

          <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Registre tudo que entra e sai do caixa todos os meses, separe as
            despesas por categoria e veja para onde o dinheiro está indo — sem
            planilha complicada e sem depender só da sua memória.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-6 text-base">
              <a href="/calculadora">
                Começar agora
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-6 text-base">
              <a href="#funcionalidades">Ver como funciona</a>
            </Button>
          </div>

          <ul className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3 w-3" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/5" aria-hidden="true" />
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl shadow-primary/5">
            <img
              src="/dashboard-preview.png"
              alt="Painel do Negócio Controlado mostrando resumo de entradas e saídas, gráfico mensal e categorias de despesas"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
