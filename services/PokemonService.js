export const GET_POKEMONS = async ( nextPrevious = null ) =>{
    if( nextPrevious != null ){
        return fetch( nextPrevious , {
            method: 'GET'
        })
        .then( ( res ) => res.json())
        .catch( ( rej ) => rej.json() ) ;
    }else{
        return fetch('https://pokeapi.co/api/v2/pokemon?limit=8', {
            method: 'GET'
        })
        .then( ( res ) => res.json())
        .catch( ( rej ) => { return rej } );
    }
};


export const FIND_POKEMON = async ( pokemon ) =>{
    return fetch( `https://pokeapi.co/api/v2/pokemon/${pokemon.trim().toLowerCase()}` , {
        method: 'GET'
    })
    .then( ( res ) => res.json() )
    .then( ( res ) =>{
        if( res.status === 404 ){
            return {
                data : {},
                message : 'Pokemon Not Found'
            }
        }else{
            return {
                data : res,
                message : ''
            };
        }
    } )
    .catch( ( ) => {
        return {
            data : {},
            message : 'Pokemon Not Found'
    }} );
};




export default {
    GET_POKEMONS, FIND_POKEMON
}