//1...........
// import React from "react";
// import ReactDOM from "react-dom";

// let currDate = new Date();
//  currDate =  currDate.getHours();
//  let gretting = '';
//  const cssStyle = { };
//  if(currDate>=1 && currDate<12)
//  {
//    gretting = " Good Morning";
//    cssStyle.color='green';
//  }
//  else if(currDate>=12 && currDate<19)
//  {
//     gretting = " Good Afternoon";
//     cssStyle.color='yellow';
//  }
//  else if(currDate>=19 && currDate<=24)
//  {
//     gretting = " Good Evening";
//     cssStyle.color='red';
//  }
// const  design ={
//     display:"flex",
//     justifyContent:"center",
//     alignItems:"center",
// height: "92vh"

// };

// ReactDOM.render(
//      <React.Fragment>
//      <h1 style={design}> hiiii sir, <span Style={cssStyle}>{gretting}</span> </h1>
//      </React.Fragment>,
//       document.getElementById("root"));

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(
//      <React.Fragment>
//      {/* heading component */}
//    {/* <Heading></Heading>
//    <Para></Para>
//  <List /> */}

//  <App></App>
//      </React.Fragment>,
//       document.getElementById("root"));


//2...........................
//  import React from "react";
//  import ReactDOM from "react-dom";
//  import { add, sub, multi, divide } from "./Cal";

//  ReactDOM.render(
//      <React.Fragment>
//   <ol>
//    <li> sum of two number: {add(10,4)}</li>
//    <li> sub of two number: {sub(10,4)}</li>
//    <li> multi of two number: {multi(10,4)}</li>
//    <li> divide of two number: {divide(10,4)}</li>
//   </ol>
//       </React.Fragment>,
//          document.getElementById("root"));


//3.............................
// import React from "react";
// import ReactDOM from "react-dom";
// import Card from "./Card";
// import "./index.css";
// import Sarrey from "./Sarrey";

//   function ncard(val)
//   {
//     return  (
//       <>
//             <Card imgsrc={val.imgsrc}
//     tittle={val.tittle}
//     name={val.name}
//     link= {val.link}>
//     </Card>
//       </>
//      );
//   }
// ReactDOM.render(

//     <React.Fragment>
//       <h1 className="heading_style"> list of 5 top web series on netflix</h1>
//     {Sarrey.map(ncard)};

//     </React.Fragment>,
//     document.getElementById("root"));

//4..................................
// import React from "react";
// import ReactDOM from "react-dom";
// import Amazon from "./Amazon";
// import "./index.css";
// import Netflix from "./Netflix";

// const myFav = "netflix";
// // const favS = () => {
// //   if (myFav === "netflix") {
// //     return <Netflix />;
// //   } else {
// //     return <Amazon />;

// //   }
// // };
// ReactDOM.render(

//   <React.Fragment>
//     <h1 className="heading_style"> list of 5 top web series on netflix</h1>
//    {/* <favS></favS> */}
//    {myFav === "netflix"?<Netflix />:<Amazon />}
//   </React.Fragment>,
//   document.getElementById("root"));


import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
    <React.Fragment>
<App />
    </React.Fragment>,
    document.getElementById("root"));

