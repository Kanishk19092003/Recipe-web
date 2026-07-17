import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition-all duration-300 ${
      isActive
        ? "bg-red-500 text-white shadow-lg shadow-red-500/40 scale-105"
        : "text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105"
    }`;

  return (
    <nav className="flex items-center justify-center gap-6 p-4 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 shadow-2xl border border-gray-700">
      <NavLink className={activeClass} to="/">
        Home
      </NavLink>

      <NavLink className={activeClass} to="/recipes">
        Recipes
      </NavLink>

      <NavLink className={activeClass} to="/about">
        About
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${
            isActive
              ? "bg-red-500 text-white shadow-lg shadow-red-500/50 scale-105"
              : "bg-gray-700 text-white shadow-md hover:bg-red-500 hover:shadow-xl hover:shadow-red-500/40 hover:-translate-y-1"
          }`
        }
        to="/create-recipe"
      >
        + Create
      </NavLink>
    </nav>
  );
};

export default Navbar;