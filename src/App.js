import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import data from './components/data'
import { useState } from 'react';
import { Cart } from './components/Cart';


function App() {

  let [productlist, setProduct] = useState(data.products)

  let [cartItems, setCartItem] = useState([])

  let onAdd = (product) => {
    let item = cartItems.find((x)=>x.id==product.id)
    if (item) {
      let updatedcart = cartItems.map((x) => { return x.id == product.id ? { ...item, qty: item.qty + 1 } : { ...x } })
      setCartItem(updatedcart)
      
    } else {
      // let copy_cartitems = cartItems
      // console.log(product);
      // copy_cartitems.push({ ...product, qyt: 1 })
      // setCartItem(copy_cartitems)
      setCartItem([...cartItems, { ...product, qty: 1 }])
      // console.log(cartItems);
    }

  }

  //on remove
  let onRemove = (product) => {
    if (product.qty == 1) {
      setCartItem(cartItems.filter(item => item.id != product.id))
    } else {
      setCartItem(cartItems.map((item) => {
        return item.id == product.id ? { ...item, qty: item.qty - 1 } : { ...item }
      }))
    }

  }

  //return header, main, cart
  return (
    <div >
      <Header cart = {cartItems.length}/>

      <div className="row className='bg-light'">

        <div className='col-sm-9'>
          <Main productlist={productlist} onAdd={onAdd} />
        </div>

        <div className='col-sm-3'>
          <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
        </div>

      </div>
    </div>
  );
}

export default App;
