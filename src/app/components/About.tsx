import Image from "next/image";

const highlights = [
  "CRP 06/123456",
  "10 anos de experiência",
  "Online e presencial",
];

export function About() {
  return (
    <section
      id="sobre"
      className="px-5 py-24 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="interactive-lift aspect-[4/5] rounded-3xl bg-secondary p-5 shadow-soft">
          <div className="relative h-full overflow-hidden rounded-2xl border border-primary/10 bg-white">
            <Image
              src="/dra-ana-lima.png"
              alt="Dra. Ana Lima em atendimento psicológico"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-text/20 via-transparent to-transparent" />
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Sobre
          </p>
          <h2 className="mt-3 text-3xl font-bold text-text sm:text-4xl">
            Dra. Ana Lima
          </h2>
          <p className="mt-5 text-lg leading-8 text-text/70">
            Psicóloga clínica com CRP 06/123456, Ana Lima atua há 10 anos
            acompanhando adultos em processos de ansiedade, autoestima,
            relacionamentos e transições de vida. Seu trabalho une técnica,
            escuta ativa e acolhimento para construir um percurso terapêutico
            respeitoso e possível.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-primary/10 bg-secondary px-5 py-4 text-sm font-semibold text-text"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
