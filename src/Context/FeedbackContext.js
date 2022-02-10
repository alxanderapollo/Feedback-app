//wee need use effect so that we can so that our context is updated
import { createContext, useState, useEffect } from "react";

//our context
const FeedbackContext = createContext();

//the children that are passed in are all of the compoenets that will be passed in
export const FeedbackProvider = ({ children }) => {

//will be our spinner
const [isLoading, setIsLoading] = useState(true)

  // state to contain the objects with the information will be using
  //in this case the object represents the id, text and rating`
  
    // feedback state takes feedback data, and we use that as a state
  //we then pass feed back as a prop for our feedback list where we will map through all of the
  //items in that array of objects
  //the reson we are passing our feedback data into the state is because
  //since we are not using a context, and the feedback data coulod potentially change we use state since its reactive
  //for when the feed back items are updated
  const [feedback, setFeedback] = useState([]);

  //want use Effect to load once as our app loads
  //reason is we want to get everything that is currently inside of our database
  useEffect(() => {
    fetchFeedback()
  },[])

  //now that the app is running, we need to fetch the data from our json server back end
  const fetchFeedback = async () =>{
      const response = await fetch(`/feedback?_sort=id&_order=desc`)
      const data = await response.json()
     setFeedback(data)
    //at this point our data has fully loaded
     setIsLoading(false)
  } 


  //need to pass this state down to our form so we can use it along side of it
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  //this process is known as prop drilling, passing up props
  const deleteFeedback = async (id) => {
    //returns an array minus the one we are deleting
    if (window.confirm("Are you sure you want to delete?"))
    await fetch(`/feedback/${id}`, {method:'DELETE'})
      setFeedback(feedback.filter((item) => item.id !== id));
  };

  //checking to see if we are getting feed back added up into the app component
  const addFeedback = async (newFeedback) => {
    //for making requests to the back end - adding elements
    const response = await fetch('/feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        //set the body of the post method with our object
        body: JSON.stringify(newFeedback)
    })
    // now that we have our reponse we can use the data and add it to our array
    const data = await response.json()

    //calling uuid to generate a unique id for us
    // newFeedback.id = uuidv4();

    
    //so now that we have our new add feedback we must recall that the state is immutable
    // we cannot simply push onto it we need to update our state by copying the current state and creating
    // a New state
    //new feedback is our most our current feedback item, that will be added to the feedback state
    setFeedback([data, ...feedback]);
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
  const updateFeedback = async (id, updateItem) => {

    const response = await fetch(`/feedback/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        //set the body of the post method with our object
        body: JSON.stringify(updateItem)
    })
    // now that we have our reponse we can use the data and add it to our array
    const data = await response.json()

      //we get the id of the item we want to change and we do a check setFeedBack has the item we want to add as our updates items 
      //map through our current iteration of items
      //we look for the item that has the same id
      setFeedback(feedback.map((item)=> item.id === id ? {
         // if we have a match return the newly upated item and its array
         //and the updated item, other wise return only the item
         ...item, ...data}: item))
  }

  return (
    //   anything that we need passed down in the components happen here, data or functions....
    <FeedbackContext.Provider
      value={{ feedback,isLoading, feedbackEdit,  deleteFeedback, addFeedback, editFeedback,updateFeedback}}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
