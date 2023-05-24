import './card.styles.css';

const Card = ({ id, name, email }) => (
    <div className='card-container' key={id}>
        <img 
            alt={`monster ${name}`} 
            src={`https://robohash.org/${id+34}?set=set5&size=180x180`} 
        />
        <h2>{name}</h2>
        <p>{email}</p>
    </div> 
);

export default Card;