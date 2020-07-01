import React, {Component} from 'react'

class PaintingCard extends Component{

    render(){
        let displayPainting = this.props.painting
        return(<div>
            <h2>{displayPainting.title}</h2>
            <img src={displayPainting.image} />
            </div>)
    }

}

export default PaintingCard