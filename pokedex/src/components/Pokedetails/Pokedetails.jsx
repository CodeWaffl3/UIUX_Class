import "./PokeDetails.css"

function PokeDetails({pokemon}) {
    console.log(pokemon);

    const {name, id, types = [{type: {name: "fire"}}] } = pokemon;

    const img = !pokemon.sprites ? " " : pokemon.sprites.other["official-artwork"].front_default;
    
    const colorTypes = types.map(type => {
        const color = getComputedStyle(document.body).getPropertyValue("--" + type.type.name);
        return color
    });
    
    const linearGradient = colorTypes.length === 1 ? colorTypes[0] + ", " + colorTypes[0] + "AA" : colorTypes.join(", ");


    return(
        <div id="pokeDetails">
            <div className="backgroundGradient" style={{
                backgroundImage: "linear-gradient(to bottom," + linearGradient + ")"
                }}
            />
            <div className="generalInfo">
                <h1>{name}</h1>
                <h2>{types.map(type => type.type.name).join("/")}</h2>
                <h2>No.{id} </h2>
                <img src={img} alt={name} />
            </div>
        </div>
    )
}

export default PokeDetails;