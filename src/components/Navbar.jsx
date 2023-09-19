import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center border-b border-white/20 py-6 px-[7.5%] pt-10">
        <h1 className="font-clashDisplay font-bold text-4xl">
          get<span className="text-fuchsia-500">linked</span>
        </h1>
        <div className="font-montserrat space-x-8">
          <a href="">Timeline</a>
          <a href="">Overview</a>
          <a href="">FAQs</a>
          <a href="" className="pr-12">Contact</a>
          <Link to="/register" className="bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded px-5 py-3">Register</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
