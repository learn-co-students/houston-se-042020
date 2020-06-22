import React, { Component } from 'react'
import DragonCard from './DragonCard'

function Home(props) {
    // Note how style attributes are now passed as object instead of a string!!!
    return (
        <div style={{ float: 'left', width: '40%', padding: '5%', backgroundColor: '#00ffd8' }}>
            <h1>Home</h1>
            {props.dragons.map(dragon => (
                <DragonCard dragon={dragon} onClick={props.sendToWar} />
            ))}
        </div>
    )
}



export default Home