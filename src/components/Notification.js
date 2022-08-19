import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { RiCloseCircleLine } from "react-icons/ri";
const Notification = ({ show, setShow }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 1 }}
          exit={{ x: 1000, opacity: 0 }}
          className="fixed top-12 right-24"
        >
          <div className="noti-progress">
            <div className="noti-color"></div>
          </div>
          <div className="flex select-none">
            <div className="m-auto">
              <div className="bg-white rounded-lg border-gray-300 border p-3 shadow-lg">
                <div className="flex flex-row justify-between">
                  <div className="px-2">
                    <BsCheckCircle className="text-green-500" size="30" />
                  </div>

                  <div className="ml-2 mr-6">
                    <span className="font-semibold text-green-500">
                      You're all set!
                    </span>
                    <span className="block text-gray-500">
                      New theme is now enabled.
                    </span>
                  </div>
                  <button onClick={() => setShow(false)}>
                    <RiCloseCircleLine
                      className="text-red-500 absolute right-1 top-1"
                      size="18"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
