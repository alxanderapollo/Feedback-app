import React, { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; //will use this to route to our other pages such as about me
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackData from "./data/FeedbackData";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
//Bring in our Provider
import{FeedbackProvider} from './Context/FeedbackContext'

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

  return (
    <FeedbackProvider>
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
                <FeedbackForm />

                {/* feed back state  is ness since the data could change and we want the state to relect the same change in the component */}
                <FeedbackStats />
                {/* passing in the state as a prop to feed back */}
                <FeedbackList/>
                <AboutIconLink/>
              </>
            }
          ></Route>

          {/* PAssing about page as a component */}
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
