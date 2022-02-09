import React, {useState} from 'react';
import PropTypes from 'prop-types';
//imports font awesome icons
import {FaTimes} from 'react-icons/fa'
//recives an item from FeedbackList and appropoiately display each item
import Card from './shared/Card'
export const FeedbackItem = ({item, handleDelete}) => {
  
  // card is styled component that can be used wherever we want to display a card
  return <Card>
    {/* is the number that appears on the top left of the screen */}
    <div className="num-display">{item.rating}</div>

    {/* creates x on the right side of the screen on each card */}
    <button onClick={() => handleDelete(item.id)} className="close">
      <FaTimes className="purple"/>
    </button>
    {/* tgext that goes into the card */}
    <div className="text-display">{item.text}</div>       
  </Card>;
};
FeedbackItem.propTypes = {
  item:PropTypes.object.isRequired
}
export default FeedbackItem;