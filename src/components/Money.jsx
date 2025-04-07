import React, { useEffect, useState } from 'react';
import '../css/header.css';

function Money({totalMoney}) {
const[displayMoney, setDisplayMoney] = useState(totalMoney);

useEffect(()=> {
  const duration =500;
  const frameRate = 90;
  const steps = duration / frameRate;
  const difference = totalMoney - displayMoney;
  const increment = difference / steps;

  let currentStep =0;

  const interval = setInterval(() => {
    currentStep++;
    setDisplayMoney((prev) => prev+increment);

    if (currentStep >= steps) {
      clearInterval(interval);
      setDisplayMoney(totalMoney);
    }
  }, frameRate);
  return ()=> clearInterval(interval)

}, [totalMoney]);


    const formatMoney = (amount) => {
        return '$' + amount.toLocaleString();
    }
    return(
        <nav className="navbar moneyNavbar">
        <div className="container-fluid header2 justify-content-center d-flex">
          
          <span className="navbar-brand col-12 text-center txtb2">{formatMoney(displayMoney)}</span>
        </div>
      </nav>
    )
}

export default Money
