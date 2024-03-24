import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from '../../Components/Context/StoreContext'
const cart = () => {

  const {cartItems,food_list,removeFormCart} = useContext(StoreContext)


  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
              if(cartItems[item._id]>0){
                return (
                  <div className="div">
                    <div className="cart-items-title cart-items-item">
                      <img src={item.image} alt="" />
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                      <p>{cartItems[item._id]}</p>
                      <p>${item.price * cartItems[item._id]}</p>
                      <p onClick={()=>removeFormCart(item._id)} className='cross'>x</p>
                    </div>
                    <hr />

                  </div>
                )
              }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>{0}</p>
          </div>
          <div className="cart-total-details">
            <p>Delivery fee</p>
            <p>{2}</p>
          </div>
          <div className="cart-total-details">
            <b>{0}</b>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder='Promo code'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default cart
