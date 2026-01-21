"use client";

const services = [
  {
    title: "Ensaio Pet",
    description: "Sessões individuais ou em família",
    images: ["/images/dog.png", "/images/dog2.png", "/images/dog.png"],
  },
  {
    title: "Aniversário Pet",
    description: "Comemore com fotos incríveis",
    images: ["/images/dog2.png", "/images/dog.png", "/images/dog2.png"],
  },
  {
    title: "Edição Profissional",
    description: "Tratamento e acabamento premium",
    images: ["/images/dog.png", "/images/dog2.png", "/images/dog.png"],
  },
];

export function Services() {
  const handleNavClick = (e: any) => {
    e.preventDefault();
    const carousel = e.currentTarget.closest(".carousel");
    if (!carousel) return;

    const targetId = e.currentTarget.getAttribute("href")!.substring(1);
    const targetSlide = document.getElementById(targetId);

    if (targetSlide) {
      carousel.scrollTo({
        left: targetSlide.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="serviços" className="py-20 bg-base-200">
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
                <div className="carousel w-full">
                  {service.images.map((image, index) => {
                    const slideId = `slide-${service.title.replace(
                      /\s+/g,
                      "-",
                    )}-${index}`;
                    const prevSlideId = `slide-${service.title.replace(
                      /\s+/g,
                      "-",
                    )}-${index === 0 ? service.images.length - 1 : index - 1}`;
                    const nextSlideId = `slide-${service.title.replace(
                      /\s+/g,
                      "-",
                    )}-${index === service.images.length - 1 ? 0 : index + 1}`;

                    return (
                      <div
                        key={index}
                        id={slideId}
                        className="carousel-item relative w-full"
                      >
                        <img src={image} className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                          <a
                            href={`#${prevSlideId}`}
                            className="btn btn-circle"
                            onClick={handleNavClick}
                          >
                            ❮
                          </a>
                          <a
                            href={`#${nextSlideId}`}
                            className="btn btn-circle"
                            onClick={handleNavClick}
                          >
                            ❯
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
