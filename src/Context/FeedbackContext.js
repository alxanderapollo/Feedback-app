import { createContext, useState } from "react";

import { v4 as uuidv4 } from "uuid";

//our context
const FeedbackContext = createContext();

//the children that are passed in are all of the compoenets that will be passed in
export const FeedbackProvider = ({ children }) => {
  // state to contain the objects with the information will be using
  //in this case the object represents the id, text and rating`
  
    // feedback state takes feedback data, and we use that as a state
  //we then pass feed back as a prop for our feedback list where we will map through all of the
  //items in that array of objects
  //the reson we are passing our feedback data into the state is because
  //since we are not using a context, and the feedback data coulod potentially change we use state since its reactive
  //for when the feed back items are updated
  const [feedback, setFeedback] = useState([
    {
      id: 0,
      text: "This is item1",
      rating: 1,
    },
    {
      id: 1,
      text: "This is item2",
      rating: 10,
    },
    {
      id: 2,
      text: "This is item3",
      rating: 5,
    },
  ]);


  //need to pass this state down to our form so we can use it along side of it
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  //this process is known as prop drilling, passing up props
  const deleteFeedback = (id) => {
    console.log("App", id);
    //returns an array minus the one we are deleting
    if (window.confirm("Are you sure you want to delete?"))
      setFeedback(feedback.filter((item) => item.id !== id));
  };

  //checking to see if we are getting feed back added up into the app component
  const addFeedback = (newFeedback) => {
    //calling uuid to generate a unique id for us
    newFeedback.id = uuidv4();

    // console.log(newFeedback)
    //so now that we have our new add feedback we must recall that the state is immutable
    // we cannot simply push onto it we need to update our state by copying the current state and creating
    // a New state
    //new feedback is our most our current feedback item, that will be added to the feedback state
    setFeedback([newFeedback, ...feedback]);
  };
  //item is the particular item we are editing
  //edit is s state that will change depending on whether we are editing or not

  //set edit item to be updated
  const editFeedback = (item) => {
    //set the state for edit item here
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  //now that we can edit the item we need to update our items
  const updateFeedback = (id, updateItem) => {
      //we get the id of the item we want to change and we do a check setFeedBack has the item we want to add as our updates items 
      //map through our current iteration of items
      //we look for the item that has the same id
      setFeedback(feedback.map((item)=> item.id === id ? {
         // if we have a match return the newly upated item and its array
         //and the updated item, other wise return only the item
         ...item,...updateItem}: item))
  }

  return (
    //   anything that we need passed down in the components happen here, data or functions....
    <FeedbackContext.Provider
      value={{ feedback, deleteFeedback, addFeedback, editFeedback,updateFeedback, feedbackEdit }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
