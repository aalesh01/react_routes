import { createContext } from "react";
import React from "react";

export const DataContext = createContext();

const DataContextBox = ({ children }) => {

    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        fetch('http://localhost:3000/products/')
            .then(res => res.json())
            .then(res => setData(res));
    }, []);
    return (
        <DataContext.Provider value={{ data }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextBox;