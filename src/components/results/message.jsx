import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {
    EwsH0, EwsH1, EwsH2, EwsSubtitle,
} from 'components/common/typography/text-components';

const message = ({ isConclusive }) => {
    function copy() {
        const el = document.createElement('input');
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }
    return (
        <div>
            <Box mb={1}>
                <EwsH0>
                    Congrats
                    Suckers
                </EwsH0>
            </Box>
            <Box mb={3}>
                {isConclusive && <EwsH1>A decision has been made</EwsH1>}
            </Box>
            {!isConclusive && (
                <EwsH2>
                    Eh... The results wasn&apos;t conclusive but who the F cares, we picked
                    this for you.
                </EwsH2>
            )}
            <Box sx={
                {
                    display: 'flex',
                    my: 5,
                    alignItems: 'stretch',
                    justifyContent: 'center',
                    height: '52px',
                }
            }
            >
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#F4F4F4',
                    p: 1,
                    mx: 1,
                }}
                >
                    <EwsSubtitle>{window.location.href}</EwsSubtitle>
                </Box>
                <Button className="copy-button" onClick={copy}><EwsSubtitle>COPY</EwsSubtitle></Button>
            </Box>
        </div>
    );
};

export default message;
