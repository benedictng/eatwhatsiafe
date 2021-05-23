import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import "./food-selection.css";

const tags = () => {
  return (
    <>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary">Vegetarian</Button>
        <Button variant="secondary">Is</Button>
        <Button variant="secondary">Cool</Button>
      </ButtonGroup>
    </>
  );
};

export default tags;
