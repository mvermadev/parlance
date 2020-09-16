import React from 'react';
import './Fellowmonk.css';

function Fellowmonk() {
    return(
        <div align="center" className="chatbot-container">
            <p><iframe class="chatbot" style={{ border: 'none', scrolling: 'no', overflow: 'hidden' }} src="https://fellowmonk.netlify.com/"></iframe></p>
        </div>
    );
}

export default Fellowmonk;