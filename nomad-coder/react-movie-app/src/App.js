import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component{
  state = {
    isLoading: true,
  };
  componentDidMount() {
    setTimeout(() =>{
      this.setState({isLoading: false});
    },2000)
  }

  render(){
    const {isLoading} = this.state;
    return (
    <div>
      <div>{isLoading? "isLoading.." : "We're ready"}</div>
    </div>)
  }
}

export default App;
