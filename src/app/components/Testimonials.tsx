import { MotionCard } from "./MotionCard";

const testimonials = [
  {
    name: "Mariana S.",
    text: "A terapia me ajudou a entender minha ansiedade com mais gentileza. Senti acolhimento desde a primeira conversa.",
  },
  {
    name: "Rafael M.",
    text: "A Dra. Ana conduz as sessões com muita clareza e respeito. Foi um processo transformador para mim.",
  },
  {
    name: "Clara P.",
    text: "Encontrei um espaço seguro para falar sobre meus relacionamentos e reconstruir minha confiança.",
  },
];

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="bg-secondary px-5 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-text sm:text-4xl">
          Depoimentos
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <MotionCard
              key={testimonial.name}
              variant="testimonial"
              className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm"
            >
              <div className="text-lg tracking-wide text-accent">★★★★★</div>
              <p className="mt-4 leading-7 text-text/70">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className="mt-5 font-semibold text-text">{testimonial.name}</p>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
