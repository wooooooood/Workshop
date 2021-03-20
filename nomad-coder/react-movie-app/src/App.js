import React from 'react';
import PropTypes from 'prop-types'

function Food({name, rating}) {  //(props) => props.fav
  return <h3>🍌 {name}: {rating}/5.0</h3>
}

const foodILike = [{id: 1, name: "kimchi", rating:3}, {id:2, name: "samgiopsal",rating:4}];
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string,
  rating: PropTypes.number.isRequired,
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {
        foodILike.map((dish) => <Food key={dish.id} name={dish.name} rating={dish.rating}/>)
      }
    </div>
  );
}

export default App;
