const steps = [
  {
    number: "01",
    title: "Agende sua consulta",
    text: "Envie uma mensagem pelo formulário ou WhatsApp para combinar o melhor horário.",
  },
  {
    number: "02",
    title: "Primeira sessão",
    text: "Conversamos sobre sua história, suas necessidades e os objetivos do processo.",
  },
  {
    number: "03",
    title: "Evolua no seu ritmo",
    text: "As sessões seguem com constância, cuidado e respeito ao seu momento.",
  },
];

export function HowItWorks() {
  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-text sm:text-4xl">
          Como funciona
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="border-l-2 border-primary/25 pl-6">
              <span className="text-sm font-bold text-accent">
                {step.number}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-text">
                {step.title}
              </h3>
              <p className="mt-3 leading-7 text-text/65">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
