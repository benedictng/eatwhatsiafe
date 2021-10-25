import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button'

import cuisinePresetData from 'common/constants/cuisine-preset-data'
import dietRestrictPresetData from 'common/constants/diet-restriction-preset-data'

import './food-selection.css'

const tags = ({ cuisineType, restriction }) => (
    <>
        <ButtonGroup aria-label="Basic example">
            {cuisineType.map((cuisineTag) => (
                <Button variant="secondary">
                    {cuisinePresetData.enum2[cuisineTag]}
                </Button>
            ))}

            {restriction.map((dietaryTag) => (
                <Button variant="secondary">
                    {dietRestrictPresetData.enum2[dietaryTag]}
                </Button>
            ))}
        </ButtonGroup>
    </>
);

export default tags;
