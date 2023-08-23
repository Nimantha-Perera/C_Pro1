import React from "react";
import Search_bar from "../Search_bar/Search_bar";
import Categorys from "../Categorys/Categorys";
import Nav from '../Navi Component/Nav'
import Footer from "../Footer/Footer";
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const handlePostAddClick = ()=>{
    navigate('/PostAdd');
  }
  return (
    <div>
      
      <Search_bar />

      <Categorys />
     

      {/* Post Add button */}
      <div className="post-add-button">
        <button className="btn  btn-block"  onClick={handlePostAddClick}><i class="bi bi-plus-circle"></i> Post Add</button>
      </div>
    </div>
  );
}
