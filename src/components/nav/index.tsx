export default function Nav() {
  return (
    <nav className="container shadow-sm w-full py-4 px-8 grid grid-cols-1 md:grid-cols-[25%_50%_25%] font-medium bg-white">
      <h1 className="hidden md:block text-2xl font-bold">Mahesh Cheema</h1>
      <ul className="flex items-center w-full justify-center gap-6 md:gap-12">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="hidden md:flex justify-end">
        <button>Menu</button>
      </div>
    </nav>
  );
}
