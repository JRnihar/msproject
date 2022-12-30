import './App.css';
import CardDetails from './Components/Home/CardDetails';
import FromData from './Components/Home/FromData';
import Home from './Components/Home/Home';
import Part2section from './Components/Home/Part2section';
import ProductDetails from './Components/Home/ProductDetails';
import Products from './Components/Home/Products';

function App() {
  return (
    <div className='App'>
     <Home/>
     <Part2section/>
     <ProductDetails/>
     <CardDetails/>
     <Products/>
     <FromData/>
    </div>
  );
}

export default App;
