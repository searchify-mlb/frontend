import { useNavigate } from "react-router";
import BaseballIcon from "../assets/baseball.svg";
import LogoutIcon from "../assets/logout.svg";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const Navbar = () => {
  const navigate = useNavigate();
  const [, setToken] = useLocalStorage("token", "");

  const handleLogout = () => {
    setToken("");
    navigate("/login", { replace: true });
  };

  return (
    <nav className="flex flex-row justify-between w-full px-8 py-4 bg-white shadow-md">
      <div className="flex flex-row space-x-4">
        <img src={BaseballIcon} alt="baseball icon" width={32} height={32} />
        <h1 className="flex items-center text-2xl font-bold text-blue-900">
          MLB Searchify
        </h1>
      </div>
      <div className="flex flex-row space-x-4">
        <button
          onClick={handleLogout}
          className="transition-transform cursor-pointer hover:scale-110"
        >
          <img src={LogoutIcon} alt="logout icon" width={32} height={32} />
        </button>
      </div>
    </nav>
  );
};
