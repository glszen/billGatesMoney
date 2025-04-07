import React, { useState } from 'react';
import '../css/header.css';

function Header(){

    return(
        <div>
<nav className="navbar">
  <div className="container-fluid header justify-content-center d-flex">
    <img className='billImage mt-3' src="images\billgates.jpg" alt="Bill Gates"/>
    <span className="navbar-brand col-12 text-center txtb pb-4">Spend Bill Gates' Money</span>
  </div>
</nav>
        </div>
    )
}
export default Header