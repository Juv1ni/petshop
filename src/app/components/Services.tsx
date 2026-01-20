const services = [
  {
    title: "Ensaio Pet",
    description: "Sessões individuais ou em família",
  },
  {
    title: "Aniversário Pet",
    description: "Comemore com fotos incríveis",
  },
  {
    title: "Edição Profissional",
    description: "Tratamento e acabamento premium",
  },
];

export function Services() {
  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-8">
        <h3 className="text-4xl font-bold text-center mb-12">
          Nossos Serviços
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h4 className="card-title text-pink-400">{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
