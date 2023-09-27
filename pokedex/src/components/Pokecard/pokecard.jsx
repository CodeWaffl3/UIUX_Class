import "./pokecard.css"

function PokeCard({data, onClick}){

    const {name, id} = data;
    

    return(
        <li className="pokeCard" onClick={onClick}>
            <div className="whiteCover">
                <h1>{name}</h1>
                <h2>No. {id}</h2>
            </div>
        </li>
    );
}

export default PokeCard;