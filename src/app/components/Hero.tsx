"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  CalendarDays,
  CheckCircle2,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";
import { ButtonLink } from "./ButtonLink";

const entranceTransition = {
  duration: 0.6,
  ease: [0.23, 1, 0.32, 1],
} as const;

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const initialY = shouldReduceMotion ? 0 : -24;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-white to-primary/10">
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/80 to-transparent" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-5 pb-24 pt-16 text-center lg:px-8 lg:pb-28 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            ...entranceTransition,
            duration: shouldReduceMotion ? 0 : 0.45,
          }}
          className="inline-flex origin-center items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-medium text-text/70 shadow-sm"
        >
          <HeartHandshake className="h-4 w-4 text-accent" />
          Psicologia clínica para adultos
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: initialY }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ...entranceTransition,
            duration: shouldReduceMotion ? 0 : 0.6,
          }}
          className="mt-7 max-w-5xl text-4xl font-bold leading-tight text-text sm:text-5xl lg:text-6xl"
        >
          Cuidando da sua saúde mental com acolhimento e profissionalismo
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: initialY }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ...entranceTransition,
            delay: shouldReduceMotion ? 0 : 0.2,
            duration: shouldReduceMotion ? 0 : 0.6,
          }}
          className="mt-6 max-w-2xl text-lg leading-8 text-text/70"
        >
          Atendimento presencial em São Paulo e online com a Dra. Ana Lima para
          quem busca equilíbrio emocional, autoconhecimento e relações mais
          saudáveis.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: initialY }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ...entranceTransition,
            delay: shouldReduceMotion ? 0 : 0.4,
            duration: shouldReduceMotion ? 0 : 0.6,
          }}
          className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row"
        >
          <ButtonLink href="#contato">
            <CalendarDays className="h-4 w-4" />
            Agendar Consulta
          </ButtonLink>
          <ButtonLink href="#sobre" variant="secondary">
            Saiba Mais
          </ButtonLink>
        </motion.div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-text/65">
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            CRP 06/123456
          </span>
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            10 anos de experiência
          </span>
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            Online e presencial
          </span>
        </div>

        <div className="mt-14 w-full max-w-5xl rounded-[2rem] border border-primary/10 bg-white/80 p-3 shadow-soft backdrop-blur">
          <div className="grid overflow-hidden rounded-[1.5rem] border border-primary/10 bg-white lg:grid-cols-[0.95fr_1.05fr]">
            <div className="flex flex-col justify-between bg-secondary p-6 text-left sm:p-8">
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-accent shadow-sm">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-text">
                  Um espaço seguro para elaborar o que você sente
                </h2>
                <p className="mt-4 leading-7 text-text/65">
                  Sessões conduzidas com escuta ativa, sigilo e respeito ao seu
                  ritmo, sem julgamentos ou fórmulas prontas.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-white p-4">
                  <p className="font-semibold text-text">50 min</p>
                  <p className="mt-1 text-text/55">por sessão</p>
                </div>
                <div className="rounded-2xl bg-white p-4">
                  <p className="font-semibold text-text">Presencial</p>
                  <p className="mt-1 text-text/55">ou online</p>
                </div>
              </div>
            </div>
            <div className="relative min-h-[22rem] bg-gradient-to-br from-primary/15 via-white to-accent/15 p-6 sm:p-8">
              <div className="absolute right-8 top-8 rounded-2xl bg-white px-4 py-3 text-left shadow-sm">
                <p className="text-sm font-semibold text-text">
                  Próximo horário
                </p>
                <p className="mt-1 text-sm text-text/55">Terça, 15h30</p>
              </div>
              <div className="flex h-full items-end">
                <div className="w-full rounded-[1.5rem] border border-white/80 bg-white/75 p-5 text-left shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    Dra. Ana Lima
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-text">
                    Terapia com presença, clareza e cuidado.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Ansiedade", "Relacionamentos", "Autoconhecimento"].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-text/65"
                        >
                          {item}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
