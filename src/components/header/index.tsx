import MenuButton from "@/ui/MenuButton";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import Notification from "./Notification";
import Search from "./Search";

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

const links = [
  {
    name: "Support",
    link: "#",
  },
  {
    name: "FAQ",
    link: "#",
  },
];

const Header = ({ isOpen, onClick }: Props) => {
  return (
    <header className=" fixed top-0 right-0 left-0 py-5 shadow-lg bg-primary z-20 ">
      <nav className="px-4 md:px-10 md:!pl-0 font-primary  flex items-center justify-between gap-6">
        {/* header and menu button */}
        <div className="md:w-64 md:pl-6 flex items-center ">
          <div className="relative z-50 md:hidden  w-[27px] h-fit grid place-content-center">
            <MenuButton isOpen={isOpen} onClick={onClick} />
          </div>
          <Link
            to="/"
            className="font-bold md:font-extrabold text-primary-blue text-xl "
          >
            TransMonitor
          </Link>
        </div>

        <div className="flex justify-end  md:justify-between items-center text-secondary-dark grow font-segoe">
          {/* -------------- */}
          {/* ----search---- */}
          <Search className="bg-slate-300 px-3 py-3 rounded-lg" />

          {/* ------------- */}
          {/* ----links---- */}
          <div className=" space-x-2 md:space-x-3 lg:space-x-6  flex items-center text-[#647787]">
            <div className="hidden md:flex items-center space-x-4">
              {links.map((link, index) => (
                <Link key={index} to={link.link} className="text-sm">
                  {link.name}
                </Link>
              ))}
            </div>
            {/* -------------------- */}
            {/* ----Notification---- */}
            <Notification />

            {/* -------------- */}
            {/* ----avatar---- */}
            <div className="space-x-2 lg:space-x-3  flex items-center">
              <h6 className=" hidden md:block text-end text-sm leading-none">
                <span className=" text-xs">Hello</span>
                <br />
                Oluwaleke Ojo
              </h6>
              <Avatar />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
