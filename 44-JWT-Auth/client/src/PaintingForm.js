import React from 'react'
import {Link} from 'react-router-dom'


class PaintingForm extends React.Component{

    goHome = () => {
        this.props.history.push("/paintings")
    }

    render(){
    return(
        <div>
            <form onSubmit={(e) => {
                this.props.add(e)
                this.goHome()
                }}>
                <input type='text' placeholder='Painting Title'/>
                <input type='text' placeholder='Painting Image URL'/>
                <input type='text' placeholder='Artist Name'/>
                <input type='submit' value='Add Painting'/>
            </form>
            <Link to="/paintings">
                HOME
            </Link>
        </div>
    )}
}

export default PaintingForm