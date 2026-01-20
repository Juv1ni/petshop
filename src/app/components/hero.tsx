export function Hero() {
  return (
    <section className="bg-pink-400">
      <div className="container mx-auto px-4 flex items-center justify-center">
        {/* TEXTO */}
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-white mb-4 mr-50 text-center">
            Bem-Vindo ao<br></br>Studio Do Seu Pet!
          </h2>
        </div>

        {/* IMAGEM */}
        <div className="mt-10 md:mt-0">
          <img src="/images/dog.png" alt="Dog" className="w-80 h-auto pr-10" />
        </div>
      </div>
    </section>
  );
}
