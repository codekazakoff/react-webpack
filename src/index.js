import React from "react";
import ReactDom from "react-dom";
import "./css/main.css";
import "./sass/index.scss";
import myImage from "./img/download.jpeg";

ReactDom.render(
    <div>
      <img src={myImage} alt="Password" />
      <h3>
        Hello World just React in Webpack
      </h3>
    </div>

  , document.getElementById("root"));