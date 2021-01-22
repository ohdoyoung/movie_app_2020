import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://blog.naver.com/bongs1021/221140403623",
    rating: 5,
  },
  {
    id: 2,
    name: "samgyeopsal",
    image:
      "https://search.naver.com/search.naver?sm=tab_hty.top&where=image&query=%EC%82%BC%EA%B2%B9%EC%82%B4&oquery=%EA%B9%80%EC%B9%98&tqi=hsqFjsprvhGss6VlOWNssssstPs-014284#",
    rating: 4.2,
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
