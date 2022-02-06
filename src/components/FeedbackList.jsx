import React from "react";
import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";

import { motion, AnimatePresence } from "framer-motion";
const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length == 0) return <p>No Feedback yet</p>;

  return (
    <div className="feedback-list">
        {/* initlia is opacity,meaning whether the component will be invisible or not */}
        {/* animate it to be visible  */}
        {/* exit will fade out */}
      <AnimatePresence>
        {feedback.map((item, index) => (
          <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} >
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

// return (<div className="feedback-list">
// {feedback.map((item,index) => (
//   //   handle delte here gives us full control of the id
//   //the handle delte function in Feed back item is passing back  up the id of the item that is being
//   //clicked that id is then being logged in the feedback list (id) => console.log(id)

//   //now handleDelete is being passed back up into app js where it will be placed into a delete function
//     <FeedbackItem key={item.id} item={item}  handleDelete={handleDelete} />
// )
FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};
export default FeedbackList;
