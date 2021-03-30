import React from 'react'

function Count(props) {
    console.log("Count component render")
    return (
        <div>
            <h2>{props.name}: {props.value}</h2>
        </div>
    )
}

export default React.memo(Count)
