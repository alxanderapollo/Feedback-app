import React, { useState } from "react";
import Button from "./shared/Button";
import Card from "./shared/Card";
import RatingSelect from "./RatingSelect";
function FeedbackForm( {handleAdd}) {
  const [text, setText] = useState("");
  //the button will be disabled unless a user enters more than 10 characters
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  //rating that will be set by the user
  const [rating, setRating]  = useState(10);


  const handleTextChange = (e) => {
    //if the text in the form is empty make it empty
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
      //if the text is not empty, but there are less than 10 characters then keep the button disabled
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      //other wise allow the user to submit there message, by undsiabling the button and removing the prompt
      //from the card
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  //creates the objecy with the text and rating submitted by the user
  const handleSubmit = (e) => {
      //prevents us from submitting to the actual file- also wont refresh the page
      e.preventDefault();
        //second check to make sure its ten or more characters on the form 
      if(text.trim().length > 10) {
          // if it is construct a new object called new feed back
          //bellow is a short hand for creating this object instead of doing text:text we can just write text
          const newFeedback ={
              text,
              rating
          }
          handleAdd(newFeedback)
          setText('')
      }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
       <RatingSelect select = {(rating) => setRating(rating)}/>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button isDisabled={btnDisabled} type="submit">
            send
          </Button>
        </div>
        {message && <div className="message">{message} </div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
