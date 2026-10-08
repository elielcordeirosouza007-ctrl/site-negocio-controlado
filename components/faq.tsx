"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "Preciso entender de finanças ou contabilidade para usar?",
    answer:
      "Não. O sistema foi feito para o dono do negócio, não para o contador. Você lança o que entra e o que sai, e a gente cuida dos cálculos e dos gráficos para você.",
  },
  {
    question: "Consigo migrar o que já tenho na planilha?",
    answer:
      "Sim. Você pode começar do zero ou lançar os dados dos meses anteriores aos poucos. Não é obrigatório trazer tudo de uma vez para começar a usar.",
  },
  {
    question: "Mais de uma pessoa pode usar na mesma empresa?",
    answer:
      "Pode. Você cria acessos para a equipe com níveis diferentes: dono (vê tudo), financeiro (gerencia lançamentos e categorias) e colaborador (só registra). Cada um vê apenas o que precisa.",
  },
  {
    question: "Meus dados ficam seguros?",
    answer:
      "Sim. As informações ficam guardadas de forma organizada por categoria e com acesso controlado por pessoa. Nada de arquivo solto se perdendo no computador ou no celular.",
  },
  {
    question: "Serve para autônomo e microempreendedor?",
    answer:
      "Serve. Seja padaria, loja, salão, prestador de serviço ou MEI, o sistema funciona para qualquer negócio que precise controlar entradas e saídas do caixa.",
  },
  {
    question: "Como funciona o teste grátis?",
    answer:
      "Você começa a usar sem pagar nada e sem precisar cadastrar cartão. É só criar sua conta e lançar o primeiro mês para ver como fica o seu caixa.",
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="border-t border-border bg-card/40 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            Perguntas frequentes
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Ainda com dúvidas? A gente responde
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.question} className="rounded-xl border border-border bg-card">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-foreground">{faq.question}</span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="px-5 pb-5 text-pretty leading-relaxed text-muted-foreground md:px-6">
                    {faq.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
