import React from "react";
import Card from "./Card";
import Sarrey from "./Sarrey";

const Netflix = () =>{
      return(
         <Card imgsrc={Sarrey[0].imgsrc}
        tittle={Sarrey[0].tittle}
        name={Sarrey[0].name}
        link= {Sarrey[0].link}>
        </Card>
        );
  }
export default Netflix;