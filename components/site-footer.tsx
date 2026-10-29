import { SITE_NAME, WHATSAPP_URL } from "@/lib/landing-content";

export function SiteFooter() {
  return (
    <footer id="contato" className="scroll-mt-16 border-t border-brand-soft bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 text-sm text-muted sm:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 text-base font-bold text-foreground">
            <span aria-hidden>🐾</span>
            {SITE_NAME}
          </p>
          <p className="mt-2">Cuidado e carinho para o seu pet.</p>
        </div>
        <div>
          <p className="font-semibold text-foreground">Endereço</p>
          <p className="mt-2">Rua dos Bichos, 123 — Centro</p>
          <p>São Paulo, SP</p>
        </div>
        <div>
          <p className="font-semibold text-foreground">Horário & contato</p>
          <p className="mt-2">Seg a Sáb, 8h às 19h</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
            (11) 99999-9999
          </a>
        </div>
      </div>
      <p className="border-t border-brand-soft py-4 text-center text-xs text-muted">
        © 2026 {SITE_NAME}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
