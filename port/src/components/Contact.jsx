import React, { Component } from "react";

export default class Contact extends Component {

  constructor(props) {
   super(props);
  }
  render() {
    let resumeData = this.props.resumeData;
    return (
    <div id="contact" className="row">
      <h2>CONTACT ME THROUGH:</h2>
      <div>
       <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          </div>
    </div>
    );
  }
}
