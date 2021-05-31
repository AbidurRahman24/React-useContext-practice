import React, { useContext } from 'react';
import { contextApi } from '../../App';
import Categories from '../Categories/Categories';


const Home = () => {
    const categories = useContext(contextApi)
    return (
        <div style={{border: '1px solid red'}}>
            <h1>This is Home:{categories}</h1>
            <Categories ></Categories>
        </div>
    );
};

export default Home;