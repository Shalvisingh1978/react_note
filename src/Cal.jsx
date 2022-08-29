import React from "react";
 
function add(a,b)
{
    let sum=a+b;
    return sum;
   
}
function  sub(a,b)
{
    let sub=a-b;
    return sub;
   
}
function multi(a,b)
{
    let multi=a*b;
    return multi;
   
}function divide(a,b)
{
    let divide=a/b;
    divide = divide.toFixed(2);
    return divide;
   
}
export { add, sub, multi, divide};

  