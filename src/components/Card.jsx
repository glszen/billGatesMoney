import React, { useState } from 'react';
import Receipt from './Receipt';
import '../css/header.css';

function Card({totalMoney, setTotalMoney}) {

  const initialProducts = [
    {id:1, name: 'Big Mac', price: 2, quantity: 0},
    {id:2, name: 'Coca-Cola Pack', price: 5, quantity: 0},
    {id:3, name: 'Lobster Dinner', price: 45, quantity: 0},
    {id:4, name: 'Airpods', price: 199, quantity: 0},
    {id:5, name: 'Designer Handbag', price: 5500, quantity: 0},
    {id:6, name: 'Diamond Ring', price: 10000, quantity: 0},
    {id:7, name: 'Tesla', price: 75000, quantity: 0},
    {id:8, name: 'Gold Bar', price: 7000000, quantity: 0},
    {id:9, name: 'Yacht', price: 7500000, quantity: 0},
    {id:10, name: 'McDonalds Franchise', price: 1500000, quantity: 0},
    {id:11, name: 'Mansion', price: 45000000, quantity: 0},
    {id:12, name: 'Mona Lisa', price: 780000000, quantity: 0},
    {id:13, name: 'Skyscraper', price: 850000000, quantity: 0},
    {id:14, name: 'Cruise Ship', price: 930000000, quantity: 0},
    {id:15, name: 'NBA Team', price: 2120000000, quantity: 0},

  ]

  const[products, setProducts] = useState(initialProducts);

  const formatMoney = (amount) => {
    return '$' + amount.toLocaleString();
  };

  
  const updateQuantity = (id, newQuantity) => {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const clampedQuantity = Math.max(0, newQuantity);
    const diff = clampedQuantity - product.quantity; //Decrease quantity
    const totalPriceChange = diff * product.price; //Quantity * Money

    if (diff > 0 && totalMoney >= totalPriceChange) {
      setProducts(products.map(p=>p.id === id? {...p, quantity: clampedQuantity} : p))
      setTotalMoney(totalMoney-totalPriceChange)
    }
    
    if (diff<0)  {
      setProducts(products.map(p=> p.id === id ? {...p,  quantity: clampedQuantity} : p));
      setTotalMoney(totalMoney-totalPriceChange);
    }
  }

  const increaseQuantity = (id) => {
    const product = products.find(p=> p.id === id);
    if(!product) return;

    if (totalMoney >= product.price) {
      setProducts(products.map(p=>p.id === id? {...p, quantity: p.quantity+1} : p))
      setTotalMoney(totalMoney-product.price)
    }
    
  }

  const decreaseQuantity = (id) => {
    const product = products.find(p=> p.id === id);
    if(!product || product.quantity === 0 ) return;

    
      setProducts(products.map(p=>p.id === id? {...p, quantity: p.quantity - 1} : p))
      setTotalMoney(totalMoney+product.price)
    
  }

console.log(products);

    return(
      <div className='justify-content-center d-flex'>
  <div className='col-6'>
     <div className='row grid gap-3 justify-content-center d-flex ' >
      {products.map((product)=>( //Map product cards.
         <div key={product.id} class="card col-3 cardStyle">
          <div class="card-body">
           <div className='col'>
          <div className='row justify-content-center'>
        <img className='cardImage' src={`/src/images/${product.name.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase()}.jpg`} alt={product.name} />
          </div>
          <div className='row justify-content-center'>
          <span className='text-center cardText'>{product.name}</span>
          <p className='text-center moneyText'>{formatMoney(product.price)}</p>
          </div>
           </div>


           <div className='row justify-content-center me-1'>
            <div className='col-4'>
            <button onClick={()=> decreaseQuantity(product.id)}  className="btn buttonSize" type="button" style={{
              backgroundColor: product.quantity >= 1 ? '#DC3545' : '',
              color: product.quantity >= 1 ? `#F1F2F6` : '',
            }}>Sell</button>
            </div>
          <div className='col-4'>
          <input className=' inputSize d-flex text-center'
                    type="number"
                    value={product.quantity}
                    onChange={(e) => updateQuantity(product.id, Math.max(0, parseInt(e.target.value)))}
                    min="0"
                  />
          </div>

        <div className='col-4'>
        <button onClick={()=> increaseQuantity(product.id)} type="button" class="btn buttonSize" style={{backgroundColor: totalMoney >= product.price ? `#26C582` : '', color: totalMoney >= product.price ? `white` : `#333333`}}>Buy</button>
        </div>
          
           </div>
          </div>
        </div>
      ))}
       
        </div>
       {products.some(products => products.quantity >= 1) && <Receipt products={products}></Receipt>}
        </div>
        

      </div>
      

    )
}

export default Card
