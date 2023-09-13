import React from 'react'

const Product = (props) => {
    const {product} = props
    console.log(props)
    return (
        <>
                <div className="card my-3">
                    <img src={product.image} className="card-img-top rounded-4" height={300} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button href="#" className="btn btn-primary">Details</button>
                    </div>
                </div>
        </>
    )
}

export default Product
