import { createContext, useState } from "react";

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

  return (
    //   anything that we need passed down in the components happen here, data or functions....
    <FeedbackContext.Provider value={{feedback, }}>{children}</FeedbackContext.Provider>
  );
};

export default FeedbackContext;