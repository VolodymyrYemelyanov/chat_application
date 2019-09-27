import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className='headerContainer'>
        <div className='titleHeader'>
          <h2>React Chat Application</h2>
        </div>
      </header>
    );
  }
}

export default Header;
