import React from 'react';
import './universal.css'

function Loader(props) {
    return(
      <div  style={{margin: '0px', padding: '0px', width:'100vw', height:'100vh', overflow: 'hidden', zIndex:'99', position: 'fixed', top: '0px', left: '0px', right: '0px', bottom: '0px'}}>
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