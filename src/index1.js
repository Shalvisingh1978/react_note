import React from "react";
import ReactDOM from "react-dom";


// it is jsx syntax
// ReactDOM.render( <h1> Hello World!!!</h1>, document.getElementById("root"), );

// it is pure javascript to create new element

// var h1 = document.createElement("h1");
// h1.innerHTML = " shalvi singh react";
//  document.getElementById("root").appendChild(h1);

const currDate = new Date().toLocaleDateString();
const currTime =  new Date().toLocaleTimeString();

ReactDOM.render(
     <React.Fragment>
 <h1>NETFLIX SERIES</h1> 
 <p> lets have a netflix 5 series</p>
 <ol>
    <li>Daredevil (2015–2018) TV-MA | 54 min | Action, Crime, Drama.</li>
    <li>Money Heist (2017–2021) TV-MA | 70 min | Action, Crime, Drama.</li>
    <li>Narcos (2015–2017) TV-MA | 49 min | Biography, Crime, Drama.</li>
    <li>Top Boy (2011– )</li>
    <li>Stranger Things (2016– ) </li>
 </ol>
 
 <h1>shalvi singh</h1> 
 <p> {` Current Date= ${currDate}` } </p>
 <p> {` Current Time= ${currTime}` } </p>

     </React.Fragment>,
      document.getElementById("root"));
   