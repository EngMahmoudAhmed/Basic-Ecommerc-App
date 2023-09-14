import React from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => {
    const {product ,showButton} = props
    // console.log(props)
    return (
        <>
                <div className="card my-3 border-2 p-2 bg-gray">
                    <img src={product.image} className="card-img-top rounded-4 shadow-sm" height={300} alt="img" />
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p>{product.price } $</p>
                    <p className="card-text">Some quick example text to build on the card title and make up the buld of the card's content.</p>
                    {
                        showButton ?
                        <Link className="btn btn-primary" to={`/product/${product.id}`}>Details</Link>
                        
                        :<Link className="btn btn-danger" to={`/`}>Back</Link>
                    }
                    </div>
                </div>
        </>
    )
}

export default Product
