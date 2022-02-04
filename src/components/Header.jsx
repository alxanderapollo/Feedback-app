import React from 'react';
import PropTypes from 'prop-types';

function Header({text,bgColor,textColor}) {
  //styles can be made outside of return statement and placed into varaibles 

  const headerStyles = {
    backgroundColor: bgColor,
    color:textColor,
  }
  return <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
  </header>;
}

//default props to be passed in if the user doesnt pass any props
Header.defaultProps = {
  text:'Feedback Ui', 
  bgColor:'rgba(0,0,0,0.4)',
  textColor:'#ff6a95'
}
//defined prop types
Header.propTypes = {
  text:PropTypes.string,
  bgColor: PropTypes.string,
  textColor:PropTypes.string,
}

export default Header;
