const baseUrl = 'http://localhost:3000'

export const showArtists = () => {
    return fetch( `${ baseUrl }/artist_infos` )
        .then( resp => resp.json() )
        .catch( e => e )
}

export const showGigs = () => {
    return fetch( `${ baseUrl }/gigs` )
        .then( resp => resp.json() )
        .catch( e => e )
}

export const showArtistItem = ( id ) => {
    return fetch( `${ baseUrl }/artist_infos/${ id }` )
        .then( resp => resp.json() )
        .catch( e => e )
}

export const showGigItem = ( id ) => {
    return fetch( `${ baseUrl }/gigs/${ id }` )
        .then( resp => resp.json() )
        .catch( e => e )
}

export const postJob = ( item ) => {
    const opts = {
        method: 'POST',
        body: JSON.stringify( item ),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ localStorage.getItem( 'jwt' ) }`
        }
    };

    return fetch( `${ baseUrl }/gigs/`, opts )
        .then( resp => resp.json() )
        .catch( e => e )
}

export const destroyGig = ( id ) => {
    const opts = {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${ localStorage.getItem( 'jwt' ) }`
        }
    }
    return fetch( `${ baseUrl }/foods/${ id }`, opts )
        .catch( e => e )
}


//------------------------------------Auth------------------------------------------
export const loginUser = ( loginData ) => {
    const opts = {
        method: 'POST',
        body: JSON.stringify( loginData ),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return fetch( `${ baseUrl }/auth/login`, opts )
        .then( resp => resp.json() )
}

export const registerUser = ( registerData ) => {
    const opts = {
        method: 'POST',
        body: JSON.stringify( { user: registerData } ),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return fetch( `${ baseUrl }/users/`, opts )
        .then( resp => resp.json() )
}
