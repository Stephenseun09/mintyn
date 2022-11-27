import { NotificationIcon } from "@/ui/custom-icons";
import Dropdown from "./Dropdown";

const Notification = () => {
  return (
    <div className="relative">
      <button
        type="button"
        className="peer p-2 text-[#130F26] rounded-full  relative"
      >
        <span className="sr-only">Notifications</span>
        <span className="absolute leading-none w-[14px] h-[14px] bg-primary-blue rounded-full text-white text-[10px] inline-flex items-center justify-center">
          8
        </span>
        <NotificationIcon className="w-5 h-5" />
      </button>
      <Dropdown />
    </div>
  );
};

export default Notification;
