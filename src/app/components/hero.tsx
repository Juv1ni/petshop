export function Hero() {
  return (
    <section
      id="início"
      className="relative overflow-hidden bg-linear-to-br from-pink-400 to-pink-500 text-white"
    >
      {/* MARCA D'ÁGUA */}
      <div className="absolute inset-0 flex justify-center items-center opacity-10 pointer-events-none">
        <img src="/images/paw.svg" className="w-150 animate-pulse" />
      </div>

      <div className="container mx-auto px-8 py-24 relative z-10">
        <div className="flex items-center justify-between">
          {/* TEXTO */}
          <div className="max-w-xl">
            <h2 className="text-5xl font-extrabold">
              Fotos que capturam o amor do seu pet 🐾
            </h2>
            <p className="mt-6 text-pink-100">
              Ensaios profissionais, cheios de carinho e personalidade.
            </p>
          </div>

          {/* ESPAÇO RESERVADO */}
          <div className="w-105 h-105"></div>
        </div>
      </div>

      {/* CACHORRO */}
      <img
        src="/images/dog2.png"
        alt="Dog"
        className="
          absolute
          right-0
          bottom-0
          w-230
          drop-shadow-2xl
          pointer-events-none
        "
      />
    </section>
  );
}
