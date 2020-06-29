import React from 'react';

function NavBar() {
  return (
    <div>
       <div className="ui inverted red menu">
            <a className="item">
                <h2 className="ui header">
                    <i className="paint brush icon" />
                    <div className="content">Painting App</div>
                </h2>
            </a>
        </div>
    </div>
  );
}

export default NavBar;