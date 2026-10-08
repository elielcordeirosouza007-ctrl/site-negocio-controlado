import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Cta() {
  return (
    <section id="comecar" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center rounded-2xl border border-border bg-primary px-6 py-14 text-center text-primary-foreground md:px-12 md:py-20">
          <h2 className="max-w-2xl text-balance font-serif text-3xl font-semibold md:text-4xl">
            Comece hoje a enxergar o dinheiro do seu negócio com clareza
          </h2>
          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/80">
            Teste grátis, sem cartão. Lance o seu primeiro mês e veja o resumo do
            caixa em minutos.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="secondary" className="h-12 px-6 text-base">
              <a href="#comecar">
                Testar grátis
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-primary-foreground/30 bg-transparent px-6 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href="#faq">Falar com a gente</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
