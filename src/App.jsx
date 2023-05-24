import './App.css';

import { useEffect, useState } from 'react';
import CardList from './Components/Card-list/Card-list.component';
import { Component } from 'react';
import SearchBox from './Components/Search-box/Search-box.component';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log({searchField});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => 
      setMonsters(users)
    )
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newfilteredMonsters);

  }, [searchField, monsters]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">
      <h1 className='app-title'>Humans Rolodex</h1>
      <SearchBox
        className='search-box-personalize'
        onChageHandler={onSearchChange}
        placeholder='Search Monsters...'
      />
      <CardList monsters={filteredMonsters}/>
    </div>
  );

}

export default App;