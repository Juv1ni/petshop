import { ContactButton } from "./contact_button";

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 grid grid-cols-[auto_1fr_auto] items-center">
        {/* Logo - esquerda */}
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-pink-400">
            Luz, Câmera, Pata
          </h1>
          <h2 className="text-sm font-bold text-gray-700 italic">
            STUDIO DO SEU PET
          </h2>
        </div>

        {/* Menu - meio */}
        <nav className="flex justify-center">
          <ul className="flex items-center space-x-10">
            {["Início", "Serviços", "Sobre"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="
                    relative
                    font-bold
                    text-gray-500
                    hover:text-pink-400
                    after:content-['']
                    after:absolute
                    after:left-1/2
                    after:-translate-x-1/2
                    after:-bottom-1
                    after:h-0.5
                    after:w-0
                    after:bg-pink-400
                    after:transition-[width]
                    after:ease-out
                    after:duration-300
                    hover:after:w-full
                  "
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contato - direita*/}
        <ContactButton label="Agendar" />
      </div>
    </header>
  );
}
