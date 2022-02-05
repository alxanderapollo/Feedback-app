import React from 'react';
import PropTypes from 'prop-types'
function FeedbackStats({feedback}) {
  //calculate ratings avg by adding all of them up
  //takes in our accumulators and current value
  //accumulator is our previous value and current val is the value we are current looking at
  //0 represents the default value for the acculator so when we start adding its 0+ current value.. and so on
  //finally we divide it to get the average of the feedback
  let avg = feedback.reduce((acc, currentVal) => {
    return acc + currentVal.rating
  }, 0) / feedback.length

  //only want it to be one decimal place at most
  //regex removes any triling numbers that we dont want
  avg = avg.toFixed(1).replace(/[.,]0$/,'')

  console.log(avg)
  return <div className="feedback-stats">

      <h4>{feedback.length} Reviews</h4>
      {/* if it comes up as not a number for average  set it to zero
      otherwise display the average */}
      <h4>Average  Rating: {isNaN(avg) ? 0 : avg}</h4>
  </div>
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired
}

export default FeedbackStats;
