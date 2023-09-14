import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'

const ProductList = () => {

    const fetch_api = 'https://fakestoreapi.com/products';
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(fetch_api)
            .then((response) => response.json())
            .then((data) => setProducts(data))
    }, []);

    return (
        <>
            <div className="text-center p-5">
                <div className='container'>
                    <div className="row">
                    {
                        products.map((product) => {
                            return (
                                <div className="col-sm-6 col-md-4" key={product.id}>
                                    <Product product={product} showButton={ true} />
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList
