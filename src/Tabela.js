import React, { Component } from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Autores</th>
                <th>Livros</th>
                <th>Preços</th>
                <th>-</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const lines = props.authors.map((line, index) => {
        return (
            <tr key={index}>
                <td>{line.name}</td>
                <td>{line.book}</td>
                <td>{line.price}</td>
                <td><button className="waves-effect waves-light indigo lighten-2 btn" 
                    onClick={() => { props.removeAuthor(index) }}>Remover</button></td>
            </tr>
        );
    });

    return (
        <tbody>
            {lines}
        </tbody>
    );
}

class Tabela extends Component {
    render(){
        
        const { authors, removeAuthor } = this.props;

        return (
            <table className="centered highlight">
                <TableHead/>
                <TableBody authors = {authors} removeAuthor={removeAuthor}/>
            </table>
        );
    }
}

export default Tabela;