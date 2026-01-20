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
        <ul className="menu menu-horizontal gap-6 font-semibold">
          <li>
            <a>Início</a>
          </li>
          <li>
            <a>Serviços</a>
          </li>
          <li>
            <a>Sobre</a>
          </li>
          <li>
            <a>Contato</a>
          </li>
        </ul>
      </div>

      {/* BOTÃO */}
      <div className="navbar-end">
        <button className="btn text-black rounded-full font-bold bg-pink-400 hover:bg-pink-500 hover:ease-in-out duration-300">
          Agendar Ensaio
        </button>
      </div>
    </header>
  );
}
