"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";

export default function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="border-b border-dashed border-gray-400">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-4 focus:outline-none"
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        {/* Plus icon rotates */}
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.28 }}
          className="text-2xl"
        >
          <FiPlus />
        </motion.div>
      </button>

      {/* Content with maxHeight + opacity animation */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{
              opacity: 1,
              maxHeight: contentRef.current
                ? contentRef.current.scrollHeight
                : 300,
            }}
            exit={{ opacity: 0, maxHeight: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div ref={contentRef} className="p-4 text-gray-700">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
