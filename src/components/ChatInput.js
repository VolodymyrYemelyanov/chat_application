import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChatInput extends Component {
  static propTypes = {
    onSubmitMessage: PropTypes.func.isRequired
  };
  state = {
    message: ''
  };

  render() {
    const styles = {
      formStyle: {
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        bottom: 20,
        width: '65%',
        left: '50%',
        transform: 'translateX(-50%)',
        boxShadow: '0 7px 10px 0 rgba(0, 0, 0, .15)'
      },
      inputStyle: {
        display: 'block',
        width: '100%',
        padding: '20px 10px',
        fontSize: '16px',
        border: 'none'
      },
      inputNone: {
        display: 'none'
      }
    };

    return (
      <form
        style={styles.formStyle}
        action='.'
        onSubmit={e => {
          e.preventDefault();
          this.props.onSubmitMessage(this.state.message);
          this.setState({ message: '' });
        }}
      >
        <input
          style={styles.inputStyle}
          type='text'
          placeholder={'Enter message...'}
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })}
        />
        <input style={styles.inputNone} type='submit' value={'Send'} />
      </form>
    );
  }
}

export default ChatInput;
