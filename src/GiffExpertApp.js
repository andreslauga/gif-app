import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Marvel']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'HunterXHunter']); // cambiamos el estado directamente con lo que pasamos como parámetro
    //     setCategories(categories => [...categories, 'HunterXHunter']); otra opción es le pasamos un callback que cambia el estado
    // };

    return(
        <>
            <h2>GifExpertApp</h2>
            <hr/>

            <AddCategory setCategories={setCategories}/>

            <ol>
                { 
                    categories.map((category, i) => (
                        <GifGrid 
                            key={ category }
                            category={ category }/>
                    ))
                }
            </ol>
        </>
    );
};

export default GifExpertApp;