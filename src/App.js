
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from './Components/Bar';
import Product from './Components/Product';
import Footer from './Components/Footer';
import Services  from './Components/Services';
import TopSellers from './Components/Topsellers';
import Productdetail from './Components/Productdetail';
function App() {
  return (
    <>
    <BrowserRouter>
    <Bar/>
    <Routes>
      <Route path='/product' elements={<Product/>}/>
      {/* <Route path='/Services' elements={<Services/>}/>
      <Route path='/TopSellers' elements={<TopSellers/>}/>
      <Route path='/Productdetails' elements={<Productdetail/>}/> */}
    </Routes>
    <Services/>
    <TopSellers/>
    <Productdetail/>

    <Footer/>
    </BrowserRouter>
  
   </>
  );
}

export default App;
