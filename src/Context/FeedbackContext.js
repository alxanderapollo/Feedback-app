import { createContext, useState } from "react";

import { v4 as uuidv4 } from "uuid";

//our context
const FeedbackContext = createContext();

//the children that are passed in are all of the compoenets that will be passed in
export const FeedbackProvider = ({ children }) => {
    // state to contain the objects with the information will be using
    //in this case the object represents the id, text and rating`
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is fromt he context',
      rating: 10
    },
  ]);

    //this process is known as prop drilling, passing up props
    const deleteFeedback = (id) => {
        console.log("App", id);
        //returns an array minus the one we are deleting
        if (window.confirm("Are you sure you want to delete?"))
          setFeedback(feedback.filter((item) => item.id !== id));
      }
      
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
  };;
    

  return (
    //   anything that we need passed down in the components happen here, data or functions....
    <FeedbackContext.Provider value={{feedback,deleteFeedback, addFeedback }}>{children}</FeedbackContext.Provider>
  );
};

export default FeedbackContext;