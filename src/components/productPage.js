import React from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "./dataContext";


const Products = () => {

    const { data } = useContext(DataContext)
    console.log(data);
    return (
        <>
            <table>
                <tr><th>Name</th>
                    <th>Price</th>
                    <th>More details</th>
                </tr>

                {data.map(ele => (
                    <tr key={ele.id}>
                        <td>{ele.name}</td>
                        <td>{ele.price}</td>
                        <td><Link to={`/products/${ele.id}`}>click here</Link></td>
                    </tr>
                ))}
            </table>
        </>
    )

}

export default Products;