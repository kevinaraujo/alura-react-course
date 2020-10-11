import React, { Component, Fragment } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import Tabela from './Tabela';
import Form from './Form';
import Header from './Header'

class App extends Component {
  state = {
    authors: [
      {
        id: 1,
        name: 'Paulo',
        book: 'React',
        price: '1000'
      },
      {
        id: 2,
        name: 'Daniel',
        book: 'Java',
        price: '99'
      },
      {
        id: 3,
        name: 'Marcos',
        book: 'Design',
        price: '150'
      },
      {
        id: 4,
        name: 'Bruno',
        book: 'Devops',
        price: '100'
      },
    ],
  };

  removeAuthor = (index) => {
    
    const { authors } = this.state;

    const newAuthors = authors.filter((author, currentPos) => {
      return currentPos !== index;
    });

    this.setState({
      authors: newAuthors
    });
  }

  saveListener = author => {
    this.setState({
      authors: [...this.state.authors, author]
    });
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <div className="container .mb-10">
          <Tabela authors={this.state.authors} removeAuthor={this.removeAuthor} />
          <Form saveListener={this.saveListener}/>
        </div>
      </Fragment>
    );
  }
}

export default App;
