import React, { Component } from "react";

export default class Blog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div className="column2">
          <h2>ABOUT ME</h2>
          <p>
            I am dynamic and detail oriented web developer with a knack for
            delivering and conceptualizing elegant user friendly solutions
            efficiently and efficiently. I am proficient in languages such as
            javaScript, css, html5, bootstrap, jquery, node.js and currently
            learning react.js
          </p>
        </div>
        <div className="column1">
          <h2>GOALS AND ASPIRATIONS</h2>
          <input 
       />
            <button className="btn add" type="button">
              ADD
            </button>
            <button className="btn delete" type="button">
              DELETE
            </button>
        
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    );
  }
}
