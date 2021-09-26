import { useHistory, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const PageTwo = () => {
    const history = useHistory()
    const location = useLocation()
    const [data, setData] = useState(null)

    useEffect(() => {
        setData(location.state)
    }, []) // empty array here means that this effect will only run once, when the component is created. equivalent to componentDidMount

    const nextPage = () => {
        history.push('/page-3')
    }

    return (
        <>
        <h1>Page 2</h1>
        <p style={{"font-size": "12px"}}>disclaimer - there are two displays of the state because i wanted to see if there was a difference.. seems like there isnt, so either works, i think..</p>
        <p>location.state: {JSON.stringify(location.state)}</p>
        <p>Data that was initially saved: {JSON.stringify(data)}</p>
        <p>Go to the next page and back to see if the above values change</p>
        <button onClick={nextPage}>Click Me</button>
        </>
    )
}

export default PageTwo
