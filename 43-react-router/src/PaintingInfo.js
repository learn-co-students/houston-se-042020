import React, {Component} from 'react';

class PaintingInfo extends Component{


    
    render(){
        // console.log(this.props.match.params.id)
        return(  <div>
                    {/* Painting Info */}
                    <h2>{this.props.painting.title}</h2>
                    <img src={this.props.painting.image}/>
                    <p>Artist Name: {this.props.painting.artist.name}</p>
               </div>)
    }

}

export default PaintingInfo;