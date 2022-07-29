export const GET_POKEMONS = async ( nextPrevious = null ) =>{

    const endPoint = nextPrevious ?? 'https://pokeapi.co/api/v2/pokemon?limit=8';
    return fetch( endPoint , {
        method: 'GET'
    })
    .then( ( res ) => res.json())
    .then( ( res ) =>{
        if( res.status === 404 ){
            return {
                data : [],
                message : 'Not Data Matched'
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
            data : [],
            message : 'Not Data Matched'
    }}  );
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