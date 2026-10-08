import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CashCalculator } from "@/components/cash-calculator"

export const metadata: Metadata = {
  title: "Calculadora de caixa — Negócio Controlado",
  description:
    "Some entradas e saídas do seu caixa e veja o saldo na hora. Grátis, sem cadastro, salvo no seu navegador.",
}

export default function CalculadoraPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
            <span className="inline-flex w-fit items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
              Ferramenta grátis
            </span>
            <h1 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              Calculadora de caixa
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Lance o que entrou e o que saiu do caixa e acompanhe seu saldo em
              tempo real. Não precisa de cadastro — os lançamentos ficam salvos
              no seu próprio navegador.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <CashCalculator />
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
