import logo from './logo.svg';
import './App.css';
import Productlist from './components/productlist';
import Navbar from './components/navbar';
import react, {useState} from 'react';
  
function App() {


  const product=[
    {
      name: "Iphone",
      price: 100000,
      quantity: 0,
    },
    
    {
      name: "Lipstick",
      price: 100,
      quantity: 0,

    },
    {
      name: "Pen",
      price: 10,
      quantity: 0,

    },
  ];
   
  const [productlist, setproductlist]=useState(product)

  const incrementquantity=(index)=>{
   let newproductlist=[...productlist];
    newproductlist[index].quantity++;
    setproductlist(newproductlist);

  }
  const decrementquantity=(index)=>{
   let  newproductlist=[...productlist];
    if(newproductlist[index].quantity>0){
    newproductlist[index].quantity--;}
    else{ newproductlist[index].quantity=0;}
    setproductlist(newproductlist);

  }
  return (<>

  <Navbar />  
  <div className="container">
  <Productlist product= {productlist} iq = {incrementquantity} dq={decrementquantity} /> </div> </>)
}

export default App;
