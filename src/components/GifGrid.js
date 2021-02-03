import React from 'react'

export const GifGrid = ({ category }) => {

    const getGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=I1Omgu16s5Y2Q2KwkIqLIO0Jm1FJpo4n';
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);

    }

    getGifs();

    return (
        <div>
            <h3>{ category }</h3>
        </div>
    )
}
