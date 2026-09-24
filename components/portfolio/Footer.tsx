import type { Translation } from "@/types/portfolio"

type FooterProps = {
  t: Translation["footer"]
}

export function Footer({ t }: FooterProps) {
  return (
    <footer className="py-8 px-6 border-t border-white/40 bg-white/60">
      <div className="container mx-auto text-center text-muted-foreground">
        <p>{t.copyright}</p>
      </div>
    </footer>
  )
}
