export const GET_POKEMONS = async ( paginated = null ) =>{
    if( paginated != null ){
        return fetch( paginated , {
            method: 'GET'
        })
        .then( ( res ) => res.json())
        .catch( ( rej ) => rej.json() ) ;
    }else{
        return fetch('https://pokeapi.co/api/v2/pokemon?limit=8', {
            method: 'GET'
        })
        .then( ( res ) => res.json())
        .catch( ( rej ) => rej.json() );
    }
};


export const FIND_POKEMON = async ( pokemon ) =>{
    return fetch( `https://pokeapi.co/api/v2/pokemon/${pokemon.trim().toLowerCase()}` , {
        method: 'GET'
    })
    .then( ( res ) => res.json() )
    .catch( ( rej ) => rej.json() );
};



export default {
    GET_POKEMONS, FIND_POKEMON
}