import React, { Component } from 'react'
import DragonCard from './DragonCard'


function War(props) {
    // Note how style attributes are now passed as object instead of a string!!!
    return (
        <div style={{ float: 'left', width: '40%', padding: '5%', backgroundColor: '#f98181' }}>
            <h1>War</h1>
            {props.dragons.map( dragon => (
                <DragonCard dragon={dragon} onClick={props.sendHome} />
            ))}
        </div>
    )
}



export default War