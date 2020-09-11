import React from 'react';

function Loader() {
    return(
      <div className="Loader-bg">
          <div align="center" className="loader-img">
            <img src="/assets/images/loader.png" />
            <div class="loader-shadow"></div>
          </div>
      </div>   
    );
}

export default Loader