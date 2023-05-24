import { Component } from 'react';

import './search-box.styles.css';

const SearchBox = (props) => (    
    <input 
        className={`search-box ${props.className}`}
        type='search'
        placeholder={props.placeholder} 
        onChange={props.onChageHandler}
    />
);

export default SearchBox;