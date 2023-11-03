import { useState, useEffect } from "react";
import { getProducts } from "../helpers/getProducts";
export const useFetchAllProducts = () => {
    const [images, setImages]= useState([]);
    


    const getImages = async()=>{
        const newImages = await getProducts();
        setImages(newImages);
    }

    useEffect(()=>{getImages()},[])


    return {
        images: images,
        
    }
}