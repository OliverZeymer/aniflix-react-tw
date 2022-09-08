import { NavLink } from "react-router-dom";
import { BsHouseDoor, BsPaintBucket, BsHeadset } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const NewNavbarGangGang = () => {
  const navigate = useNavigate();
  return (
    <nav className="z-40 flex fixed select-none sm:static sm:block bottom-0 w-screen sm:w-full bg-[#2a2a2e] sm:bg-primary-background">
      <div className="wrapper w-10/12 sm:w-[85%] mx-auto py-4 sm:py-8">
        <ul className="flex justify-between">
          <h1
            className="hidden sm:block mt-auto text-primary-text text-3xl font-semibold cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Aniflix
          </h1>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "relative gap-2 hover:scale-110 text-primary-text p-2 sm:px-5 sm:py-2  rounded-full transition-all text-[20px] scale-110 flex font-base items-center navLink activeNavLink"
                : "relative text-primary-text p-2 sm:px-5 sm:py-2 rounded-full gap-2 hover:scale-110 transition-all text-[20px] flex font-base items-center navLink"
            }
            to="/"
          >
            <BsHouseDoor className="w-[32px] h-[32px] sm:w-[24px] sm:h-[24px]" />
            <p className="hidden sm:block">Home</p>
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "relative gap-2 hover:scale-110 text-primary-text p-2 sm:px-5 sm:py-2 rounded-full transition-all text-[20px] scale-110 flex font-base items-center navLink activeNavLink"
                : "relative text-primary-text p-2 sm:px-5 sm:py-2 rounded-full gap-2 hover:scale-110 transition-all text-[20px] flex font-base items-center navLink"
            }
            to="/themes"
          >
            <BsPaintBucket className="w-[32px] h-[32px] sm:w-[24px] sm:h-[24px]" />
            <p className="hidden sm:block">Themes</p>
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "relative gap-2 hover:scale-110 text-primary-text p-2 sm:px-5 sm:py-2 rounded-full transition-all text-[20px] scale-110 flex font-base items-center navLink activeNavLink"
                : "relative text-primary-text p-2 sm:px-5 sm:py-2 rounded-full gap-2 hover:scale-110 transition-all text-[20px] flex font-base items-center navLink"
            }
            to="/anime"
          >
            <FaThList className="w-[32px] h-[32px] sm:w-[24px] sm:h-[24px]" />
            <p className="hidden sm:block">Anime</p>
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "relative gap-2 hover:scale-110 text-primary-text p-2 sm:px-5 sm:py-2 rounded-full transition-all text-[20px] scale-110 flex font-base items-center navLink activeNavLink"
                : "relative text-primary-text p-2 sm:px-5 sm:py-2 rounded-full gap-2 hover:scale-110 transition-all text-[20px] flex font-base items-center navLink"
            }
            to="/contact"
          >
            <BsHeadset className="w-[32px] h-[32px] sm:w-[25px] sm:h-[25px]" />
            <p className="hidden sm:block">Contact us</p>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NewNavbarGangGang;
