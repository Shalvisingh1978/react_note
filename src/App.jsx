// 1...........
// import React from "react";
// import ReactDOM from "react-dom";
// import Heading from "./Heading";
// import Para from "./Para";
// import List from "./List";
//  function App()
//  {
//     return (
//         <>
//           <Heading></Heading>
//         <Para></Para>
//         <List />
//         </>
//     );
//  }
//  export default App;



//2............
// import React from "react";
// import "./index.css";

// const SlotM = (props) => {
//     // let a = ' 😄';
//     // let b = ' 😄';
//     // let c = ' 🦺';
//     //we can use either this 
// // let a = props.a;
// // let b = props.b;        or either this
// // let c = props.c;

// let { a,b,c} =props;

//     if (a === b && b === c) {
//         return (
//             <>
//             <div className="slot_style">
//             <h1>
//                     {a} {b} {c}
//                 </h1>
//                 <h1>This is Matching.</h1>
//                 <hr></hr>

//             </div>
//             </> 
//         );
//     }
//     else {
//         return (
//             <>
//             <div className="slot_style">
//             <h1>
//                     {a} {b} {c}
//                 </h1>
//                 <h1>This is not  Matching.</h1>
//                 <hr></hr>

//             </div>
//             </> 
//         );
//     }
// };

// const App = () => {
//     return (
//         <>
//             <h1 className="heading_style">🎰 Welcome to <span style={{ fontweight: "bold" }} >Slot Machine Game</span>🎰</h1>;
//             <div className="slot_outer">
//             <SlotM a=" 😄" b=" 😄" c=" 😄" />
//             <SlotM a=" 👎" b=" 🥇" c=" 👎" />
//             <SlotM a=" ⛵" b=" ⛵" c=" ⛵" />
//             </div>

//         </>
//     );

// }
// export default App;


//3....................
// import React, {useState} from "react";
// import "./index.css";

//  const App = () =>
//  {
// const state = useState();

//  const [count, setCount]=useState(0);

// const IncNum = () =>
// {
//     setCount(count + 1);
// };

//     return (
//     <>
//         <h1 className="zero"> {count} </h1>
//         <button className="click" onClick={IncNum}>Click Me</button>
//     </>
//     );
//  }

//  export default App;



//4............................
// import React, {useState} from "react";
// import "./index.css";

//  const App = () =>
//  {

// let time = new Date().toLocaleTimeString();
//  const [ntime, currDate]=useState(time);

// const UpdateTime = () =>
// {
//  const uptime = new Date().toLocaleTimeString();
//  currDate(uptime);
// };

//     return (
//     <>
//         <h1 className="zero"> {time} </h1>
//         <button className="click" onClick={ UpdateTime}>Get Time</button>
//     </>
//     );
//  }

//  export default App;


//5...............................................
//  import React, {useState} from "react";
// import "./index.css";

//  const App = () =>
//  {

// let time = new Date().toLocaleTimeString();
//  const [ntime, currDate]=useState(time);

// const UpdateTime = () =>
// {
//  const uptime = new Date().toLocaleTimeString();
//  currDate(uptime);
// };

// setInterval(UpdateTime,1000)
//     return (
//     <>
//         <h1 className="zero"> {time} </h1>
//     </>
//     );
//  }

//  export default App;

// import React, { useState } from "react";
// import "./index.css";

// const App = () => {
//     const color = "purple";
//     const [bg, setBg] = useState(color);
//     const [name, setTxt] = useState("Click Me");

//     const text = () => {
//         let newbg = "#34495e"
//         setBg(newbg);
//         setTxt( "ouuchhh!! 😏");

//     };
    
//     const txtBack = () => {
//         setBg(color);
//         setTxt( "Ayyyooo!! 😠");

//     };

//     return (
//         <>
//             <div style={{ backgroundColor: bg }}>
//                 <button className="click" onClick={text} onDoubleClick={txtBack}>{name}</button>
//             </div>
//         </>
//     );
// }

// export default App;


import React from "react";
import "./index.css";

const App = () =>
{
    const text = () =>
    {
      
    }

    return (
        <>
            <div>
            <h1>Hello</h1>
                <button onClick={text} >submit</button>
            </div>
        </>
    );
}
export default App;