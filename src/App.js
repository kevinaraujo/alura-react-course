import React from 'react';
import './App.css';
import Tabela from './Tabela';

function App() {
  const authors = [
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
  ];

  return (
    <div className="App">
      <Tabela authors={authors} />
    </div>
  );
}

export default App;
