import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";
const Accordion = ({ heading, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <li className="border-b-2 border-primary-color cursor-pointer pt-8 pb-4">
      <motion.div onClick={() => setIsActive(!isActive)} initial={false} className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{heading}</h3>
        <BsChevronDown className={isActive ? "rotate-180 duration-500" : "rotate-0 duration-500"} />
      </motion.div>
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.article
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{
              duration: 0.4,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
            className="accordion-contentflex flex-col justify-between"
          >
            {content.map((item) => (
              <p key={item} className="text-lg mt-4">
                {item}
              </p>
            ))}
          </motion.article>
        )}
      </AnimatePresence>
    </li>
  );
};

export default Accordion;
