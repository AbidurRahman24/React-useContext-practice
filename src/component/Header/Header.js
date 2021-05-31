import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { contextApi } from '../../App';


const Header = () => {
    const [count, setCount] = useContext(contextApi)
    const handleClick = () =>{
        setCount(count + 1)
    }

    return (
        <div>
            <h1>This is Header: {count} </h1>
            <Button variant="contained" color="primary" onClick={handleClick}>Increase</Button>
        </div>
    );
};

export default Header;