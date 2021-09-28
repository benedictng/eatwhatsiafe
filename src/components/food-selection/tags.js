import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import { cuisinePresetData } from "../../common/constants/cuisine-preset-data";
import { dietRestrictPresetData } from "../../common/constants/diet-restriction-preset-data";

import "./food-selection.css";

const tags = ({ cuisineType, restriction }) => {
  return (
    <>
      <ButtonGroup aria-label="Basic example">
        {cuisineType.map((cuisineTag, id) => (
          <Button variant="secondary">
            {cuisinePresetData.enum2[cuisineTag]}
          </Button>
        ))}

        {restriction.map((dietaryTag, id) => (
          <Button variant="secondary">
            {dietRestrictPresetData.enum2[dietaryTag]}
          </Button>
        ))}
      </ButtonGroup>
    </>
  );
};

export default tags;
