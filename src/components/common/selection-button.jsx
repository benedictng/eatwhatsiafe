import ToggleButton from '@mui/material/ToggleButton';

const SelectionButton = ({ text, data, onCheckboxTicked }) => (
    <ToggleButton
        sx={{
            height: '43px',
            'border-radius': '50px',
            margin: '16px 16px',
            'background-color': '#1D1D1D',
            'box-shadow': '4px 4px #9FEADD',
            color: '#FBFBFB',
        }}
        selected={data[text]}
        name={text}
        onChange={() => onCheckboxTicked(text)}
    >
        {text}
    </ToggleButton>
)

export default SelectionButton
