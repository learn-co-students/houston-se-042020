import React from 'react'
import { DragonCard } from './DragonCard'

export function Section(props) {
    return (
        <div style={{ float: props.float, width: '40%', padding: '5%', backgroundColor: props.color }}>
            <h1>{props.title}</h1>
            {props.dragons.map(dragon => {
                return <DragonCard dragon={dragon} onClick={props.moveDragon} />
            })}
        </div>
    )
}
