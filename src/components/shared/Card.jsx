import React from 'react';

//the purpose of this component is so that whenever we need to show a card 
//we can pass in the data that will make the card here

//the children that are being passed is the data contained within feedback item, setting up children means 
//the children are the feedbackitems which are some divs and the items 
function Card({children}) {
    
  return <div className="card">{children}</div>;
}

export default Card;
