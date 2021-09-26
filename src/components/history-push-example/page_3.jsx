import { useHistory } from 'react-router-dom'

const PageThree = () => {
    const history = useHistory()

    const prevPage = () => {
        history.goBack() // or history.go(-1)
    }

    const pushSecondPage = () => {
        history.push('/page-2')
    }

    return (
        <>
        <h1>Page 3</h1>
        <p>Ok, now click the back button in the browser or this button to go back</p>
        <p>The state should be preserved.</p>
        <button onClick={prevPage}>Back</button>
        <br/>
        <br/>
        <p>This pushes a new "page-2" onto the history stack, without adding data.</p>
        <p>This creates a new PageTwo component with its independent state.</p>
        <p>After clicking this, if you use the back and forwards button on your browser to navigate around, you will see that there are clearly two instances of the page-2 component</p>
        <button onClick={pushSecondPage}>PushSecondPage</button>
        </>
    )
}

export default PageThree
