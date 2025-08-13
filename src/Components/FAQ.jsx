'use client'

"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import {
  IoIosArrowDropupCircle,
  IoIosArrowDropdownCircle,
} from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const list = [
    {
      title: "What software development services does your company offer?",
      des:
        "We offer full-cycle software development services including web, mobile, and custom enterprise solutions tailored to your needs.",
      iconClosed: <IoIosArrowDropdownCircle  />,
      iconOpen: <IoIosArrowDropupCircle />,
    },
    {
      title: "What industries do you specialize in?",
      des: `We specialize in healthcare, finance, education, and e-commerce industries, delivering domain-specific expertise.`,
      iconClosed: <IoIosArrowDropdownCircle />,
      iconOpen: <IoIosArrowDropupCircle />,
    },
    {
      title: "What sets your company apart from the competition?",
      des:
        "Our commitment to quality, agile methodology, and customer-centric approach sets us apart.",
      iconClosed: <IoIosArrowDropdownCircle />,
      iconOpen: <IoIosArrowDropupCircle />,
    },
    {
      title: "Is my project idea and information kept confidential?",
      des:
        "Absolutely. We sign NDAs and ensure full confidentiality for all client information and project details.",
      iconClosed: <IoIosArrowDropdownCircle />,
      iconOpen: <IoIosArrowDropupCircle />,
    },
  ];

  // Track which FAQ item is open (index)
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative  max-w-7xl mx-auto p-4 sm:p-6 md:p-10 overflow-hidden font-bricolage"
      aria-label="Frequently Asked Questions"
    >
      <div className="text-center space-y-6">
        <h1
          className="text-xl md:text-4xl font-bold items-center justify-center
           gap-2 text-balance tracking-tighter leading-normal cursor-pointer"
          tabIndex={0}
        >
          <span className="text-gray-800">Comprehensive Answers to the Most</span>{" "}
          <br />
          <Image
            src="/images/star.png"
            alt="Star Icon"
            width={45}
            height={45}
            className="hidden md:inline-block mr-3 animate-pulse"
          />
          <span className="text-gray-800">Common Questions</span>{" "}
          <span className="text-[#A5A5A5]">About Our</span> <br />
          <span className="text-[#A5A5A5]">Services</span>{" "}
          and How We{" "}
          <span className="text-[#A5A5A5]">Work</span>
          <Image
            src="/images/upaarrow.png"
            alt="uparrow"
            width={40}
            height={40}
            className="inline-block ml-5 hover:animate-ping duration-200"
          />
        </h1>

        {/* heading */}
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <h1 className="text-4xl md:text-6xl text-[#0C0C0C] font-semibold">FAQ</h1>
          </div>

          <div className="flex gap-3 items-center">
            <button className="font-outfit text-sm">All Submit</button>
            <div className="flex items-center justify-center">
              <FaRegArrowAltCircleRight className="text-white size-6 bg-gray-500 rounded-full" />
            </div>
          </div>
        </div>

        <div className="border-b border-dashed border-[#A5A5A5] w-full h-px"></div>

        {/* FAQ List */}
        <div className="mt-20 space-y-5">
          {list.map(({ title, des, iconClosed, iconOpen }, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-dashed border-gray-400 w-full py-4 last:border-none"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="flex justify-between items-center w-full"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                  id={`faq-header-${index}`}
                  type="button"
                >
                  <h2 className="text-xl font-semibold text-gray-800 text-left">
                    {title}
                  </h2>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.28 }}
                    className="flex items-center justify-center p-3  w-10 h-10"
                  >
                    {React.cloneElement(isOpen ? iconOpen : iconClosed, {
                      className: "text-black w-5 h-5",
                      "aria-hidden": true,
                    })}
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      id={`faq-content-${index}`}
                      role="region"
                      aria-labelledby={`faq-header-${index}`}
                      initial={{ opacity: 0, maxHeight: 0 }}
                      animate={{
                        opacity: 1,
                        maxHeight: contentRefs.current[index]
                          ? contentRefs.current[index].scrollHeight
                          : 300,
                      }}
                      exit={{ opacity: 0, maxHeight: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                      className="text-gray-600 leading-relaxed mt-3"
                      ref={(el) => (contentRefs.current[index] = el)}
                    >
                      <p>{des}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
