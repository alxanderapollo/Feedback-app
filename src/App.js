import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; //will use this to route to our other pages such as about me
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
//Bring in our Provider
import{FeedbackProvider} from './Context/FeedbackContext'

function App() {

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
