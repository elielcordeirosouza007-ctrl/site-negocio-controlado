import { Wallet, Mail, Phone, MessageCircle, AtSign, Globe, Share2 } from "lucide-react"

const linkGroups = [
  {
    title: "Produto",
    links: [
      { label: "Funcionalidades", href: "#funcionalidades" },
      { label: "Por que trocar a planilha", href: "#planilha" },
      { label: "Perguntas frequentes", href: "#faq" },
      { label: "Testar grátis", href: "#comecar" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre nós", href: "#inicio" },
      { label: "Contato", href: "#contato" },
      { label: "Termos de uso", href: "#" },
      { label: "Privacidade", href: "#" },
    ],
  },
]

const socials = [
  { label: "Instagram", href: "#", icon: AtSign },
  { label: "WhatsApp", href: "#", icon: MessageCircle },
  { label: "LinkedIn", href: "#", icon: Globe },
  { label: "Compartilhar", href: "#", icon: Share2 },
]

export function SiteFooter() {
  return (
    <footer id="contato" className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Wallet className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-serif text-lg font-semibold text-foreground">
                Negócio Controlado
              </span>
            </div>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              Controle financeiro simples e visual para donos de pequenos
              negócios, autônomos e microempreendedores.
            </p>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title} className="flex flex-col">
              <h3 className="text-sm font-semibold text-foreground">{group.title}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-foreground">Fale com a gente</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="mailto:contato@negociocontrolado.com.br"
                  className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                  contato@negociocontrolado.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5511999999999"
                  className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <MessageCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                  WhatsApp: (11) 99999-9999
                </a>
              </li>
              <li>
                <a
                  href="tel:+551140000000"
                  className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                  (11) 4000-0000
                </a>
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Negócio Controlado. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">Feito no Brasil para pequenos negócios.</p>
        </div>
      </div>
    </footer>
  )
}
