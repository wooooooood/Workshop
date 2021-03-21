import React from 'react';
import axios from 'axios'

class App extends React.Component{
  state = {
    isLoading: true,
  };

  getMovies = async() => {
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({movies, isLoading: false}); // = {movies: movies}
  }

  componentDidMount() {
    this.getMovies();
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
