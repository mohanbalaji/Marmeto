import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Productcard extends Component {
    render() {
        const {
            title,
            price,
            imgSrc,
            id
        } = this.props;
      return (
        <div className="item">
            <Link to="/list">
                <img className="img-size" src={imgSrc}/>
                <h3>{title}</h3>
                <div><span class="price">$ {price}</span> </div>
            </Link>
        </div>
      )
    }
}

export default Productcard;