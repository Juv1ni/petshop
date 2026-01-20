export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-pink-400 to-pink-500 text-white">
      {/* MARCA D'ÁGUA */}
      <div className="absolute inset-0 flex justify-center items-center opacity-10 pointer-events-none">
        <img src="/images/paw.svg" alt="Patinha" className="w-150" />
      </div>

      <div className="container mx-auto px-8 py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* TEXTO */}
          <div className="max-w-xl">
            <span className="uppercase tracking-widest text-sm text-pink-100">
              Studio Fotográfico Pet
            </span>

            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mt-3">
              Fotos que capturam
              <span className="block">o amor do seu pet</span>
            </h2>

            <p className="text-lg text-pink-100 mt-6">
              Ensaios profissionais, cheios de carinho, personalidade e aquele
              olhar que só o seu pet tem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="btn bg-white text-pink-500 font-bold rounded-full px-8 hover:bg-pink-100">
                Agendar Ensaio
              </button>

              <button className="btn btn-outline text-white border-white rounded-full px-8 hover:bg-white hover:text-pink-500">
                Ver Portfólio
              </button>
            </div>
          </div>

          {/* IMAGEM */}
          <div className="relative">
            <img
              src="/images/dog.png"
              alt="Dog"
              className="w-120 drop-shadow-2xl animate-float rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
