import React from 'react';

//the children that are being passed is the data contained within feedback item, setting up children means 
//the children are the feedbackitems which are some divs and the items 
function Card({children}) {
    
  return <div>{children}</div>;
}

export default Card;
