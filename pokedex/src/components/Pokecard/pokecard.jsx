import "./pokecard.css"

function PokeCard({data, onClick}){

    const {name, id, types = [{type: {name: "fire"}}]} = data;

    const img = !data.sprites ? " " : data.sprites.other["official-artwork"].front_default;
    
    const colorTypes = types.map(type => {
        const color = getComputedStyle(document.body).getPropertyValue("--" + type.type.name);
        return color
    });
    

    const linearGradient = colorTypes.length === 1 ? colorTypes[0] + ", " + colorTypes[0] : colorTypes.join(", ");

    return(
        <li className="pokeCard" onClick={onClick} style={{
            backgroundImage: "linear-gradient(to right," + linearGradient + ")"
        }}>
            <div className="whiteCover">
                <h1>{name}</h1>
                <h2>No. {id}</h2>
                <img src={img} alt={name} />
            </div>
        </li>
    );
}

export default PokeCard;