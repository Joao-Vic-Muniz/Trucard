export default function RegrasPaulista() {
  const sections = [
    {
      icon: "🃏",
      title: "O Baralho",
      content:
        "O Truco Paulista usa um baralho de 40 cartas — sem os 8s, 9s e coringas. As 4 manilhas variam a cada rodada conforme a vira.",
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
      icon: "💰",
      title: "Envido",
      content:
        "Aposta feita antes da 1ª rodada. Cada time soma cartas do mesmo naipe (máx. 2). Maior soma vence pontos extras.",
    },
    {
      icon: "⚡",
      title: "Mão de 11",
      content:
        "Com 11 pontos, o time decide secretamente se joga. Se jogar, o adversário vê as cartas: aceita (3 pts) ou recusa (1 pt ao time de 11).",
    },
  ];

  const scoreRows = [
    { label: "Mão normal", pts: "1" },
    { label: "Truco", pts: "3" },
    { label: "Seis", pts: "6" },
    { label: "Nove", pts: "9" },
    { label: "Doze", pts: "12" },
    { label: "Envido simples", pts: "1" },
    { label: "Envido real", pts: "2" },
    { label: "Fuga do truco", pts: "1†" },
  ];

  return (
    <section
      id="regras"
      className="relative min-h-screen pt-16 px-4 py-12 overflow-hidden bg-[#080810]"
    >
      {/* Background radial gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_15%_10%,rgba(180,30,30,0.22),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_85%_85%,rgba(180,30,30,0.14),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(200,160,40,0.06),transparent_60%)]" />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/25 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 -right-24 w-96 h-96 rounded-full bg-accent/15 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#d4a820]/[0.06] blur-[80px]" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      {/* Header */}
      <div className="relative max-w-5xl mx-auto mb-14 text-center">
        <span className="inline-block font-text text-xs font-bold uppercase tracking-[0.3em] mb-4 px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent">
          Guia Completo
        </span>

        <h1 className="font-title text-title text-4xl sm:text-5xl md:text-6xl leading-tight mb-5">
          Regras do{" "}
          <span className="relative inline-block text-accent">
            Truco Paulista
            <span className="absolute -bottom-1 left-0 w-full h-px rounded-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />
          </span>
        </h1>

        <p className="font-text text-text/75 text-base sm:text-lg max-w-xl mx-auto">
          Tudo que você precisa para dominar a versão mais popular do Truco no Brasil.
        </p>
      </div>

      {/* Masonry grid */}
      <div className="relative max-w-5xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4">
        {sections.map((sec, i) => (
          <div
            key={i}
            className="break-inside-avoid mb-4 group relative rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-5 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-accent/50 hover:shadow-[0_8px_40px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.09)] hover:-translate-y-0.5 transition-all duration-300 cursor-default"
          >
            {/* Top accent line on hover */}
            <div className="absolute top-0 left-8 right-8 h-px rounded-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl text-base shrink-0 bg-accent/15 border border-accent/25">
                {sec.icon}
              </span>
              <h2 className="font-title text-title text-sm md:text-base font-semibold">
                {sec.title}
              </h2>
            </div>

            {/* Text content */}
            {sec.content && (
              <p className="font-text text-text/85 text-sm leading-relaxed">
                {sec.content}
              </p>
            )}

            {/* Truco scale */}
            {sec.scale && (
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 mt-3">
                {sec.scale.map((s, j) => (
                  <div key={j} className="flex items-center gap-1.5">
                    <span className="font-title text-xs font-bold px-2 py-0.5 rounded-lg bg-accent/[0.18] text-accent border border-accent/30">
                      {s.pts}pt{parseInt(s.pts) > 1 ? "s" : ""}
                    </span>
                    <span className="font-text text-text/70 text-xs">{s.label}</span>
                    {j < sec.scale!.length - 1 && (
                      <span className="text-accent/70 text-[9px]">›</span>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Cards hierarchy */}
            {sec.cards && (
              <div className="grid grid-cols-2 gap-1.5 mt-2">
                {sec.cards.map((card, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-2 rounded-xl px-2.5 py-1.5 bg-white/[0.035] border border-white/[0.05]"
                  >
                    <span className="font-title text-accent text-xs font-black w-4 text-center shrink-0">
                      {card.rank}
                    </span>
                    <div className="min-w-0">
                      <p className="font-title text-title text-xs font-semibold truncate leading-tight">
                        {card.name}
                      </p>
                      <p className="font-text text-text/55 text-[10px] truncate">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Pontuação card */}
        <div className="break-inside-avoid mb-4 group relative rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/[0.12] to-white/[0.025] p-5 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-accent/55 hover:-translate-y-0.5 transition-all duration-300 cursor-default">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center w-9 h-9 rounded-xl text-base shrink-0 bg-accent/20 border border-accent/35">
              📊
            </span>
            <h2 className="font-title text-title text-sm md:text-base font-semibold">
              Tabela de Pontuação
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {scoreRows.map((row, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-xl px-3 py-2 bg-white/[0.035] border border-white/[0.05]"
              >
                <span className="font-text text-text/80 text-xs">{row.label}</span>
                <span className="font-title text-accent text-sm font-bold ml-2 shrink-0">
                  {row.pts}
                </span>
              </div>
            ))}
          </div>

          <p className="font-text text-text/40 text-[10px] mt-3">
            † ponto vai para o adversário
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="relative max-w-5xl mx-auto mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#home"
          className="text-center px-8 py-3 rounded-xl font-text font-medium bg-white/[0.04] border border-white/[0.1] text-title hover:border-accent/50 hover:text-accent hover:bg-accent/10 hover:scale-105 transition-all duration-300"
        >
          ← Voltar ao Início
        </a>
        <a
          href="#mineiro"
          className="text-white text-center px-8 py-3 rounded-xl font-text font-medium bg-accent hover:bg-accentSecondary hover:scale-105 shadow-[0_4px_24px_rgba(180,30,30,0.35)] transition-all duration-300"
        >
          Ver Truco Mineiro →
        </a>
      </div>
    </section>
  );
}