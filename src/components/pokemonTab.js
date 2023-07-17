function PokemonTab(props){
    const data = props;
    const index = data.pokeUrl.split('/')[data.pokeUrl.split('/').length - 2];
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`
    return(
        <div>
            <div>
                <img src={imageUrl}/>
                <h2>{data.name}</h2>
            </div>
        </div>

    );
}

export default PokemonTab;