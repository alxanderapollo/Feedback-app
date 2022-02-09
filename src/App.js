import React, { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; //will use this to route to our other pages such as about me
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackData from "./data/FeedbackData";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

//npm i  uuid to generate unique id's for each of our feed back items
import { v4 as uuidv4 } from "uuid";

function App() {
  // feedback state takes feedback data, and we use that as a state
  //we then pass feed back as a prop for our feedback list where we will map through all of the
  //items in that array of objects
  //the reson we are passing our feedback data into the state is because
  //since we are not using a context, and the feedback data coulod potentially change we use state since its reactive
  //for when the feed back items are updated
  const [feedback, setFeedback] = useState(FeedbackData);
  console.log(feedback);

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
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          {/* the exact says look at the url and match the exact path of the URL */}
          <Route
            exact
            path="/"
            element={
              <>
                {/* passes up the form data submitted by the user to be added to our current global way of storing information */}
                <FeedbackForm handleAdd={addFeedback} />

                {/* feed back state  is ness since the data could change and we want the state to relect the same change in the component */}
                <FeedbackStats feedback={feedback} />
                {/* passing in the state as a prop to feed back */}
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
                <AboutIconLink/>
              </>
            }
          ></Route>

          {/* PAssing about page as a component */}
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
