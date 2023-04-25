import React from 'react'
import './FilteredCard-organism.scss'
import FilteredCard from '../../Molecules/FilteredCard/FilteredCard'
import Card_rectangle from './Card-rectangle'

export default function FilteredCard_organism() {
  return (
    <div className="filteredCard-organism">
      <div className="container">   {/* a row */}
        <div className="row">
          <div className="col-md-3">
            <FilteredCard
            image={
              <img src={require('../../../images/walmart.png')}  alt="image" />
            }
            field = "DIGITAL GOODS"
            text = "Providing customers with a smooth payment experience at Walmart."/>
          </div>

          <div className="col-md-3">
            <FilteredCard
            image={
              <img src={require('../../../images/airbnb.png')}  alt="image" />
            }
            field = "E-COMMERCE"
            text = "How Airbnb dapibus interdum timing for your users recipients bank account."/>
          </div>

          <div className="col-md-3">
            <FilteredCard
            image={
              <img src={require('../../../images/amazon.png')}  alt="image" />
            }
            field = "SOFTWARE"
            text = "Providing customers with a smooth payment experience at Amazon."/>
          </div>

          <div className="col-md-3">
            <FilteredCard
            image={
              <img src={require('../../../images/microsoft.png')}  alt="image" />
            }
            field = "SAAS"
            text = "Microsoft account information service tempus risus orci in mollis lobortis."/>
          </div>
        </div>
      </div>

      <div className="container">   {/* a row */}
        <div className="row">
          <div className="col-md-6">
            <FilteredCard
            image={
              <img src={require('../../../images/google.png')}  alt="image" />
            }
            field = "DIGITAL GOODS"
            text = "Providing customers with a smooth payment experience at account information service pricing models tempus risus orci in mollis lobortis."/>
          </div>

          <div className="col-md-3">
            <FilteredCard
            image={
              <img src={require('../../../images/microsoft-dark.png')}  alt="image" />
            }
            field = "SOFTWARE"
            text = "Microsoft account information service tempus risus orci in mollis lobortis."/>
          </div>

          <div className="col-md-3">
            <FilteredCard
            image={
              <img src={require('../../../images/amazon.png')}  alt="image" />
            }
            field = "E-COMMERCE"
            text = "Providing customers with a smooth payment experience at Amazon."/>
          </div>
        </div>
      </div>

      <Card_rectangle
      text="Monetize your digital offerings with different  pricing models, billing scenarios and payment methods. "/>

      <div className="container">   {/* a row */}
        <div className="row">
          <div className="col-md-3">
            <FilteredCard
            image={
              <img src={require('../../../images/walmart.png')}  alt="image" />
            }
            field = "DIGITAL GOODS"
            text = "Providing customers with a smooth payment experience at Walmart."/>
          </div>

          <div className="col-md-3">
            <FilteredCard
            image={
              <img src={require('../../../images/airbnb.png')}  alt="image" />
            }
            field = "E-COMMERCE"
            text = "How Airbnb dapibus interdum timing for your users recipients bank account."/>
          </div>

          <div className="col-md-3">
            <FilteredCard
            image={
              <img src={require('../../../images/amazon.png')}  alt="image" />
            }
            field = "SOFTWARE"
            text = "Providing customers with a smooth payment experience at Amazon."/>
          </div>

          <div className="col-md-3">
            <FilteredCard
            image={
              <img src={require('../../../images/microsoft.png')}  alt="image" />
            }
            field = "SAAS"
            text = "Microsoft account information service tempus risus orci in mollis lobortis."/>
          </div>
        </div>
      </div>


    </div>
  )
}
