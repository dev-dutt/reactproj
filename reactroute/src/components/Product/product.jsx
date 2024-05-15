import React from "react";
import { useParams } from "react-router-dom";

function Product(){

    const {pid} = useParams()

    return(
        <>
        <div className="col-12 text-center">
        <h1 className="p-4 bg-blue-200">Product : {pid}</h1>

        </div>
        </>
    )
}

export default Product;