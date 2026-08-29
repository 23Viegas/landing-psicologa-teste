const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-text px-5 py-10 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-xl font-bold">Dra. Ana Lima</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/65">
            Psicóloga clínica. CRP 06/123456. Atendimento presencial e online.
          </p>
        </div>
        <div>
          <p className="font-semibold">Links rápidos</p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm text-white/70">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold">Redes sociais</p>
          <div className="mt-3 flex gap-4 text-sm text-white/70">
            <a href="#" className="hover:text-white">
              Instagram
            </a>
            <a href="#" className="hover:text-white">
              LinkedIn
            </a>
          </div>
          <p className="mt-5 text-sm text-white/55">
            © 2026 Dra. Ana Lima. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
