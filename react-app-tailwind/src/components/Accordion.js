import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const renderItems = data.map((item, ind) => {
    const isExpanded = ind === expandedIndex;

    const handleClick = (nextIndex) => {
      expandedIndex === nextIndex
        ? setExpandedIndex(-1)
        : setExpandedIndex(nextIndex);
    };

    const icon = (
      <span className="ml-2 text-xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );
    return (
      <div key={item.key}>
        <div
          className="flex items-center justify-between p-3 bg-gray-50 border-b"
          onClick={() => {
            handleClick(ind);
          }}
        >
          {item.title} {icon}
        </div>
        {isExpanded && (
          <div className="p-3 border-b border-w-20">{item.content}</div>
        )}
      </div>
    );
  });

  return <div>{renderItems}</div>;
};

export default Accordion;
