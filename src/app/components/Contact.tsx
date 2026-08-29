import { Mail, MapPin, Phone } from "lucide-react";
import { MotionButton } from "./MotionButton";

export function Contact() {
  return (
    <section
      id="contato"
      className="px-5 py-24 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Contato
          </p>
          <h2 className="mt-3 text-3xl font-bold text-text sm:text-4xl">
            Agende sua consulta
          </h2>
          <form className="mt-8 grid gap-4">
            <input
              className="field-motion h-12 rounded-xl border border-primary/15 bg-white px-4"
              placeholder="Nome"
            />
            <input
              className="field-motion h-12 rounded-xl border border-primary/15 bg-white px-4"
              placeholder="E-mail"
              type="email"
            />
            <input
              className="field-motion h-12 rounded-xl border border-primary/15 bg-white px-4"
              placeholder="Telefone"
            />
            <textarea
              className="field-motion min-h-36 rounded-xl border border-primary/15 bg-white px-4 py-3"
              placeholder="Mensagem"
            />
            <MotionButton className="h-12 rounded-full bg-primary px-6 text-sm font-semibold text-white hover:bg-primary/90">
              Enviar
            </MotionButton>
          </form>
        </div>
        <aside className="rounded-3xl bg-secondary p-8">
          <h3 className="text-2xl font-semibold text-text">Informações</h3>
          <div className="mt-7 space-y-5 text-text/70">
            <p className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
              Rua das Acácias, 245, sala 804, Jardim Paulista, São Paulo - SP
            </p>
            <p className="flex gap-3">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-accent" />
              WhatsApp: (11) 98888-1234
            </p>
            <p className="flex gap-3">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-accent" />
              contato@draanalima.com.br
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
