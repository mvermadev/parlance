import React from 'react';

function LoginImg(props) {
    return(
      <div className="Login-Load">
      <div className="Login-Loader-bg" >
          <div align="center" className="Login-loader-img">
            <img src="/assets/images/loader.png"  />
            <div class="Login-loader-shadow"></div>
            <div><h4>{props.activity}</h4></div>
          </div>
      </div>   
      </div>
    );
}

export default LoginImg