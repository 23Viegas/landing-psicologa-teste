import { HeartHandshake, Leaf, MessageCircleHeart, Moon } from "lucide-react";

const specialties = [
  {
    title: "Ansiedade",
    icon: Moon,
    text: "Ferramentas para lidar com preocupações, tensão e autocobrança.",
  },
  {
    title: "Depressão",
    icon: Leaf,
    text: "Acompanhamento cuidadoso para fases de desânimo e sofrimento emocional.",
  },
  {
    title: "Relacionamentos",
    icon: HeartHandshake,
    text: "Reflexões para vínculos mais conscientes, leves e seguros.",
  },
  {
    title: "Autoconhecimento",
    icon: MessageCircleHeart,
    text: "Um caminho para entender padrões, escolhas e necessidades.",
  },
];

export function Specialties() {
  return (
    <section
      id="especialidades"
      className="bg-secondary px-5 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Especialidades
          </p>
          <h2 className="mt-3 text-3xl font-bold text-text sm:text-4xl">
            Áreas de atendimento
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {specialties.map(({ title, icon: Icon, text }) => (
            <article
              key={title}
              className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm transition duration-300 ease-out hover:scale-[1.02] hover:shadow-lift"
            >
              <Icon className="h-9 w-9 text-accent" strokeWidth={1.8} />
              <h3 className="mt-5 text-xl font-semibold text-text">{title}</h3>
              <p className="mt-3 leading-7 text-text/65">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
