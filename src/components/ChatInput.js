import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ChatInput.css';

class ChatInput extends Component {
  static propTypes = {
    onSubmitMessage: PropTypes.func.isRequired
  };
  state = {
    message: ''
  };

  render() {
    return (
      <form
        className='formStyle'
        action='.'
        onSubmit={e => {
          e.preventDefault();
          this.props.onSubmitMessage(this.state.message);
          this.setState({ message: '' });
        }}
      >
        <input
          className='inputStyle'
          type='text'
          placeholder={'Enter message...'}
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })}
        />
        <input className='inputNone' type='submit' value={'Send'} />
      </form>
    );
  }
}

export default ChatInput;
