import React from 'react'
import { EwsH1, EwsP } from 'components/common/typography/text-components'
import { Link } from 'react-router-dom'
import SadFrog from './sad-frog.jpg'

const PageNotFound: React.FC = () => (
    <>
        <EwsH1>Page Not Found!</EwsH1>
        <br />
        <img src={SadFrog} alt="sad frog jpg" />
        <Link to="/"><EwsP>Back Home</EwsP></Link>
    </>
)

export default PageNotFound
