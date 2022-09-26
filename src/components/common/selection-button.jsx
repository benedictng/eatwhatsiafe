import ToggleButton from '@mui/material/ToggleButton';
import CloseIcon from '@mui/icons-material/Close';
import colors from 'common/colors';
import { EwsSubtitle } from './typography/text-components';

const SelectionButton = ({ text, data, onCheckboxTicked }) => (
    <ToggleButton
        sx={{
            height: '43px',
            'border-radius': '50px',
            mx: 1,
            mb: 2,
            py: 1.5,
            px: 3,
            'background-color': colors.almostBlack,
            color: colors.almostWhite,
            '&.Mui-selected': {
                backgroundColor: colors.turquoise,
                color: 'black',
                '&:hover': {
                    backgroundColor: colors.turquoise,
                    color: 'black',
                },
            },
            '&:hover': {
                backgroundColor: colors.turquoise,
                color: 'black',
            },
        }}
        selected={data[text]}
        name={text}
        onChange={() => onCheckboxTicked(text)}
        thumbStyle={{ backgroundColor: 'red' }}
        trackStyle={{ backgroundColor: 'green' }}
    >
        <EwsSubtitle>{text}</EwsSubtitle>
        {(data[text]) ? <CloseIcon /> : ''}
    </ToggleButton>
)

export default SelectionButton
