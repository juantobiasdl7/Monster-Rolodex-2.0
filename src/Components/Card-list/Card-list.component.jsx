import { Component } from 'react';
import Card from '../Card/Card.component';

import './card-list.styles.css';

const CardList = ({ monsters }) => (
    <div className='card-list'>
        {monsters.map((monster) => { 

            const { id, name, email } = monster;
            
            return (
                <Card id={id} name={name} email={email}/>
            )
        })}
    </div> 
);

export default CardList;
