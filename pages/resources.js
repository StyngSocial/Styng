import React from "react";
import AccordionItem from "../components/AccordionItem/";
import Resource from "../components/Resource/";
import ResourceJumbotron from "../components/ResourceJumobtron";
import { Accordion } from "react-bootstrap";

import resourceData from "../data/resources.json";

const resources = () => {
  return (
    <>
      <ResourceJumbotron />
      <Accordion className="mx-auto col-lg-10">
        {resourceData.map((category) => {
          let content = category.content;
          return (
            <AccordionItem {...category}>
              {content.map((resource) => {
                return <Resource {...resource}></Resource>;
              })}
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};

export default resources;
