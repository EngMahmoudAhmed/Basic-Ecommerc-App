import React from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => {
    const {product ,showButton} = props
    // console.log(props)
    return (
        <>
                <div className="card my-3">
                    <img src={product.image} className="card-img-top rounded-4" height={300} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {
                        showButton ?
                        <Link className="btn btn-primary" to={`/product/${product.id}`}>Details</Link>
                        
                        :<Link className="btn btn-danger" to={'/'}>Back</Link>

                    }
                    </div>
                </div>
        </>
    )
}

export default Product
