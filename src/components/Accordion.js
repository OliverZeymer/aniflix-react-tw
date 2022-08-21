import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
const Accordion = ({ heading, href, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <li className="accordion-item">
      <motion.div
        initial={false}
        className="flex items-center gap-1"
        onClick={() => setIsActive(!isActive)}
      >
        <h3>{heading}</h3>
        <BsChevronDown
          className={
            isActive ? "rotate-180 duration-500" : "rotate-0 duration-500"
          }
        />
      </motion.div>
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="accordion-content"
          >
            <>
              <Link
                to={{
                  pathname: href,
                }}
              >
                {content}
              </Link>
            </>
          </motion.section>
        )}
      </AnimatePresence>
    </li>
  );
};

export default Accordion;
