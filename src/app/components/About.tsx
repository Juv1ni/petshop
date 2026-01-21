export function About() {
  return (
    <section id="sobre" className="container mx-auto px-8 py-24">
      <div className="flex items-center justify-between">
        {/* TEXTO */}
        <div className="max-w-xl">
          <h2 className="text-5xl font-extrabold">Sobre nós</h2>
          <p className="mt-6 text-pink-100">
            Nossa missão é proporcionar a você e ao seu pet uma experiência
            única, com fotos de alta qualidade e um serviço personalizado.
          </p>
        </div>

        {/* ESPAÇO RESERVADO */}
        <div className="w-105 h-105"></div>
      </div>
    </section>
  );
}
