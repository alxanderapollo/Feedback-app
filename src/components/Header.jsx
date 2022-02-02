import React from 'react';
import PropTypes from 'prop-types';

function Header({text}) {
  return <header>
      <div className="container">
        <h2>{text}</h2>
      </div>
  </header>;
}

//default props to be passed in if the user doesnt pass any props
Header.defaultProps = {
  text:'Feedback Ui'
}
//defined prop types

Header.propTypes = {
  text:PropTypes.string,
}

export default Header;
