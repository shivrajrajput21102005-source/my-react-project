import { FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
const Dashboard = () => {
  // const navigate = useNavigate();
  // navigate("/d/home");
  return (
    <div className="w-full">
      <div className="bg-blue-100 fixed top-0 left-0  w-56 h-screen ">
        <div className="w-full font-bold text-sm px-4 py-4">🦢 duopo</div>
        <br />
        <nav className="">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-400 font-bold block px-6 py-4 rounded-lg"
                : "hover:bg-gray-200 font-bold block px-6 py-4 rounded-lg "
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/members"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-400 font-bold block px-6 py-4 rounded-lg"
                : "hover:bg-gray-200 font-bold block px-6 py-4 rounded-lg "
            }
          >
            Members
          </NavLink>
          <NavLink
            to="/plans"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-400 font-bold block px-6 py-4 rounded-lg"
                : "hover:bg-gray-200 font-bold block px-6 py-4 rounded-lg "
            }
          >
            Plans
          </NavLink>
          <NavLink
            to="/payments"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-400 font-bold block px-6 py-4 rounded-lg"
                : "hover:bg-gray-200 font-bold block px-6 py-4 rounded-lg "
            }
          >
            Payments
          </NavLink>
          <NavLink
            to="/Expiries"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-400 font-bold block px-6 py-4 rounded-lg"
                : "hover:bg-gray-200 font-bold block px-6 py-4 rounded-lg "
            }
          >
            Expiry
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-400 font-bold block px-6 py-4 rounded-lg"
                : "hover:bg-gray-200 font-bold block px-6 py-4 rounded-lg "
            }
          >
            <FaUser />
          </NavLink>
        </nav>
      </div>
      <div className="ml-56 ">
        {/* <div className="w-full bg-purple-300">lala</div> */}
        <Outlet />
      </div>
    </div>
  );
};
export default Dashboard;
