import Col from 'react-bootstrap/Col';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { EwsH0, EwsH1, EwsP } from 'components/common/typography/text-components';

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
                <EwsP>
                    Eh... The results wasn&apos;t conclusive but who the F cares, we picked
                    this for you.
                </EwsP>
            )}
            <Container>
                <Col>
                    <Box sx={{
                        display: 'flex', 'align-items': 'center', 'background-color': '#F4F4F4', p: 1, mx: 1,
                    }}
                    >
                        <EwsP>{window.location.href}</EwsP>
                    </Box>
                </Col>
                <Col>
                    <Button onClick={copy}>
                        Copy URL
                    </Button>
                </Col>
            </Container>
        </div>
    );
};

export default message;
