import React, {useState} from 'react';
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'

import FeedbackData from './data/FeedbackData';
//jsx -> javascript xml^^6^^^^^^^^^^^^^^^^^^^^^
function App () {
  // feedback state takes feedback data, and we use that as a state
  //we then pass feed back as a prop for our feedback list where we will map through all of the 
  //items in that array of objects
  //the reson we are passing our feedback data into the state is because
  //since we are not using a context, and the feedback data coulod potentially change we use state since its reactive
  //for when the feed back items are updated
    const [feedback,setFeedback] = useState(FeedbackData)
    console.log(feedback)

    //this process is known as prop drilling, passing up props
    const deleteFeedback = (id) => {
      console.log('App', id)
      //returns an array minus the one we are deleting
      if(window.confirm('Are you sure you want to delete?')) setFeedback(feedback.filter((item) => item.id !== id))
    }
  return (<>
        <Header/>
    <div className="container">
      {/* feed back state  is ness since the data could change and we want the state to relect the same change in the component */}
      <FeedbackStats feedback={feedback}/>
      {/* passing in the state as a prop to feed back */}
       <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
    </div>
  </>);
};

export default App;
