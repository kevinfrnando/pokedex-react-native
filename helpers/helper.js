const getId = ( url ) =>{
    if( url != null ){
        const urlSplitted = url.split("/"); 
        return urlSplitted[6] ;
    }
    return null;
}

const getCapitalized = ( str ) => {
    return str != null ? str.charAt(0).toUpperCase() + str.slice(1)  : '';
}

const getCurrentPage = ( url ) => {
    let page = 0;
    if( url != null ){
        let ind0 = url.indexOf("offset=") ?? 0;	
        let ind1 = url.indexOf("&limit") ?? 0;	
        let offset = "";
        if (ind0 >= 0 && ind1 > ind0) {
            offset = url.substring(ind0+"offset=".length, ind1);	
            page = parseInt( offset ) / 4;
        }else{
            page = 0; 
        }
    }
    return page+1;
}

export { getId, getCapitalized };