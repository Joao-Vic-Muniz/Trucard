import { motion } from "framer-motion";

export default function RegrasPaulista() {
  const sections = [
    {
      icon: "🃏",
      title: "O Baralho",
      content:
        "O Truco Paulista usa um baralho de 40 cartas — sem os 8s, 9s, 10s e coringas. As 4 manilhas variam a cada rodada conforme a vira.",
    },
    {
      icon: "👥",
      title: "Jogadores e Objetivo",
      content:
        "Disputado por 2 jogadores ou 2 duplas. Vence quem chegar primeiro a 12 pontos acumulando vitórias nas mãos.",
    },
    {
      icon: "🔄",
      title: "A Vira e as Manilhas",
      content:
        "A carta virada define as manilhas: a carta imediatamente superior à vira se torna manilha. Hierarquia: Zap (♣3), Copas (♥3), Espadilha (♠7), Ouros (♦7).",
    },
    {
      icon: "🎯",
      title: "Rodadas",
      content:
        "Cada mão tem até 3 rodadas. Quem jogar a carta mais alta vence. Vence a mão quem ganhar 2 das 3 rodadas. Empates consecutivos: mão vale 1 ponto para cada lado.",
    },
    {
      icon: "🏆",
      title: "Hierarquia das Cartas",
      content: null,
      cards: [
        { rank: "1", name: "Zap", desc: "3♣ — o mais forte" },
        { rank: "2", name: "Copas", desc: "3♥" },
        { rank: "3", name: "Espadilha", desc: "7♠" },
        { rank: "4", name: "Ouros", desc: "7♦" },
        { rank: "5", name: "Três", desc: "outros naipes" },
        { rank: "6", name: "Dois", desc: "qualquer naipe" },
        { rank: "7", name: "Ás", desc: "qualquer naipe" },
        { rank: "8", name: "Rei → Valete", desc: "K, J" },
        { rank: "9", name: "Dama", desc: "Q" },
        { rank: "10", name: "7 → 4", desc: "maior pro menor" },
      ],
    },
    {
      icon: "📢",
      title: "O Truco",
      content:
        'Qualquer jogador pode pedir "Truco" antes de jogar, elevando o valor da mão. O adversário aceita, foge (1 pt ao oponente) ou aumenta.',
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
        "Quando os dois times têm 11 pontos, ninguém pode ver as próprias cartas. A rodada decide o jogo.",
    },
    {
      icon: "⚡",
      title: "Mão de 11",
      content:
        "Com 11 pontos, a dupla pode ver as cartas do parceiro e decidir: jogar (3 pts) ou correr (1 pt ao adversário).",
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
      id="regras"
      className="relative min-h-screen px-4 py-12 overflow-hidden bg-[#080810]"
    >
      {/* Glow animado */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/5 blur-[120px]"
      />

      {/* Header atualizado sem o risco/badge verde */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto mb-14 text-center"
      >
        <h1 className="font-title text-title text-4xl sm:text-5xl md:text-6xl leading-tight mb-5">
          Regras do <span className="text-white">Truco Paulista</span>
        </h1>

        <p className="font-text text-text/75 text-base sm:text-lg max-w-xl mx-auto border-t border-white/10 pt-6">
          Tudo que você precisa para dominar a versão mais popular do Truco no Brasil.
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
            whileHover={{ y: -6 }}
            className="break-inside-avoid mb-4 group relative rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-5 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.4)] transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl text-base shrink-0 bg-white/5 border border-white/10">
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
                      {s.pts}pt{parseInt(s.pts) > 1 ? "s" : ""}
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

      {/* Navegação */}
      <div className="relative max-w-5xl mx-auto mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          href="#home"
          className="text-center px-8 py-3 rounded-xl font-text font-medium bg-white/[0.04] border border-white/[0.1] text-title hover:border-white/20 hover:bg-white/5 transition-all duration-300"
        >
          ← Voltar ao Início
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          href="#mineiro"
          className="text-white text-center px-8 py-3 rounded-xl font-text font-medium bg-white/10 border border-white/10 hover:bg-white/20 transition-all duration-300"
        >
          Ver Truco Mineiro →
        </motion.a>
      </div>
    </section>
  );
}