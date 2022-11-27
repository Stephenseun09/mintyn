import { CarretDownIcon } from "@/ui/custom-icons";
import avatar from "../../assets/avatarr.png";
import Dropdown from "./Dropdown";

const Avatar = () => {
  return (
    <div className="relative">
      <button
        type="button"
        className="peer flex items-center text-sm"
        aria-expanded="false"
      >
        <span className="sr-only">Open user menu</span>
        <img
          width={40}
          height={40}
          className="rounded-full bg-gray-300"
          src={avatar}
          alt="user photo"
        />
        {/* <CarretDownIcon className="w-3 h-3 ml-1" /> */}
      </button>
      {/* <Dropdown /> */}
    </div>
  );
};

export default Avatar;
