import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'; // Import useNavigate
import Nav from './Navi Component/Nav';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search_bar from './Search_bar/Search_bar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Categorys from './Categorys/Categorys';
import Footer from './Footer/Footer';
import Home from './Main_Pages/Home';
import Post_Youre_Add from './Main_Pages/Post_Youre_Add';
import Profile_main from './Profile View Section/Profile_main';
import All_ads from './Add Show Component/All_ads';
import AdDetails from '../src/Ad_Details/AdDetails';
import Faq from './FAQ/Faq';

function App() {
  return (
    <Router>
      <div className="App sec1">
      <Nav/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PostAdd" element={<Post_Youre_Add />} />
          <Route path='/Dashboard' element={<Profile_main />} />
          <Route path='/allads' element={<All_ads />} />
          <Route path='/FAQ' element={<Faq/>} />
          {/* Define a route for ad details */}
          <Route path="/ad/:adId" element={<AdDetails />} />
          {/* Add more routes for other pages if needed */}
        </Routes>
  
      </div>
      <Footer/>
    </Router>
   
  );
}

export default App;
