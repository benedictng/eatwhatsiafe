import ToggleButton from '@mui/material/ToggleButton';

const SelectionButton = ({ text, data, onCheckboxTicked }) => (
    <ToggleButton
        sx={{
            height: '43px',
            'border-radius': '50px',
            mx: 1,
            p: 1,
            'background-color': '#1D1D1D',
            color: '#FBFBFB',
            '&.Mui-selected': {
                backgroundColor: '#9FEADD',
                color: 'black',
                '&:hover': {
                    backgroundColor: '#9FEADD',
                    color: 'black',
                },
            },
            '&:hover': {
                backgroundColor: '#9FEADD',
                color: 'black',
            },
        }}
        selected={data[text]}
        name={text}
        onChange={() => onCheckboxTicked(text)}
        thumbStyle={{ backgroundColor: 'red' }}
        trackStyle={{ backgroundColor: 'green' }}
    >
        {text}
    </ToggleButton>
)

export default SelectionButton
