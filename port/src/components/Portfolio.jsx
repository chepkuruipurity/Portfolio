import React, { Component } from "react";

import purity from '../images/purity.jpg'
export default class Portfolio extends Component {

  constructor(props) {
   super(props);
  }
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
      <div className="row">

   

         <div className="column1">

            <p>Hi there,</p>
            <p className="name"> I'M PURITY CHEPKURUI</p>
           <p>I am a front end developer focussed on writing clean code and user friendly websites. I have a knack of learning new technologies.</p>

           
         </div>
         <div className="column2">

<img className="profile-pic"  src={purity} alt="" />

</div>
      </div>
   </section>
 
    );
  }
}