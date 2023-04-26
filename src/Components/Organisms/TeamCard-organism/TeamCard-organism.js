import React from 'react'
import './TeamCard-organism.scss'
import TeamCard from '../../Molecules/Team/TeamCard'

export default function TeamCard_organism() {
  return (
    <div className="teamCard-organism">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <TeamCard
                    position="Chief Executive Officer & Founder"
                    image={
                        <img src={require('../../../images/person1.png')}  alt="image" />
                      } 
                    name = "NAME SURNAME"
                      />
                </div>

                <div className="col-md-3">
                    <TeamCard
                    position="Chief Technology Officer & Founder"
                    image={
                        <img src={require('../../../images/person2.png')}  alt="image" />
                      } 
                    name = "NAME SURNAME"
                      />
                </div>

                <div className="col-md-3">
                    <TeamCard
                    position="Chief Executive Officer & Founder"
                    image={
                        <img src={require('../../../images/person1.png')}  alt="image" />
                      } 
                    name = "Dr. Thomas Rosendahl"
                      />
                </div>

                <div className="col-md-3">
                    <TeamCard
                    position="Chief Financial 
                    Officer"
                    image={
                        <img src={require('../../../images/person4.png')}  alt="image" />
                      } 
                    name = "NAME SURNAME"
                      />
                </div>
                <div className="col-md-3">
                    <TeamCard
                    position="Chief Financial 
                    Officer"
                    image={
                        <img src={require('../../../images/person4.png')}  alt="image" />
                      } 
                    name = "NAME SURNAME"
                      />
                </div>
                <div className="col-md-3">
                    <TeamCard
                    position="Chief Financial 
                    Officer"
                    image={
                        <img src={require('../../../images/person4.png')}  alt="image" />
                      } 
                    name = "NAME SURNAME"
                      />
                </div>
                <div className="col-md-3">
                    <TeamCard
                    position="Chief Financial 
                    Officer"
                    image={
                        <img src={require('../../../images/person4.png')}  alt="image" />
                      } 
                    name = "NAME SURNAME"
                      />
                </div>
                <div className="col-md-3">
                    <TeamCard
                    position="Chief Financial 
                    Officer"
                    image={
                        <img src={require('../../../images/person4.png')}  alt="image" />
                      } 
                    name = "NAME SURNAME"
                      />
                </div>
            </div>
        </div>
{/* 

        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <TeamCard
                    position="Chief Executive Officer & Founder"
                    image={
                        <img src={require('../../../images/person5.png')}  alt="image" />
                      } 
                    name = "NAME SURNAME"
                      />
                </div>

                <div className="col-md-3">
                    <TeamCard
                    position="Chief Financial 
                    Officer"
                    image={
                        <img src={require('../../../images/person6.png')}  alt="image" />
                      } 
                    name = "NAME SURNAME"
                      />
                </div>

                <div className="col-md-3">
                    <TeamCard
                    position="Chief Executive Officer & Founder"
                    image={
                        <img src={require('../../../images/person1.png')}  alt="image" />
                      } 
                    name = "Dr. Thomas Rosendahl"
                      />
                </div>

                <div className="col-md-3">
                    <TeamCard
                    position="Chief Financial 
                    Officer"
                    image={
                        <img src={require('../../../images/person4.png')}  alt="image" />
                      } 
                    name = "NAME SURNAME"
                      />
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <TeamCard
                    position="Chief Executive Officer & Founder"
                    image={
                        <img src={require('../../../images/person1.png')}  alt="image" />
                      } 
                    name = "NAME SURNAME"
                      />
                </div>

                <div className="col-md-3">
                    <TeamCard
                    position="Chief Technology Officer & Founder"
                    image={
                        <img src={require('../../../images/person2.png')}  alt="image" />
                      } 
                    name = "NAME SURNAME"
                      />
                </div>

                <div className="col-md-3">
                    <TeamCard
                    position="Chief Executive Officer & Founder"
                    image={
                        <img src={require('../../../images/person1.png')}  alt="image" />
                      } 
                    name = "Dr. Thomas Rosendahl"
                      />
                </div>

                <div className="col-md-3">
                    <TeamCard
                    position="Chief Financial 
                    Officer"
                    image={
                        <img src={require('../../../images/person4.png')}  alt="image" />
                      } 
                    name = "NAME SURNAME"
                      />
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <TeamCard
                    position="Chief Executive Officer & Founder"
                    image={
                        <img src={require('../../../images/person1.png')}  alt="image" />
                      } 
                    name = "NAME SURNAME"
                      />
                </div>

                <div className="col-md-3">
                    <TeamCard
                    position="Chief Technology Officer & Founder"
                    image={
                        <img src={require('../../../images/person2.png')}  alt="image" />
                      } 
                    name = "NAME SURNAME"
                      />
                </div>

                <div className="col-md-3">
                    <TeamCard
                    position="Chief Executive Officer & Founder"
                    image={
                        <img src={require('../../../images/person1.png')}  alt="image" />
                      } 
                    name = "Dr. Thomas Rosendahl"
                      />
                </div>

                <div className="col-md-3">
                    <TeamCard
                    position="Chief Financial 
                    Officer"
                    image={
                        <img src={require('../../../images/person4.png')}  alt="image" />
                      } 
                    name = "NAME SURNAME"
                      />
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <TeamCard
                    position="Chief Executive Officer & Founder"
                    image={
                        <img src={require('../../../images/person1.png')}  alt="image" />
                      } 
                    name = "NAME SURNAME"
                      />
                </div>

                <div className="col-md-3">
                    <TeamCard
                    position="Chief Technology Officer & Founder"
                    image={
                        <img src={require('../../../images/person2.png')}  alt="image" />
                      } 
                    name = "NAME SURNAME"
                      />
                </div>

                <div className="col-md-3">
                    <TeamCard
                    position="Chief Executive Officer & Founder"
                    image={
                        <img src={require('../../../images/person1.png')}  alt="image" />
                      } 
                    name = "Dr. Thomas Rosendahl"
                      />
                </div>

                <div className="col-md-3">
                    <TeamCard
                    position="Chief Financial 
                    Officer"
                    image={
                        <img src={require('../../../images/person4.png')}  alt="image" />
                      } 
                    name = "NAME SURNAME"
                      />
                </div>
            </div>
        </div> */}
    </div>
  )
}
