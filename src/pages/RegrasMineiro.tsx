import { motion } from "framer-motion";

export default function RegrasMineiro() {
  const sections = [
    {
      icon: "🃏",
      title: "O Baralho",
      content:
        "O Truco Mineiro usa um baralho de 40 cartas — sem os 8s, 9s, 10s e coringas. Diferente do Truco Paulista, não existe vira e as manilhas são fixas.",
    },
    {
      icon: "👥",
      title: "Jogadores e Objetivo",
      content:
        "Normalmente jogado em duplas (2 contra 2), mas também pode ser 1 contra 1. O objetivo é somar 12 pontos vencendo as mãos.",
    },
    {
      icon: "⭐",
      title: "Manilhas Fixas",
      content:
        "No Truco Mineiro as manilhas não mudam. A ordem é: Zap (4♣), Copas (7♥), Espadilha (A♠) e Ouros (7♦).",
    },
    {
      icon: "🎯",
      title: "Rodadas",
      content:
        "Cada mão possui até 3 rodadas. Cada jogador joga uma carta por rodada. Quem vencer duas rodadas ganha a mão.",
    },
    {
      icon: "🏆",
      title: "Hierarquia das Cartas",
      content: null,
      cards: [
        { rank: "1", name: "Zap", desc: "4♣ — carta mais forte" },
        { rank: "2", name: "Copas", desc: "7♥" },
        { rank: "3", name: "Espadilha", desc: "A♠" },
        { rank: "4", name: "Ouros", desc: "7♦" },
        { rank: "5", name: "Três", desc: "todos os naipes" },
        { rank: "6", name: "Dois", desc: "todos os naipes" },
        { rank: "7", name: "Ás", desc: "outros naipes" },
        { rank: "8", name: "Rei", desc: "K" },
        { rank: "9", name: "Valete", desc: "J" },
        { rank: "10", name: "Dama", desc: "Q" },
        { rank: "11", name: "Sete", desc: "exceto ♥ e ♦" },
        { rank: "12", name: "Seis", desc: "todos os naipes" },
        { rank: "13", name: "Cinco", desc: "todos os naipes" },
        { rank: "14", name: "Quatro", desc: "exceto ♣ — fraca" },
      ],
    },
    {
      icon: "📢",
      title: "O Truco",
      content:
        'Qualquer jogador pode pedir "Truco" antes de jogar. O adversário pode aceitar, correr ou aumentar.',
      scale: [
        { label: "Normal", pts: "1" },
        { label: "Truco", pts: "3" },
        { label: "Seis", pts: "6" },
        { label: "Nove", pts: "9" },
        { label: "Doze", pts: "12" },
      ],
    },
    {
      icon: "✊",
      title: "Mão de Ferro",
      content:
        "Quando as duas duplas chegam a 11 pontos acontece a mão de ferro. A mão decide a partida.",
    },
    {
      icon: "⚡",
      title: "Mão de 11",
      content:
        "Com 11 pontos, a dupla olha as cartas um do outro e decide se joga ou corre.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="mineiro"
      className="relative min-h-screen px-4 py-12 overflow-hidden bg-[#080810]"
    >
      {/* Glow animado sutil */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-white/5 blur-[120px]"
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto mb-14 text-center"
      >
        <h1 className="font-title text-title text-4xl sm:text-5xl md:text-6xl leading-tight mb-5">
          Regras do <span className="text-white">Truco Mineiro</span>
        </h1>

        <p className="font-text text-text/75 text-base sm:text-lg max-w-xl mx-auto border-t border-white/10 pt-6">
          Conheça as regras da versão tradicional jogada em Minas Gerais.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4"
      >
        {sections.map((sec, i) => (
          <motion.div
            key={i}
            variants={item}
            className="break-inside-avoid mb-4 group relative rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-5 backdrop-blur-xl shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl text-base bg-white/5 border border-white/10">
                {sec.icon}
              </span>

              <h2 className="font-title text-title text-sm md:text-base font-semibold">
                {sec.title}
              </h2>
            </div>

            {sec.content && (
              <p className="font-text text-text/85 text-sm leading-relaxed">
                {sec.content}
              </p>
            )}

            {sec.scale && (
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 mt-3">
                {sec.scale.map((s, j) => (
                  <div key={j} className="flex items-center gap-1.5">
                    <span className="font-title text-xs font-bold px-2 py-0.5 rounded-lg bg-white/10 text-title border border-white/10">
                      {s.pts}pts
                    </span>

                    <span className="font-text text-text/70 text-xs">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {sec.cards && (
              <div className="grid grid-cols-2 gap-1.5 mt-2">
                {sec.cards.map((card, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-2 rounded-xl px-2.5 py-1.5 bg-white/[0.035] border border-white/[0.05]"
                  >
                    <span className="font-title text-white text-xs font-black w-4 text-center">
                      {card.rank}
                    </span>

                    <div>
                      <p className="font-title text-title text-xs font-semibold">
                        {card.name}
                      </p>

                      <p className="font-text text-text/55 text-[10px]">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}