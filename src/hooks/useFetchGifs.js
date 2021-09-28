import {useEffect, useState} from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category).then(imgs => {
            setstate({
                data: imgs,
                loading: false
            });
        });
    }, [category]); // si en el segundo parametro no agregamos dependencias [], el método getGifs() solo se llama al renderizar el componente por primera vez. Pero como agregamos category, ahora se va a llamar cada vez que este la category cambie.


    return state; // retorna el objeto declarado en useState

};