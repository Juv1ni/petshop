import Link from "next/link";

export function Header() {
  return (
    <header className="navbar bg-base-100 shadow-md px-8">
      {/* LOGO */}
      <div className="navbar-start">
        <div className="flex items-center flex-col">
          <h1 className="text-2xl font-bold text-pink-400">
            Luz, Câmera, Pata
          </h1>
          <p className="text-sm italic text-gray-500">Studio do seu Pet</p>
        </div>
      </div>

      {/* MENU */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-6">
          {["Início", "Serviços", "Sobre", "Contato"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="nav-link">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* BOTÃO */}
      <div className="navbar-end">
        <button className="btn text-black rounded-full font-bold bg-gray-100 hover:bg-gray-300 hover:ease-in-out duration-300">
          <Link
            href="https://wa.me/5585996587275?text=Olá!%20Quero%20agendar%20um%20ensaio%20pet"
            target="_blank"
            aria-label="WhatsApp"
          >
            Agendar Ensaio 🐾
          </Link>
        </button>
      </div>
    </header>
  );
}
