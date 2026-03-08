import bg from "../assets/images/Baralho_Bg.png";

export default function Home() {
  return (
    <section
      id="home"
      style={{ backgroundImage: `url(${bg})` }}
      className="min-h-screen pt-16 flex items-center justify-center px-4 py-12 bg-cover bg-center bg-no-repeat"
    >
    <div className="max-w-5xl text-center backdrop-blur-md bg-background/70 p-6 md:p-10 rounded-2xl shadow-2xl shadow-black/40 border border-border/50">

        <h1 className="font-title text-title text-5xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
          Bem-vindo <br className="sm:hidden" />
          ao <span className="text-accent">Trucard</span>
        </h1>

        <p className="font-text text-text text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10">
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
            className="bg-card border border-border text-title px-8 py-3 rounded-xl font-text font-medium transition-all duration-300 hover:border-accent hover:text-accent hover:scale-105 hover:shadow-md"
          >
            Truco Paulista
          </a>

          <a
            href="#mineiro"
            className="bg-card border border-border text-title px-8 py-3 rounded-xl font-text font-medium transition-all duration-300 hover:border-accent hover:text-accent hover:scale-105 hover:shadow-md"
          >
            Truco Mineiro
          </a>
        </div>

      </div>
    </section>
  );
}