export default function Header({ onClick }) {
  return (
    <header className="bg-[#eee] h-[50px] flex justify-between items-center text-slate-700 pr-3 gap-2">
      <button
        onClick={onClick}
        className="bg-[#506efa] px-24 h-10 font-bold text-white"
      >
        RUN
      </button>
      <a
        onClick={() => window.location.reload()}
        className="text-[#506efa] md:text-xl font-semibold text-base p-1"
      >
        Wikidata Query AI
      </a>
    </header>
  );
}
