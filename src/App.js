import React, {useState} from 'react';
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData';
//jsx -> javascript xml
function App () {
  // feedback state takes feedback data, and we use that as a state
  //we then pass feed back as a prop for our feedback list where we will map through all of the 
  //items in that array of objects
  //the reson we are passing our feedback data into the state is because
  //since we are not using a context, and the feedback data coulod potentially change we use state since its reactive
  //for when the feed back items are updated
    const [feedback,setFeedback] = useState(FeedbackData)
  return (<>
        <Header/>
    <div className="container">
      {/* passing in the state as a prop to feed back */}
       <FeedbackList feedback={feedback}/>
    </div>
  </>);
};

export default App;
