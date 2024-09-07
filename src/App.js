import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/home';
import './index.css'; // or the appropriate path
import FindUs from './Components/find';
import Product from './Components/Product';
import Newsletter from './Components/newsLatter';
import Activity from './Components/Activity';
import Footer from './Components/Footer';
import Book from './Components/BookPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <FindUs />
      <Product />
      <Activity/>
      <Book />
      <Newsletter />
      <Footer />
   
    </div>
  );
}

export default App;
