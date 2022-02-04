import React from 'react';
import PropTypes from 'prop-types'
//the purpose of this component is so that whenever we need to show a card 
//we can pass in the data that will make the card here

//the children that are being passed is the data contained within feedback item, setting up children means 
//the children are the feedbackitems which are some divs and the items 
function Card({children, reverse}) {
 // reverse is a class that just reverse the card color from a white background- to black text to black background
 //white text
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
}

Card.defaultProps = {
    reverse:false
}
Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}

export default Card;
