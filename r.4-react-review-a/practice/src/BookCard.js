import React from 'react'

export class BookCard extends React.Component {


    render(){
        if(this.props.book == null){
            return (
                null
            )
        }
        return (
            <div style={{ marginLeft: 20}}>
                <h1>{this.props.book.title}</h1>
                <img src={this.props.book.img_url} />
                <p>{this.props.book.description}</p>
                <ul>
                    {this.props.book.users.map( user => (
                        <li>{user.username}</li>
                    ))}
                </ul>
                <button onClick={() => this.props.addLike()} >Like</button>
            </div>
        )
    }

}