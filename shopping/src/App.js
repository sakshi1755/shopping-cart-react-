import logo from './logo.svg';
import './App.css';
import Productlist from './components/productlist';
import Navbar from './components/navbar';
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
  return (<>
  <Navbar />  
  <Productlist product= {product}/>  </>)
}

export default App;
