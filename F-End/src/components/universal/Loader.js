import React from 'react';
import './universal.css'

function Loader(props) {
    return(
      <div className="Load">
      <div className="Loader-bg" >
          <div align="center" className="loader-img">
            <img src="/assets/images/loader.png"  />
            <div class="loader-shadow"></div>
            <div><h4>{props.activity}</h4></div>
          </div>
      </div>   
      </div>
    );
}

export default Loader