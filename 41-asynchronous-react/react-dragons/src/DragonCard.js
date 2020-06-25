import React from 'react'

export class DragonCard extends React.Component {

    handleClick = () => {
        this.props.onClick(this.props.dragon)
    }

    render = () => {
        return (
            <div onClick={this.handleClick} >
                <h3>{this.props.dragon.name}</h3>
                <p>{this.props.dragon.description}</p>
                <img style={{ width: '100px' }} src={this.props.dragon.image} />
            </div>
        )
    }

}