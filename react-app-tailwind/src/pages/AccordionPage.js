import React from "react";
import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const AccordionData = [
    {
      id: 1,
      title: "Name of country",
      content:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, repudiandae fugit, deleniti obcaecati quibusdam laborum esse cum ducimu",
    },
    {
      id: 2,
      title: "Name of Planet",
      content:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, repudiandae fugit, deleniti obcaecati quibusdam laborum esse cum ducimu",
    },
    {
      id: 3,
      title: "Name of City",
      content:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, repudiandae fugit, deleniti obcaecati quibusdam laborum esse cum ducimu",
    },
  ];
  return <Accordion data={AccordionData} />;
};

export default AccordionPage;
