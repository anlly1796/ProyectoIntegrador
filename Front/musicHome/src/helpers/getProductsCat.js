



export const getProductsCat = async(category,lim) => {
    const url = `http://localhost:8080/api/products/${ category }`
    const resp = await fetch(url);
    const data =await resp.json()
    console.log(data)

    const products = data.map(img => ({
        id: img.id,
        title: img.name,
        price: img.price,
        url: `data:image/jpeg;base64,${img.image}`

    }))

    
    return products
}
