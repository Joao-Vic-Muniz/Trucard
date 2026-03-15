import { motion } from "framer-motion";

type Signal = {
  name: string;
  description: string;
  type: "blink" | "eyebrow" | "tongueSide" | "tongueOut" | "nose";
};

const signals: Signal[] = [
  {
    name: "Zap (4 de Paus)",
    description: "piscar olho.",
    type: "blink"
  },
  {
    name: "Copas (7 de Copas)",
    description: "levantar sobrancelha.",
    type: "eyebrow"
  },
  {
    name: "Espadilha (Ás de Espadas)",
    description: "língua dentro da boca pro lado.",
    type: "tongueSide"
  },
  {
    name: "Ouros (7 de Ouros)",
    description: "língua pra fora.",
    type: "tongueOut"
  },
  {
    name: "Três",
    description: "mexer nariz.",
    type: "nose"
  }
];

function Face({ type }: { type: Signal["type"] }) {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="42" fill="#F2C79B" />

      {type === "eyebrow" ? (
        <>
          <motion.path
            d="M28 30 Q38 24 48 30"
            stroke="#222"
            strokeWidth="3"
            fill="none"
            animate={{ y: [-3, -8, -3] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          <motion.path
            d="M52 30 Q62 24 72 30"
            stroke="#222"
            strokeWidth="3"
            fill="none"
            animate={{ y: [-3, -8, -3] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
        </>
      ) : (
        <>
          <path d="M28 30 Q38 26 48 30" stroke="#222" strokeWidth="3" fill="none"/>
          <path d="M52 30 Q62 26 72 30" stroke="#222" strokeWidth="3" fill="none"/>
        </>
      )}

      {type === "blink" ? (
        <>
          <motion.line
            x1="35"
            y1="45"
            x2="45"
            y2="45"
            stroke="#222"
            strokeWidth="3"
            animate={{ scaleY: [1, 0.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <circle cx="65" cy="45" r="4" fill="#222" />
        </>
      ) : (
        <>
          <circle cx="35" cy="45" r="4" fill="#222" />
          <circle cx="65" cy="45" r="4" fill="#222" />
        </>
      )}

      <path d="M50 45 L48 55 L52 55 Z" fill="#d9a87c"/>

      {type === "nose" ? (
        <>
          <motion.ellipse
            cx="46"
            cy="56"
            rx="2"
            ry="1"
            fill="#222"
            animate={{ rx: [2, 3, 2] }}
            transition={{ duration: 0.6, repeat: Infinity }}
          />
          <motion.ellipse
            cx="54"
            cy="56"
            rx="2"
            ry="1"
            fill="#222"
            animate={{ rx: [2, 3, 2] }}
            transition={{ duration: 0.6, repeat: Infinity }}
          />
        </>
      ) : (
        <>
          <ellipse cx="46" cy="56" rx="2" ry="1" fill="#222"/>
          <ellipse cx="54" cy="56" rx="2" ry="1" fill="#222"/>
        </>
      )}

      {(type === "tongueOut" || type === "tongueSide") ? (
        <ellipse cx="50" cy="70" rx="12" ry="8" fill="#2b0d0d"/>
      ) : (
        <path d="M38 70 Q50 78 62 70" stroke="#222" strokeWidth="3" fill="none"/>
      )}

      {type === "tongueOut" && (
        <motion.ellipse
          cx="50"
          cy="76"
          rx="6"
          ry="10"
          fill="#ff4d6d"
          animate={{ cy: [76, 84, 76] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}

      {type === "tongueSide" && (
        <motion.path
          d="M38 70 Q50 78 62 70"
          stroke="#222"
          strokeWidth="3"
          fill="none"
          animate={{
            d: [
              "M38 70 Q50 78 62 70",
              "M36 70 Q50 78 64 70",
              "M38 70 Q50 78 62 70"
            ]
          }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}
    </svg>
  );
}

export default function Signals() {
  return (
    <section
      id="sinais"
      className="relative min-h-screen mt-16 px-4 py-16 bg-[#080810] overflow-hidden"
    >
      {/* Glow de fundo */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-accent/25 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 -right-24 w-96 h-96 bg-accent/15 blur-[100px] rounded-full" />

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] mb-4 px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent">
          Comunicação
        </span>

        <h2 className="font-title text-4xl sm:text-5xl text-title mb-4">
          Sinais do Truco
        </h2>

        <p className="text-text/70 max-w-xl mx-auto">
          Durante a partida, parceiros usam sinais discretos para indicar suas
          cartas sem que os adversários percebam.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {signals.map((signal, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            transition={{ delay: index * 0.15 }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl p-6 text-center shadow-lg"
          >
            <div className="flex justify-center mb-4">
              <Face type={signal.type} />
            </div>

            <h3 className="text-title font-semibold text-lg mb-1">
              {signal.name}
            </h3>

            <p className="text-text/70 text-sm">
              {signal.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Texto final */}
      <p className="max-w-xl mx-auto text-center text-text/60 text-sm mt-12">
        Estes são os sinais mais usados no Truco Paulista, mas muitas duplas
        criam seus próprios sinais para se comunicar durante o jogo.
      </p>
    </section>
  );
}