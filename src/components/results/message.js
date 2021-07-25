
import React from 'react';
import { resultsData } from './results-data';


const message = () => {


    return (
        <div>
            <h1>CONGRATULATIONS, SUCKERS.</h1>
            {resultsData.data.results_conclusive && <p>A decision has been made. Finally.</p>}
            {!resultsData.data.results_conclusive && <p>Eh... The results wasn't conclusive but who the F cares, we picked this for you.</p>}
        </div>
    )
}

export default message
