import Col from 'react-bootstrap/Col';
import Container from '@material-ui/core/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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
                <p className="h0">
                    Congrats
                    Suckers
                </p>
            </Box>
            <Box mb={3}>
                {isConclusive && <h1>A decision has been made</h1>}
            </Box>
            {!isConclusive && (
                <p>
                    Eh... The results wasn&apos;t conclusive but who the F cares, we picked
                    this for you.
                </p>
            )}
            <Container>
                <Col>
                    <Box sx={{
                        display: 'flex', 'align-items': 'center', 'background-color': '#F4F4F4', p: 1, mx: 1,
                    }}
                    >
                        <p>{window.location.href}</p>
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
