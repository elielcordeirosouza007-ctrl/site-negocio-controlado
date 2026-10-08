import { ArrowDownUp, Tags, BarChart3, Users } from "lucide-react"

const features = [
  {
    icon: ArrowDownUp,
    title: "Controle de entradas e saídas",
    description:
      "Lance cada venda, pagamento e retirada em poucos toques. O saldo do caixa se atualiza sozinho, a qualquer momento do mês.",
  },
  {
    icon: Tags,
    title: "Categorização de despesas",
    description:
      "Separe seus gastos por categoria — fornecedores, aluguel, salários, impostos — e descubra rápido onde o dinheiro está saindo.",
  },
  {
    icon: BarChart3,
    title: "Relatórios mensais com gráficos",
    description:
      "Veja o resumo do mês em gráficos simples de entender. Compare meses, acompanhe o lucro e tome decisões com clareza.",
  },
  {
    icon: Users,
    title: "Vários usuários por empresa",
    description:
      "Toda a equipe lança dados no mesmo lugar, com níveis de acesso: dono vê tudo, financeiro gerencia e colaborador só registra.",
  },
]

export function Features() {
  return (
    <section id="funcionalidades" className="border-t border-border bg-card/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            O que o sistema faz
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Tudo o que você precisa para não perder o controle do caixa
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Ferramentas simples, pensadas para quem toca o negócio no dia a dia
            — não para contadores.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md hover:shadow-primary/5 md:p-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2.5 text-pretty leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 rounded-xl border border-border bg-primary p-6 text-primary-foreground sm:grid-cols-3 md:p-8">
          {[
            { role: "Dono", access: "Acesso total: vê relatórios, gerencia a equipe e todas as contas." },
            { role: "Financeiro", access: "Lança e edita entradas e saídas e organiza as categorias." },
            { role: "Colaborador", access: "Registra os lançamentos do dia sem acessar dados sensíveis." },
          ].map((item) => (
            <div key={item.role} className="flex flex-col">
              <span className="font-serif text-lg font-semibold">{item.role}</span>
              <p className="mt-1.5 text-sm leading-relaxed text-primary-foreground/75">
                {item.access}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
