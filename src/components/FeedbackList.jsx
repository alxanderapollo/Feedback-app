import React from "react";
import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
//use context hook so we can use the context in this component
import FeedbackContext from "../Context/FeedbackContext";
import Spinner from './shared/Spinner'
import { motion, AnimatePresence } from "framer-motion";
const FeedbackList = () => {
  //the hook takes  FeedbackContext
  const { feedback, isLoading } = useContext(FeedbackContext);

  //if there arent any spinners loading, and the feedback is empty show  no feedback yet
  if (!isLoading && (!feedback || feedback.length === 0))
    return <p>No Feedback yet</p>;

  return isLoading ? (
    <Spinner/>
  ) : (
    <div className="feedback-list">
      {/* initlia is opacity,meaning whether the component will be invisible or not */}
      {/* animate it to be visible  */}
      {/* exit will fade out */}
      <AnimatePresence>
        {feedback.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
