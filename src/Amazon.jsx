import React from "react";
import Card from "./Card";
import Sarrey from "./Sarrey";

const Amazon = () =>{
      return(
        <Card imgsrc={Sarrey[4].imgsrc}
        tittle={Sarrey[4].tittle}
        name={Sarrey[4].name}
        link= {Sarrey[4].link}>
        </Card>);
  }
export default Amazon;