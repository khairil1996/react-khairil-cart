import React from 'react'
import './Product.css'

export const Cart = ({ cartItems, onAdd, onRemove }) => {

  let itemprice = cartItems.reduce((x, item) => { return x + item.qty * item.price }, 0)

  //start dengan 26

  let TaxCharges = itemprice * 0.15
  let ShippingCharge = itemprice < 2000 ? 50 : 0
  let TotalPrice = itemprice + TaxCharges + ShippingCharge

  return (
    <div id='center'>
      <table>
        <tbody>
          <tr><td><h1>Cart</h1></td></tr>
          <tr>            
            <td>{cartItems.length == 0 ? "cart is empty" : ""}
              {cartItems.map(product => {
                return (<>
                  <table className="table-bordered ">
                    <tbody>
                      <tr>
                        <td colspan="3">{product.name}</td>
                        <td colspan="3">${product.price}</td>
                      </tr>
                      <tr>
                        <td colspan="3">
                          <button className='btn btn-success btn-sm' onClick={() => onAdd(product)}>+</button>
                          {product.qty}
                          <button className='btn btn-success btn-sm' onClick={() => onRemove(product)}>-</button>
                        </td>
                        <td colspan="3">SubTotal: ${product.qty * product.price}</td>
                      </tr>
                    </tbody>
                  </table>

                </>)
              })}
            </td>
          </tr>
          <tr>
            <td>==================</td>
          </tr>
          <tr>
            <td>
              {cartItems.length > 0 ? (<>
              <table className="table table-success table-striped">
                <tr>
                  <td>
                  <h6>Item Total</h6>
                  ${itemprice}
                  </td>
                </tr>
                <tr>
                  <td>
                  <h6>Tax</h6>
                  ${TaxCharges}
                  </td>
                </tr>
                <tr>
                  <td>
                  <h6>Shipping Charge</h6>
                  ${ShippingCharge}
                  </td>
                </tr>
                <tr>
                  <td>
                  <h5>Total Price</h5><div><h5>${TotalPrice}</h5></div>
                  </td>
                </tr>
              
                
              
                

              </table>
            

              </>) : ""}
            </td>

          </tr>
        </tbody>



        <br />

        {/* Tax charges = {cartItems.length>0?TaxCharges:""}
        <br />

        Shipping fee = {cartItems.length>0?ShippingCharge:""}   
        <br />      */}


      </table>

    </div>
  )
}
