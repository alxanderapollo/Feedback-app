import Card from '../components/shared/Card'
import React from 'react';
import {Link} from 'react-router-dom' // link does instant redirects without refreshing the page

function AboutPage() {
  return <Card>
    <div className="about">
      <h1>About this Project</h1>
      <p>This is a react app to leave feedback for a product or service</p>
      <p>Version:1.0.0</p>
    </div>

    <p>
      <Link to="/">Back to Home</Link>
    </p>


  </Card>
}

export default AboutPage;
