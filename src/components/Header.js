import React, { Component } from 'react';

class Header extends Component {
  render() {
    const styles = {
      headerStyle: {
        position: 'fixed',
        maxWidth: '70%',
        width: '100%',
        backgroundColor: '#00003f',
        boxShadow: '0 6px 7px 0 rgba(0, 0, 0, .15)'
      },
      divStyle: {
        paddingLeft: 24,
        paddingRight: 24,
        color: '#fff'
      },
      h2Style: {
        //padding: 15
      }
    };

    return (
      <header style={styles.headerStyle}>
        <div style={styles.divStyle}>
          <h2 style={styles.h2Style}>React Chat Application</h2>
        </div>
      </header>
    );
  }
}

export default Header;
