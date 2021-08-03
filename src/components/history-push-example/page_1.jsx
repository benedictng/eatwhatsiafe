import { useHistory } from 'react-router-dom'

const PageOne = () => {
    
    const history = useHistory()
    
    const data = { key: 'val', key2: 2 }


    const nextPage = () => {
        history.push('/page-2', data)
    }

    return (
        <>
        <h1>Page 1</h1>
        <p>Press the next page to send the following state to page 2</p>
        <p>{JSON.stringify(data)}</p>
        <button onClick={nextPage}>Click Me</button>
        </>
    )
}

export default PageOne
