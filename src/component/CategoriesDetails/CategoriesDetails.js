import React, { useContext } from 'react';
import { contextApi } from '../../App';

const CategoriesDetails = () => {
    const category = useContext(contextApi)
    return (
        <div>
            <h5>I am category child: {category}</h5>
        </div>
    );
};

export default CategoriesDetails;