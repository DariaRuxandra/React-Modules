import React from "react";
import "./TeamCard-organism.scss";
import TeamCard from "../../Molecules/Team/TeamCard";

export default function TeamCard_organism() {
  return (
    <div className="teamCard-organism">
      <div className="header">
        <div className="row-container">
        <h1>Meet our leadership team</h1>
        <p>The values fusce sollicitudin, sapien quis luctus gravida, risus velit tempus.</p>
        </div>
      </div>


      <div className="container">
        <div className="row">

          <div className="col-md-3">
            <TeamCard
              position="Chief Technology Officer & Founder"
              image={
                <img src={require("../../../images/person2.png")} alt="image" />
              }
              name="NAME SURNAME"
              flippedName="NAME SURNAME"
              flippedDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
          </div>

          <div className="col-md-3">
            <TeamCard
              position="Chief Executive Officer & Founder"
              image={
                <img src={require("../../../images/person1.png")} alt="image" />
              }
              name="NAME SURNAME"
              flippedName="NAME SURNAME"
              flippedDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
          </div>

          <div className="col-md-3">
            <TeamCard
              position="Chief Executive Officer & Founder"
              image={
                <img src={require("../../../images/person9.png")} alt="image" />
              }
              name="Dr. Thomas Rosendahl"
              flippedName="Dr. Thomas Rosendahl"
              flippedDescription="With more than 25 years of experience Thomas is an experienced leader in large-scale digital transformation as well as developing strategy and innovation approaches. For cleverbridge, he is charged with enhancing the offer strategy and driving revenue transformation."
              socialIcon={<></>}
            />
          </div>

          <div className="col-md-3">
            <TeamCard
              position="Chief Financial 
                    Officer"
              image={
                <img src={require("../../../images/person4.png")} alt="image" />
              }
              name="NAME SURNAME"
              flippedName="NAME SURNAME"
              flippedDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
          </div>
          <div className="col-md-3">
            <TeamCard
              position="Chief Financial 
                    Officer"
              image={
                <img src={require("../../../images/person5.png")} alt="image" />
              }
              name="NAME SURNAME"
              flippedName="NAME SURNAME"
              flippedDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
          </div>
          <div className="col-md-3">
            <TeamCard
              position="Chief Financial 
                    Officer"
              image={
                <img src={require("../../../images/person6.png")} alt="image" />
              }
              name="NAME SURNAME"
              flippedName="NAME SURNAME"
              flippedDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
          </div>
          <div className="col-md-3">
            <TeamCard
              position="Chief Financial 
                    Officer"
              image={
                <img src={require("../../../images/person7.png")} alt="image" />
              }
              name="NAME SURNAME"
              flippedName="NAME SURNAME"
              flippedDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
          </div>
          <div className="col-md-3">
            <TeamCard
              position="Chief Financial 
                    Officer"
              image={
                <img src={require("../../../images/person8.png")} alt="image" />
              }
              name="NAME SURNAME"
              flippedName="NAME SURNAME"
              flippedDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
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
  );
}