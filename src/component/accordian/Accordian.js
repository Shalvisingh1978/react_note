import React, { useState } from 'react'
import { questions} from "./api";
import "./accordian.css";
import MyAccordian from "./MyAccordian";

const Accordian = () => {
    const [data, setData] = useState(questions);

  return(
    <>
    {
        data.map((currentElem) =>
      {
        const {id} = currentElem;
        return <MyAccordian key={id} {...currentElem} />;
      }
      )
    }
    </>
  );
}

export default Accordian;
