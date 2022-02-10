import React, { useState, useContext, useEffect } from "react";
import Button from "./shared/Button";
import Card from "./shared/Card";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../Context/FeedbackContext";

function FeedbackForm() {
  const [text, setText] = useState("");
  //the button will be disabled unless a user enters more than 10 characters
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  //rating that will be set by the user
  const [rating, setRating] = useState(10);

  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

  //use effect works as a side effect as result of some event taking place
  //feedback Edit is the state that will be updated as a consquence of the
  //event firing in this case - the dependency array is set of items that will be changed everytime
  //the web page is fired and in this case its our feed back edit item when a user tries to edit the an object
  useEffect(() => {
    //what we want is for when a user clicks on edit - to dsiable the button
    if (feedbackEdit.edit === true) {
      //1. enable the send button
      setBtnDisabled(false);
      //set the text of the case inside of the text bar
      setText(feedbackEdit.item.text);
      //get the rating of the item into the obj
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

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
    if (text.trim().length > 10) {
      // if it is construct a new object called new feed back
      //bellow is a short hand for creating this object instead of doing text:text we can just write text
      const newFeedback = {
        text,
        rating,
      };

      //if we are editing and item, check the edit atribute to see if its true, if it is pass the id and a new feed back item
      if(feedbackEdit.edit === true ) updateFeedback(feedbackEdit.item.id, newFeedback);
      else addFeedback(newFeedback);

      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
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
