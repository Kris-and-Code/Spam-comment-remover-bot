import React from 'react';
import logo from './youtube-logo-2431.svg'



import './Header.css';

const Header: React.FC = () => {
  return(
      <div className='container-fluid' > 
       <div className='row'> 
            <div className="col-sm-2">
                <img className='logo' src={logo} />
            </div>
            <div className="col-sm-4">
                <span className='text'> 
                <h1>YouTube Spam Comment </h1>
                <h1> Remover Tool</h1>
                </span>
                
                
            </div>
      </div>
      </div> 
  );
};

export default Header;