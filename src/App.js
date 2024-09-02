import React from "react";
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Cards from './Components/Cards';
import Cards1 from './Components/Cards1';


function youtube(){
  return(
    <div>
      <Sidebar/>
      <Header/>
      <Cards/>
      <Cards1/>
    </div>
  );
}

export default youtube;