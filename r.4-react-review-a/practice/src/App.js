import React from 'react';
import { BookList } from './BookList'
import { BookCard } from './BookCard'

const currentUser = {"id":1, "username":"pouros"};

class App extends React.Component {
  
  state = {
    books: null,
    displayedBookId: null
  }

  selectBook = (book) => {
    this.setState({
      displayedBookId: book.id
    })
  }

  addLike = () => {
    let selectedBook = this.state.books.find( book => book.id == this.state.displayedBookId)
    let selectedBookIndex = this.state.books.indexOf(selectedBook)

    let updatedBook = {
      ...selectedBook,
      users: [
        ...selectedBook.users,
        currentUser
      ]
    }

    this.setState({
      books: [
        ...this.state.books.slice(0, selectedBookIndex),
        updatedBook,
        ...this.state.books.slice(selectedBookIndex + 1)
      ]
    })
  }

  componentDidMount(){
    fetch('http://localhost:3000/books')
      .then( res => res.json())
      .then( books => this.setState({ books: books }) )
  }

  render() {
    if(this.state.books == null){
      return <h1>Getting Books...</h1>
    }

    let selectedBook = this.state.books.find( book => book.id == this.state.displayedBookId)

    return (
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 8fr', width: '90vw' }}>
        <BookList 
          books={this.state.books} 
          selectBook={this.selectBook}
        />
        <BookCard book={selectedBook} addLike={this.addLike} />
      </div>
    )
  }

}

export default App;