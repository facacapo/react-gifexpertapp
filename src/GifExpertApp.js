import React, { useState } from 'react';
import AddCategory from './componentes/AddCategory';
import GifGrid from './componentes/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () => {
    //     const category = 'Los Caballeros del Zoodiaco';
    //     // setCategories( [...categories, category] );
    //     setCategories( cats => [...cats, category] );
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            {/* <input type="text" placeholder="Agregar Categoría"></input> */}
            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                        key={category}
                        category={category} 
                        />
                    ))
                }
            </ol>

        </>
    );
};

export default GifExpertApp;