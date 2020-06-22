import React, { Component } from 'react'

function DragonCard(props) {
    return (
        <div onClick={() => props.onClick(props.dragon)}>
            <h2>{props.dragon.name}</h2>
            <img src={props.dragon.image} width={100} />
            <p>{props.dragon.description}</p>
            At War: { props.dragon.atWar ? 'Yes' : 'No'}
        </div>
    )
}



export default DragonCard