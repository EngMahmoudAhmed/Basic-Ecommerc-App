import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../Product/Product';

const ProductDetails = () => {
    const params = useParams();
    const fetch_api = 'https://fakestoreapi.com/products'
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`${fetch_api}/${params.productId}`)
            .then((response) => response.json())
            .then((data) => setProduct(data))


    }, []);

    return (
        <div className='col-md-4 text-center m-auto'>
            <Product product={ product} showButton={false} />
        </div>
    )
}

export default ProductDetails
