import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { contextApi } from '../../App';

const Shipment = () => {
    const [count, setCount] = useContext(contextApi)
    return (
        <div>
            <h1>hello Shipment : {count}</h1>
            <Button variant="contained" color="secondary" onClick={()=> setCount(count + 1)}>
        Secondary
      </Button>
        </div>
    );
};

export default Shipment;