import React from 'react';
import Card from "./Cards";
import Sdata from "./Sdata";
import Button from "./Button";
import Bdata from "./Bdata";

const App = () => (
  <>
      
  <div>
      <h2 className="heading"> PopCorn™ Web Series</h2>
  </div>
<div>
      {Bdata.map((val,index) => {
        return(
          <Button
          key={val.button}
          name={val.bname}
          link={val.link}
          />
        );
      }
      )}
</div>
<br/>
<br/>
<br/>
<br/>
 <div>
      {Sdata.map((val,index) => {
        return(
          <Card
        key={val.cards}
        imgsrc={val.imgsrc}
        sname={val.sname} 
        stitle={val.stitle} 
        blink={val.blink} />
        );
      })}
</div>
</>
);
export default App;
