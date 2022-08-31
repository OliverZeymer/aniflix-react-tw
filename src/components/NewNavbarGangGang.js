import { NavLink } from "react-router-dom";
import { BsHouseDoor, BsPaintBucket, BsHeadset } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
const NewNavbarGangGang = () => {
  return (
    <nav className="z-40 flex fixed sm:static sm:block bottom-0 w-screen sm:w-full bg-primary-background">
      <div className="wrapper w-10/12 sm:w-4/5 mx-auto py-4 sm:py-8">
        <ul className="flex justify-between sm:gap-12">
          <h1 className="hidden sm:block text-primary-color text-3xl font-semibold">
            Aniflix
          </h1>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "text-primary-color items-center gap-3 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium bg-black rounded-lg"
                : "text-primary-text gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
            }
            to="/"
          >
            <BsHouseDoor className="w-[32px] h-[32px] sm:w-[24px] sm:h-[24px]" />{" "}
            <p className="hidden sm:block">Home</p>
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "text-primary-color gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
                : "text-primary-text gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
            }
            to="/themes"
          >
            <BsPaintBucket className="w-[32px] h-[32px] sm:w-[24px] sm:h-[24px]" />
            <p className="hidden sm:block">Themes</p>
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "text-primary-color gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
                : "text-primary-text gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
            }
            to="/anime"
          >
            <FaThList className="w-[32px] h-[32px] sm:w-[24px] sm:h-[24px]" />
            <p className="hidden sm:block">Anime</p>
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "text-primary-color gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
                : "text-primary-text gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
            }
            to="/contact"
          >
            <BsHeadset className="w-[32px] h-[32px] sm:w-[24px] sm:h-[24px]" />
            <p className="hidden sm:block">Contact us</p>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NewNavbarGangGang;
