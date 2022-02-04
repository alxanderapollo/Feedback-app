import React, {useState} from 'react';
//recives an item from FeedbackList and appropoiately display each item
import Card from './shared/Card'
export const FeedbackItem = ({item}) => {
  // card is styled component that can be used wherever we want to display a card
  return <Card>
    {/* is the number that appears on the top left of the screen */}
    <div className="num-display">{item.rating}</div>
    {/* tgext that goes into the card */}
    <div className="text-display">{item.text}</div>       
  </Card>;
};
export default FeedbackItem;