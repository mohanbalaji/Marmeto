import React, { Component } from 'react';
import list from './list.css';

class List extends Component {
    render() {
      return (
        <div className="selectitem">
        <div className="headers">
            <h2>Flipkart</h2>
        </div>
            <div className="listofitem">
                <div className="heading">
                <h3>FEATURED COLLECTION</h3>
                </div>
                <div className="itemlist">
                    <div className="item-img">
                        <img src="https://rukminim1.flixcart.com/image/612/612/j2m6gsw0/t-shirt/3/a/e/xxl-stc156-dgrey-alan-jones-original-imaetxhfyx7jnk8q.jpeg?q=70"/>
                    </div>
                    <div className="pricelist">
                        <h2>Campus Solid Men grey white T-Shirt</h2>
                    <div><h3>price <span class="price"> ₹ 249</span></h3></div>
                    <div className="subbtn"> 
                        <button type="submit" className="submitbtn">ADD TO CART</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      )
    }
}

export default List;