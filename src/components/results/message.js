
import React from 'react';

const message = ({is_conclusive}) => {


    return (
        <div>
            <h1>CONGRATULATIONS, SUCKERS.</h1>
            {is_conclusive && <p>A decision has been made. Finally.</p>}
            {!is_conclusive && <p>Eh... The results wasn't conclusive but who the F cares, we picked this for you.</p>}
        </div>
    )
}

export default message
