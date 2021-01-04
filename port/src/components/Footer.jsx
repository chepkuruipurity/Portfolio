import React, { Component } from "react";

export default class Footer extends Component {

  constructor(props) {
   super(props);
  }
  render() {
    let resumeData= this.props.resumeData;
    return (
        <footer>
         <div className="row">
       
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
         
            <div className="copyright">© Copyright 2021 Purity Chepkurui</div>
         
         
        </div>
       
      </footer>
    );
  };
};