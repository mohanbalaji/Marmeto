import React, { Component } from 'react';
import './App.css';
import Productcard from './components/Productcard/Productcard'

let data = [
  {
    title: 'Campus Solid Men grey white T-Shirt - 1',
    price: 244,
    imgSrc: 'https://rukminim1.flixcart.com/image/612/612/j2m6gsw0/t-shirt/3/a/e/xxl-stc156-dgrey-alan-jones-original-imaetxhfyx7jnk8q.jpeg?q=70',
    id:'2'
  },
  {
    title: 'Campus Solid Men grey white T-Shirt - 2',
    price: 244,
    imgSrc: 'https://rukminim1.flixcart.com/image/612/612/j2m6gsw0/t-shirt/3/a/e/xxl-stc156-dgrey-alan-jones-original-imaetxhfyx7jnk8q.jpeg?q=70',
    id:'2'
  },
  {
    title: 'Campus Solid Men grey white T-Shirt - 3',
    price: 244,
    imgSrc: 'https://rukminim1.flixcart.com/image/612/612/j2m6gsw0/t-shirt/3/a/e/xxl-stc156-dgrey-alan-jones-original-imaetxhfyx7jnk8q.jpeg?q=70',
    id:'2'
  }  
]


class App extends Component {
  render() {
    return (
      <div className="main">
      <div className="header">
          <h2>Flipkart</h2>
      </div>
      <div className="fullimg">
        <h4>Online Shopping</h4>
        <h1>Mens Collection..</h1>
      </div>
      <div className="listofitems">
        <div className="title">
          <h3>FEATURED COLLECTION</h3>
        </div>
        <div className="fullitems">
        {
          data.map((item,index) => 
            <Productcard {...item} />
          )
        }

          </div>

          <div className="btn"> 
              <button type="submit" className="submit-btn">Next</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
