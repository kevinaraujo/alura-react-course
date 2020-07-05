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
            <tr>
                <td>{line.name}</td>
                <td>{line.book}</td>
                <td>{line.price}</td>
                <td><button>Remover</button></td>
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
        
        const { authors } = this.props;

        return (
            <table>
                <TableHead/>
                <TableBody authors = {authors} />
            </table>
        );
    }
}

export default Tabela;