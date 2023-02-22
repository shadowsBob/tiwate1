import React from 'react'
import { Link } from 'react-router-dom'

function Cart() {
  const CartData = [
    {
      id: 1,
      name:"济沧海"
    },
    {
      id: 2,
      name:"殷紫萍"
    }
  ]
  return (
    <div id="cart">
      <h1>商品页</h1>
      <div id="item">
        {CartData.map((item) => (<Link key={item.id} to={ "/cart/"+item.id+"?k="+Math.random()}>[{ item.name}]</Link>))}
      </div>
    </div>
  )
}

export default Cart