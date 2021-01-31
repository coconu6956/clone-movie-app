import React from 'react';

function Food({ name, picture }){
  return (
    <div>
        <h2>I like {name}!</h2>
        <img src={picture} />
    </div>
  );
}

const foodILinke = [
  {
    name: '나나',
    image: 'https://image-notepet.akamaized.net/resize/620x-/seimage/20200722%2Fc78376a631ffd4c6683e28036e01c133.jpg',
  },
  {
    name: '코코',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7eE_O_Y93Ed6pQPS-fzAZpR08Yh69KaC03Q&usqp=CAU',
  },
  {
    name: '체리',
    image: 'https://imgc.1300k.com/aaaaaib/goods/215024/68/215024683959.jpg?3',
  }
];

function App() {
  return (
      <div>
        {foodILinke.map(dish => (<Food name={dish.name} picture={dish.image} />))}
      </div> 
    );
}

export default App;