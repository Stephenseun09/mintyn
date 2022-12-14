import { Link } from "react-router-dom";

const Dropdown = ({
  menuLists = ["menu 1", "menu 2"],
}: {
  menuLists?: string[];
}) => {
  return (
    <div
      className="border-secondary-gray invisible absolute z-50 mt-4 min-w-max origin-top-right list-none rounded border bg-primary py-4 text-base shadow-lg backdrop-blur-lg transition-all ease-in
    peer-focus:visible"
    >
      <div aria-labelledby="" role="menu">
        <ul className=" text-sm">
          {menuLists.map((link, index) => (
            <li key={index} className="">
              <Link
                to="#"
                className="block px-4  py-2 pr-8 text-sm text-secondary-dark  hover:bg-[#F4F4F4]"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
