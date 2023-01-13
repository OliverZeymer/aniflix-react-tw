import { motion } from "framer-motion";

const ModalButton = ({
  show,
  setShow,
  btnValue,
  color,
  setModal,
  preview,
  text,
  width,
  mx,
  mt,
}) => {
  return (
    <>
      <motion.button
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.9 }}
        className={`button w-fit bg-${color} ${width} mx-${mx} mt-${mt} border-${color} hover:text-${text} `}
        onClick={function () {
          setShow(!show);
          if (preview) {
            setModal(preview);
          }
        }}
      >
        {btnValue}
      </motion.button>
    </>
  );
};

export default ModalButton;
