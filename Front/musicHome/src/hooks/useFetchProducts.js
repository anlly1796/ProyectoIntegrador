import { useState, useEffect } from "react";
import { getProductsCat } from "../helpers/getProductsCat";
export const useFetchProducts = (category,lim) => {
    const [images, setImages]= useState([]);
    


    const getImages = async()=>{
        const newImages = await getProductsCat(category,lim);
        setImages(newImages);
    }

    useEffect(()=>{getImages()},[])


    return {
        images: images,
        
    }
}
