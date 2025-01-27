import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"; // استيراد أيقونات السهم
import "../style/components/accourdion.css"; // تأكد من إضافة مسار CSS الصحيح

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    {
      title: "How can I cancel my order?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp orincid idunt ut labore et dolore magna aliqua. Venenatis tellus in metus vulp utate eu sceler isque felis. Vel pretium.",
    },
    {
      title: "Why is my registration delayed?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp orincid idunt ut labore et dolore magna aliqua. Venenatis tellus in metus vulp utate eu sceler isque felis. Vel pretium.",
    },
    {
      title: "What do I need to buy products?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp orincid idunt ut labore et dolore magna aliqua. Venenatis tellus in metus vulp utate eu sceler isque felis. Vel pretium..",
    },
    {
      title: "How can I track an order?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp orincid idunt ut labore et dolore magna aliqua. Venenatis tellus in metus vulp utate eu sceler isque felis. Vel pretium.",
    },
    {
      title: "How can I get money back?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp orincid idunt ut labore et dolore magna aliqua. Venenatis tellus in metus vulp utate eu sceler isque felis. Vel pretium.",
    },
  ];

  return (
    <div className="accordion">
      {sections.map((section, index) => (
        <div key={index}>
          <h2 onClick={() => toggleSection(index)} className="accordion-title">
            {section.title}
            {activeIndex === index ? (
              <AiOutlineUp className="arrow" />
            ) : (
              <AiOutlineDown className="arrow" />
            )}
          </h2>
          <div
            className={`accordion-content ${
              activeIndex === index ? "active" : ""
            }`}
          >
            {section.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
