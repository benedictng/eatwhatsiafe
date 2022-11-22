/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import './about.css'

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { EwsH1, EwsH2, EwsP } from 'components/common/typography/text-components';
import BackgroundPattern from 'components/common/background-pattern'
import bear from './images/bear.png'
import bird from './images/bird.png'
import duck from './images/duck.png'
import mouse from './images/mouse.png'
import pig from './images/pig.png'

const BlankSpace = ({ height = 50 }) => <Grid item sx={{ height, whiteSpace: 'pre-wrap' }} />

const TeamMember = ({ name, image }) => (
    <Grid item xs={3}>
        <img className="profileImage" src={image} alt={`profile of ${name}`} />
        <br />
        <br />
        <EwsH2>{name}</EwsH2>
    </Grid>
)

const rickRoll = () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')
}

const About = () => (
    <>
        <BackgroundPattern />
        <Container>
            <Grid>
                <BlankSpace height={70} />
                <Grid container>
                    <Grid item sx={{ textAlign: 'left' }} xs={4}>
                        <Box>
                            <EwsH1>We hate planning meet ups.</EwsH1>
                            <br />
                            <EwsP>
                                After all, half the time is spent
                                figuring out where to meet (aka what to eat).
                            </EwsP>
                            <br />
                            <EwsP>
                                That&apos;s why we created Eat Here Lah,
                                to force our friends to help.
                            </EwsP>
                        </Box>
                    </Grid>
                    <Grid item xs={2} />
                    <Grid item xs={6}>
                        {/* eslint-disable */}
                    <img 
                        className="bird-logo"
                        src={bird}
                        alt="sexy bird logo"
                        onClick={rickRoll}
                        onKeyPress={rickRoll}
                    />
                    {/* eslint-enable */}
                    </Grid>
                </Grid>
                <BlankSpace />
                <EwsH1>Meet the Team</EwsH1>
                <BlankSpace />
                <Grid container>
                    <TeamMember name="Alexis" image={pig} />
                    <TeamMember name="Ben" image={bear} />
                    <TeamMember name="Howard" image={mouse} />
                    <TeamMember name="Yufei" image={duck} />
                </Grid>
            </Grid>
        </Container>
    </>
)

export default About
