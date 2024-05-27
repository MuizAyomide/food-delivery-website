import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from '../../Components/Context/StoreContext'
import { useNavigate } from 'react-router-dom'
const cart = () => {

  const {cartItems,food_list,removeFormCart,getTotalCartAmount} = useContext(StoreContext)

const navigate = useNavigate();

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
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery fee</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Total</p>
            <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder='Promo code'/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default cart
