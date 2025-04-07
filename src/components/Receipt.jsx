import React, { useState } from 'react';
import '../css/header.css';

function Receipt({products}){
    

    console.log(products);
    const total = products.reduce((acc, product) => acc + product.price * product.quantity,0)
    return(
        <div>
<nav className="navbar">
  <div className="container-fluid header justify-content-center d-flex">
    <span className="navbar-brand row text-center txtb pb-4">Your Receipt</span>
  </div>

  <div className="container-fluid header justify-content-center d-flex">
    
    <div className='receipt-items'>
        {products.map((product) => 
            product.quantity > 0 ? (
                <div key={product.id} className="receipt-item d-flex justify-content-between">
                    <span style={{color:`#29C87C`, fontSize:`17px`,fontWeight:`bold`}}><span className='me-4 ' style={{color:`black`, fontSize:`17px`,fontWeight:`normal`}}>{`${(product.name)+ " x " +(product.quantity)} `}</span>{`$${(product.price * product.quantity).toLocaleString()}`}</span>
                </div> 
            ) : null
        )}

<div className='total d-flex justify-content-between mt-3'>
    
        <span style={{color:`black`, fontSize:`20px`}}><hr  className='new4' /><strong>Total:</strong></span>
        
        
        <span style={{color:`#29C87C`, fontSize:`20px`}}><hr  className='new4' /><strong>{`$${total.toLocaleString()}`}</strong></span>

    </div>
    </div>
   
  </div>
</nav>
        </div>
    )
}
export default Receipt