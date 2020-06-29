import React from 'react'

export class BookList extends React.Component {

    bookHandler = (book) => {
       this.props.selectBook(book)
    }

    render(){
        
        return (
            <ul>
                {this.props.books.map( book => {
                    return (
                        <li onClick={() => this.bookHandler(book)} >
                            {book.title}
                        </li>
                    )
                })}
            </ul>
        )
    }

}