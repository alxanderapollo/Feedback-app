import React, { useState } from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
//imports font awesome icons, FaTimes is the x icon we are using on the cards, FaEdit is the pencil icon
import { FaTimes, FaEdit } from "react-icons/fa";

import FeedbackContext from "../Context/FeedbackContext";

//recives an item from FeedbackList and appropoiately display each item
import Card from "./shared/Card";
export const FeedbackItem = ({ item }) => {
  //pull out delete feed back function
  const { deleteFeedback,editFeedback } = useContext(FeedbackContext);

  // card is styled component that can be used wherever we want to display a card
  return (
    <Card>
      {/* is the number that appears on the top left of the screen */}
      <div className="num-display">{item.rating}</div>

      {/* creates x on the right side of the screen on each card */}
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes className="purple" />
      </button>

      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="purple"/>
      </button>
      {/* tgext that goes into the card */}
      <div className="text-display">{item.text}</div>
    </Card>
  );
};
FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default FeedbackItem;
