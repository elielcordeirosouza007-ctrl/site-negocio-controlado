"use client"

import { useEffect, useMemo, useState } from "react"
import { ArrowDownCircle, ArrowUpCircle, Plus, Trash2, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"

type EntryType = "entrada" | "saida"

type Entry = {
  id: string
  type: EntryType
  description: string
  amount: number
  createdAt: number
}

const STORAGE_KEY = "negocio-controlado:lancamentos"

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
})

function parseAmount(value: string): number {
  // aceita "1.234,56" ou "1234.56" ou "1234,56"
  const normalized = value.replace(/\./g, "").replace(",", ".")
  const parsed = Number.parseFloat(normalized)
  return Number.isFinite(parsed) ? parsed : 0
}

export function CashCalculator() {
  const [entries, setEntries] = useState<Entry[]>([])
  const [loaded, setLoaded] = useState(false)
  const [type, setType] = useState<EntryType>("entrada")
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")
  const [error, setError] = useState("")

  // carrega do navegador
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw) as Entry[]
        if (Array.isArray(parsed)) setEntries(parsed)
      }
    } catch {
      // ignora dados corrompidos
    }
    setLoaded(true)
  }, [])

  // salva no navegador
  useEffect(() => {
    if (!loaded) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
    } catch {
      // ignora se o navegador bloquear
    }
  }, [entries, loaded])

  const { totalEntradas, totalSaidas, saldo } = useMemo(() => {
    let totalEntradas = 0
    let totalSaidas = 0
    for (const entry of entries) {
      if (entry.type === "entrada") totalEntradas += entry.amount
      else totalSaidas += entry.amount
    }
    return { totalEntradas, totalSaidas, saldo: totalEntradas - totalSaidas }
  }, [entries])

  function handleAdd(e: React.FormEvent) {
    e.preventDefault()
    const value = parseAmount(amount)
    if (!description.trim()) {
      setError("Escreva uma descrição para o lançamento.")
      return
    }
    if (value <= 0) {
      setError("Informe um valor maior que zero.")
      return
    }
    setError("")
    setEntries((prev) => [
      {
        id: crypto.randomUUID(),
        type,
        description: description.trim(),
        amount: value,
        createdAt: Date.now(),
      },
      ...prev,
    ])
    setDescription("")
    setAmount("")
  }

  function handleRemove(id: string) {
    setEntries((prev) => prev.filter((entry) => entry.id !== id))
  }

  function handleClearAll() {
    setEntries([])
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
      {/* Formulário + resumo */}
      <div className="flex flex-col gap-6">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="font-serif text-xl font-semibold text-foreground">Novo lançamento</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Registre o que entrou ou saiu do caixa. Fica salvo no seu navegador.
          </p>

          <form onSubmit={handleAdd} className="mt-5 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label="Tipo de lançamento">
              <button
                type="button"
                onClick={() => setType("entrada")}
                aria-pressed={type === "entrada"}
                className={`flex items-center justify-center gap-2 rounded-md border px-3 py-2.5 text-sm font-medium transition-colors ${
                  type === "entrada"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                <ArrowUpCircle className="h-4 w-4" aria-hidden="true" />
                Entrada
              </button>
              <button
                type="button"
                onClick={() => setType("saida")}
                aria-pressed={type === "saida"}
                className={`flex items-center justify-center gap-2 rounded-md border px-3 py-2.5 text-sm font-medium transition-colors ${
                  type === "saida"
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                <ArrowDownCircle className="h-4 w-4" aria-hidden="true" />
                Saída
              </button>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="description" className="text-sm font-medium text-foreground">
                Descrição
              </label>
              <input
                id="description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ex.: Venda do dia, Compra de mercadoria"
                className="h-11 rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="amount" className="text-sm font-medium text-foreground">
                Valor (R$)
              </label>
              <input
                id="amount"
                type="text"
                inputMode="decimal"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0,00"
                className="h-11 rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {error && (
              <p role="alert" className="text-sm text-destructive">
                {error}
              </p>
            )}

            <Button type="submit" size="lg" className="h-11">
              <Plus className="h-4 w-4" aria-hidden="true" />
              Adicionar lançamento
            </Button>
          </form>
        </div>

        {/* Resumo */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-2">
            <Wallet className="h-4 w-4 text-primary" aria-hidden="true" />
            <h2 className="font-serif text-xl font-semibold text-foreground">Resumo do caixa</h2>
          </div>

          <dl className="mt-5 flex flex-col gap-3">
            <div className="flex items-center justify-between rounded-md bg-primary/5 px-4 py-3">
              <dt className="text-sm font-medium text-muted-foreground">Total de entradas</dt>
              <dd className="text-base font-semibold text-primary">{currency.format(totalEntradas)}</dd>
            </div>
            <div className="flex items-center justify-between rounded-md bg-accent/5 px-4 py-3">
              <dt className="text-sm font-medium text-muted-foreground">Total de saídas</dt>
              <dd className="text-base font-semibold text-accent">{currency.format(totalSaidas)}</dd>
            </div>
            <div className="flex items-center justify-between rounded-md border border-border px-4 py-3.5">
              <dt className="text-sm font-semibold text-foreground">Saldo</dt>
              <dd
                className={`text-lg font-bold ${saldo >= 0 ? "text-primary" : "text-destructive"}`}
              >
                {currency.format(saldo)}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Lista de lançamentos */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-xl font-semibold text-foreground">Lançamentos</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {entries.length === 0
                ? "Nenhum lançamento ainda."
                : `${entries.length} ${entries.length === 1 ? "registro" : "registros"} no caixa.`}
            </p>
          </div>
          {entries.length > 0 && (
            <Button variant="outline" size="sm" onClick={handleClearAll}>
              <Trash2 className="h-4 w-4" aria-hidden="true" />
              Limpar tudo
            </Button>
          )}
        </div>

        {entries.length === 0 ? (
          <div className="mt-8 flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <Wallet className="h-6 w-6" aria-hidden="true" />
            </span>
            <p className="mt-4 max-w-xs text-pretty text-sm text-muted-foreground">
              Adicione sua primeira entrada ou saída ao lado para começar a controlar o caixa.
            </p>
          </div>
        ) : (
          <ul className="mt-5 flex flex-col divide-y divide-border">
            {entries.map((entry) => (
              <li key={entry.id} className="flex items-center justify-between gap-3 py-3.5">
                <div className="flex min-w-0 items-center gap-3">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                      entry.type === "entrada"
                        ? "bg-primary/10 text-primary"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    {entry.type === "entrada" ? (
                      <ArrowUpCircle className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <ArrowDownCircle className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-foreground">{entry.description}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(entry.createdAt).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "short",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-sm font-semibold ${
                      entry.type === "entrada" ? "text-primary" : "text-accent"
                    }`}
                  >
                    {entry.type === "entrada" ? "+" : "-"} {currency.format(entry.amount)}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemove(entry.id)}
                    aria-label={`Remover ${entry.description}`}
                    className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
