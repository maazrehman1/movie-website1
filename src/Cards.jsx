import React from "react";
function Card(props) {
       return(
      <>
     <div className="cards">
        <div>
            <img src={props.imgsrc} alt="bbd" className="img"></img>
        </div>
        <br/>
            <span className="sname"  >{props.sname}</span>
        <br/>
            <h5 className="stitle">{props.stitle}</h5>
        <br/>
            <a href={props.blink} target="_blank" className="mainlink"> <button className="button"  > Watch Now</button>  </a>
    
      </div>
  
    </>
    );
  }
export default Card;  
