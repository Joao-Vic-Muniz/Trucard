import bg from "../assets/images/Baralho_Bg.png";

export default function Home() {
  return (
    <section
      id="home"
      style={{ backgroundImage: `url(${bg})` }}
      className="relative min-h-screen pt-16 flex items-center justify-center px-4 py-12 bg-cover bg-center bg-no-repeat overflow-hidden"
    >
      {/* Dark overlay com gradiente direcional */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#080810]/85 via-[#100e1c]/80 to-[#080810]/90" />

      {/* Glow vermelho canto superior esquerdo */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px]" />

      {/* Glow vermelho canto inferior direito */}
      <div className="pointer-events-none absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-accent/10 blur-[100px]" />

      {/* Grid sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      {/* Conteúdo */}
      <div className="relative max-w-5xl text-center backdrop-blur-md bg-white/[0.05] border border-white/[0.08] p-8 md:p-12 rounded-2xl shadow-[0_8px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.07)]">

        {/* Badge */}
        <span className="inline-block font-text text-xs font-bold uppercase tracking-[0.3em] mb-6 px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent">
          Guia Definitivo
        </span>

        <h1 className="font-title text-title text-5xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
          Bem-vindo <br className="sm:hidden" />
          ao <span className="text-accent">Trucard</span>
        </h1>

        <p className="font-text text-text/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Aprenda tudo sobre Truco Paulista e Truco Mineiro, descubra os sinais,
          entenda as regras e domine o jogo mais clássico das mesas brasileiras.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#regras"
            className="bg-accent hover:bg-accentSecondary text-white px-8 py-3 rounded-xl font-text font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/30"
          >
            Ver Regras
          </a>

          <a
            href="#paulista"
            className="bg-white/[0.04] border border-white/[0.08] text-title px-8 py-3 rounded-xl font-text font-medium transition-all duration-300 hover:border-accent/50 hover:text-accent hover:bg-accent/10 hover:scale-105"
          >
            Truco Paulista
          </a>

          <a
            href="#mineiro"
            className="bg-white/[0.04] border border-white/[0.08] text-title px-8 py-3 rounded-xl font-text font-medium transition-all duration-300 hover:border-accent/50 hover:text-accent hover:bg-accent/10 hover:scale-105"
          >
            Truco Mineiro
          </a>
        </div>

        {/* Linha decorativa inferior */}
        <div className="mt-10 flex items-center justify-center gap-3 opacity-30">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-accent" />
          <span className="text-accent text-xs">✦</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-accent" />
        </div>

      </div>
    </section>
  );
}