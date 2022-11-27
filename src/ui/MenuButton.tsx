import { AnimatePresence, motion } from "framer-motion";
import { MenuIcon, CrossIcon } from "./custom-icons";

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

const variants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: 20, opacity: 0 },
};

const MenuButton = ({ isOpen, onClick, ...props }: Props) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {!isOpen ? (
        // {/*------------------*/}
        // {/*---- menu icon----*/}
        <motion.button
          className=""
          aria-label="open menu"
          variants={variants}
          key="open"
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.05 }}
          onClick={onClick}
        >
          <MenuIcon className="w-5 h-5" />
        </motion.button>
      ) : (
        // {/*-------------------*/}
        // {/*---- close icon----*/}
        <motion.button
          aria-label="close menu"
          variants={variants}
          key="close"
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.05 }}
          onClick={onClick}
          className=""
        >
          <CrossIcon className="w-3 h-3" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default MenuButton;
