import React from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "./dataContext";


const Items = () => {

    const { id } = useParams();
    // console.log(id);

    // const [dataN, setData] = React.useState()

    const { data } = React.useContext(DataContext)
    console.log(data);

    return (
        <div>
            <h1>{data[id].name}</h1>
            <h3>{data[id].price}</h3>
        </div>
    );
}


export default Items;